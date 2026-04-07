# Design Document: WordPress Blog

## Overview

This feature integrates a WordPress CMS (hosted externally) into the ADIF GROUP Next.js application via the WordPress REST API. It adds two routes:

- `/blog` — listing page with filterable post cards
- `/blog/[slug]` — single post reading page

Both pages are React Server Components using Next.js App Router, enabling server-side data fetching for SEO and performance. The design follows the existing project conventions: Tailwind CSS utility classes, the `blue-deep` / `gold` color palette, Cormorant Garamond serif headings, and DM Sans body text.

---

## Architecture

```mermaid
graph TD
    A[Browser] -->|GET /blog| B[app/blog/page.tsx - RSC]
    A -->|GET /blog/slug| C[app/blog/[slug]/page.tsx - RSC]
    B --> D[lib/wordpress.ts - API Client]
    C --> D
    D -->|HTTP GET| E[WordPress REST API]
    E -->|JSON| D
    B --> F[BlogCard component]
    B --> G[CategoryTabs - Client Component]
    C --> H[PostContent component]
```

The WordPress API client (`lib/wordpress.ts`) is the single point of contact with the external CMS. Pages are server components that fetch data at request time (or build time via `generateStaticParams`). Category filtering is the only interactive piece and is handled by a thin client component (`CategoryTabs`) that filters an already-fetched list client-side, avoiding extra network round-trips.

---

## Components and Interfaces

### File Structure

```
app/
  blog/
    page.tsx                  # Blog listing page (RSC)
    [slug]/
      page.tsx                # Single post page (RSC)
  components/
    blog/
      BlogCard.tsx            # Post card component
      CategoryTabs.tsx        # Client component for category filtering
      PostContent.tsx         # Renders sanitized post HTML
lib/
  wordpress.ts                # WordPress REST API client + types
```

### `lib/wordpress.ts`

Central API client. Reads `NEXT_PUBLIC_WORDPRESS_API_URL` from environment.

Key exports:
- `getPosts(params?)` — fetches posts with `_embed` for featured images and terms
- `getPostBySlug(slug)` — fetches a single post by slug
- `getCategories()` — fetches all categories
- `WPPost` type — typed shape of a WordPress post with embedded data
- `WPCategory` type — typed shape of a WordPress category

### `app/blog/page.tsx`

Server component. Fetches all posts and categories in parallel. Passes data to `CategoryTabs` (client component) which handles the active-filter state and renders `BlogCard` components.

### `app/blog/[slug]/page.tsx`

Server component. Fetches a single post by slug. Exports `generateMetadata` for SEO. Exports `generateStaticParams` to pre-render all slugs at build time. Renders `PostContent`.

### `BlogCard.tsx`

Pure presentational component. Receives a `WPPost` and renders:
- Featured image (with fallback placeholder)
- Category label (gold badge)
- Title (serif font)
- Excerpt (stripped of HTML tags)
- Publication date (formatted)
- Link wrapping the card to `/blog/[slug]`

### `CategoryTabs.tsx`

`'use client'` component. Receives all posts and all categories as props. Manages `activeCategory` state. Filters posts and renders a grid of `BlogCard` components. Renders category filter tabs including an "All" tab.

### `PostContent.tsx`

Renders the full WordPress post HTML. Uses `dangerouslySetInnerHTML` with sanitization via a lightweight approach (stripping `<script>` tags and `on*` event attributes using a regex-based sanitizer, since `DOMPurify` requires a browser DOM — server-safe alternative is `sanitize-html` npm package).

---

## Data Models

### `WPPost`

```typescript
interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string; // ISO 8601
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}
```

### `WPCategory`

```typescript
interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}
```

### API Endpoints Used

| Purpose | Endpoint |
|---|---|
| All posts (with embed) | `GET /wp-json/wp/v2/posts?_embed&per_page=100` |
| Single post by slug | `GET /wp-json/wp/v2/posts?slug={slug}&_embed` |
| All categories | `GET /wp-json/wp/v2/categories?per_page=100` |
| All slugs (static params) | `GET /wp-json/wp/v2/posts?per_page=100&fields=slug` |

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

---

Property 1: Post cards contain required fields
*For any* post returned by the WordPress API, the rendered `BlogCard` output should contain the post title, a date string, and a valid href pointing to `/blog/[slug]`
**Validates: Requirements 1.3, 4.2**

---

Property 2: Category filter correctness
*For any* set of posts and a selected category ID, the filtered list returned by the category filter logic should contain only posts whose embedded term IDs include the selected category ID
**Validates: Requirements 2.2**

---

Property 3: "All" tab shows all posts
*For any* set of posts, selecting the "All" category should return the complete unfiltered list
**Validates: Requirements 2.3**

---

Property 4: Excerpt HTML stripping
*For any* excerpt string containing HTML tags, the stripped version rendered in `BlogCard` should contain no HTML tag characters (`<` or `>`)
**Validates: Requirements 1.3**

---

Property 5: API error propagation
*For any* HTTP error status code returned by the WordPress API, the client function should throw an error whose message includes that status code
**Validates: Requirements 5.3**

---

Property 6: Sanitized HTML contains no script tags
*For any* HTML string passed to the sanitizer, the output should contain no `<script` substrings and no `on`-prefixed event handler attributes
**Validates: Requirements 3.4**

---

Property 7: generateStaticParams covers all slugs
*For any* set of posts returned by the API, `generateStaticParams` should return an array whose length equals the number of posts, with each entry containing a `slug` field matching a post slug
**Validates: Requirements 6.5**

---

## Error Handling

| Scenario | Behavior |
|---|---|
| WordPress API unreachable | Page renders an error UI with a message; no crash |
| Post slug not found (404) | `notFound()` called — Next.js renders 404 page |
| Featured image missing | `BlogCard` renders a placeholder (`/placeholder-blog.jpg`) |
| Empty posts array | Listing page renders a "No posts found" message |
| Malformed HTML in content | Sanitizer strips unknown/dangerous tags before render |

---

## Testing Strategy

### Dual Testing Approach

Both unit tests and property-based tests are used:

- **Unit tests** cover specific examples, edge cases, and integration points (e.g., a known post object renders the correct title)
- **Property-based tests** verify universal correctness across randomly generated inputs (e.g., any post object always produces a valid card link)

### Property-Based Testing

Library: **fast-check** (TypeScript-native, works in Node/Jest/Vitest)

Configuration:
- Minimum 100 runs per property test
- Each test tagged with: `Feature: wordpress-blog, Property N: <property_text>`

### Unit Tests

Focus areas:
- `lib/wordpress.ts`: error throwing on non-OK responses, correct URL construction
- `BlogCard`: renders title, date, link href
- Category filter logic: correct filtering by category ID, "All" returns full list
- HTML sanitizer: strips `<script>` and event handlers

### Test File Locations

```
lib/
  __tests__/
    wordpress.test.ts       # API client unit + property tests
    sanitize.test.ts        # Sanitizer property tests
app/
  components/blog/
    __tests__/
      BlogCard.test.tsx     # BlogCard unit + property tests
      CategoryTabs.test.tsx # Filter logic property tests
```
