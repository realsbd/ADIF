# Requirements Document

## Introduction

This feature adds a blog section to the ADIF GROUP Next.js application. The blog content is sourced from a separately hosted WordPress CMS via the WordPress REST API. The section includes a blog listing page displaying post cards across all categories, and a single post page for reading full articles. The implementation uses Next.js App Router with server-side rendering for SEO and performance.

## Glossary

- **WordPress_API**: The WordPress REST API hosted at a configurable base URL, providing endpoints for posts, categories, and media
- **Blog_Listing_Page**: The page at `/blog` that displays a grid of post cards for all categories
- **Blog_Single_Page**: The page at `/blog/[slug]` that displays the full content of a single post
- **Post_Card**: A UI component displaying a post's featured image, category label, title, excerpt, and publication date
- **Slug**: The URL-friendly identifier for a WordPress post, used to route to the single post page
- **Featured_Image**: The primary image associated with a WordPress post, retrieved via the `_embedded` parameter
- **Excerpt**: A short summary of a post's content, provided by the WordPress REST API

## Requirements

### Requirement 1: Blog Listing Page

**User Story:** As a site visitor, I want to browse all blog posts on a dedicated listing page, so that I can discover articles across all categories.

#### Acceptance Criteria

1. THE Blog_Listing_Page SHALL be accessible at the `/blog` route within the Next.js application
2. WHEN the Blog_Listing_Page loads, THE Blog_Listing_Page SHALL fetch and display Post_Cards for all published posts from the WordPress_API
3. WHEN posts are fetched, THE Blog_Listing_Page SHALL display each post's featured image, category label, title, excerpt, and publication date within a Post_Card
4. WHEN a Featured_Image is unavailable for a post, THE Post_Card SHALL display a placeholder image in its place
5. WHEN the WordPress_API returns posts, THE Blog_Listing_Page SHALL display posts in reverse chronological order (newest first)
6. THE Blog_Listing_Page SHALL include the application Navbar and Footer components

### Requirement 2: Category Filtering

**User Story:** As a site visitor, I want to filter blog posts by category, so that I can find articles relevant to my interests.

#### Acceptance Criteria

1. WHEN the Blog_Listing_Page loads, THE Blog_Listing_Page SHALL fetch all available categories from the WordPress_API and display them as filter tabs
2. WHEN a visitor selects a category tab, THE Blog_Listing_Page SHALL display only Post_Cards belonging to that category
3. WHEN a visitor selects the "All" tab, THE Blog_Listing_Page SHALL display Post_Cards for all categories
4. WHEN a category is active, THE Blog_Listing_Page SHALL visually distinguish the active category tab from inactive tabs

### Requirement 3: Blog Single Post Page

**User Story:** As a site visitor, I want to read a full blog post on a dedicated page, so that I can consume the complete article content.

#### Acceptance Criteria

1. THE Blog_Single_Page SHALL be accessible at the `/blog/[slug]` route, where `[slug]` is the WordPress post slug
2. WHEN the Blog_Single_Page loads, THE Blog_Single_Page SHALL fetch and display the full post content from the WordPress_API using the post slug
3. WHEN displaying a post, THE Blog_Single_Page SHALL render the post title, featured image, publication date, category labels, and full HTML content
4. WHEN rendering full HTML content from WordPress, THE Blog_Single_Page SHALL sanitize the HTML before rendering to prevent XSS vulnerabilities
5. THE Blog_Single_Page SHALL include a back-navigation link to the Blog_Listing_Page
6. THE Blog_Single_Page SHALL include the application Navbar and Footer components

### Requirement 4: Navigation Integration

**User Story:** As a site visitor, I want to navigate to the blog from the main site, so that I can access the blog section easily.

#### Acceptance Criteria

1. WHEN a visitor clicks a Post_Card on the Blog_Listing_Page, THE Blog_Listing_Page SHALL navigate the visitor to the corresponding Blog_Single_Page
2. THE Post_Card SHALL use the post Slug to construct the link to the Blog_Single_Page

### Requirement 5: WordPress API Integration

**User Story:** As a developer, I want a centralized API client for WordPress, so that all data fetching is consistent and maintainable.

#### Acceptance Criteria

1. THE WordPress_API client SHALL read the WordPress base URL from an environment variable (`NEXT_PUBLIC_WORDPRESS_API_URL`)
2. WHEN fetching posts, THE WordPress_API client SHALL request posts with embedded media and terms using the `_embed` parameter
3. WHEN the WordPress_API returns an error response, THE WordPress_API client SHALL throw a descriptive error containing the HTTP status code
4. WHEN the WordPress_API is unreachable, THE Blog_Listing_Page SHALL display an error message to the visitor
5. WHEN the WordPress_API is unreachable, THE Blog_Single_Page SHALL display an error message to the visitor

### Requirement 6: Performance and SEO

**User Story:** As a developer, I want the blog pages to be server-rendered with proper metadata, so that they are SEO-friendly and load quickly.

#### Acceptance Criteria

1. THE Blog_Listing_Page SHALL be rendered using Next.js server-side data fetching (React Server Component or `generateStaticParams`)
2. THE Blog_Single_Page SHALL be rendered using Next.js server-side data fetching
3. WHEN generating the Blog_Single_Page, THE Blog_Single_Page SHALL export a `generateMetadata` function that sets the page title and description from the post data
4. THE Blog_Listing_Page SHALL export metadata with a static title and description for the blog section
5. WHERE static generation is used, THE Blog_Single_Page SHALL implement `generateStaticParams` to pre-render all post slugs at build time
