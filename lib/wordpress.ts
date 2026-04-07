export interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_WP_API_URL;

// ── Dummy fallback data ──────────────────────────────────────────────────────
export const DUMMY_POSTS: WPPost[] = [
  {
    id: 1,
    slug: 'navigating-global-investment-opportunities',
    date: '2025-03-15T10:00:00',
    title: { rendered: 'Navigating Global Investment Opportunities in 2025' },
    excerpt: { rendered: '<p>As markets evolve, savvy investors are looking beyond traditional assets. Discover how ADIF GROUP identifies high-yield opportunities across emerging markets.</p>' },
    content: { rendered: '<p>As markets evolve, savvy investors are looking beyond traditional assets. Discover how ADIF GROUP identifies high-yield opportunities across emerging markets and positions capital for long-term growth.</p><p>The global investment landscape has shifted dramatically over the past decade. With interest rates stabilizing and emerging markets showing resilience, the opportunities for strategic capital deployment have never been more compelling.</p><p>At ADIF GROUP, our approach combines rigorous due diligence with deep regional expertise. We evaluate each opportunity through multiple lenses — macroeconomic trends, sector dynamics, regulatory environment, and management quality.</p><p>Our portfolio spans real estate, private equity, and structured finance instruments, each carefully selected to provide both capital appreciation and income generation.</p>' },
    featured_media: 0,
    _embedded: {
      'wp:featuredmedia': [{ source_url: '/public/dubai.jpeg', alt_text: 'Dubai skyline' }],
      'wp:term': [[{ id: 1, name: 'Investment', slug: 'investment' }]],
    },
  },
  {
    id: 2,
    slug: 'dubai-real-estate-market-outlook',
    date: '2025-02-28T09:00:00',
    title: { rendered: 'Dubai Real Estate Market Outlook: A Decade of Growth' },
    excerpt: { rendered: '<p>Dubai continues to attract global capital with its tax-friendly environment and world-class infrastructure. Here is what investors need to know heading into the next cycle.</p>' },
    content: { rendered: '<p>Dubai continues to attract global capital with its tax-friendly environment and world-class infrastructure. Here is what investors need to know heading into the next cycle.</p><p>The emirate has consistently ranked among the top destinations for real estate investment, driven by strong population growth, tourism, and a diversifying economy.</p><p>Key indicators point to sustained demand in the luxury residential segment, with off-plan sales reaching record highs. Commercial real estate, particularly Grade A office space, is also experiencing a renaissance as multinational corporations establish regional headquarters in Dubai.</p>' },
    featured_media: 0,
    _embedded: {
      'wp:featuredmedia': [{ source_url: '/public/bk0006.png', alt_text: 'Dubai real estate' }],
      'wp:term': [[{ id: 2, name: 'Real Estate', slug: 'real-estate' }]],
    },
  },
  {
    id: 3,
    slug: 'corporate-structuring-for-global-expansion',
    date: '2025-01-20T08:00:00',
    title: { rendered: 'Corporate Structuring Strategies for Global Expansion' },
    excerpt: { rendered: '<p>Effective corporate structuring is the backbone of any successful international business. Learn how the right structure can protect assets and optimize tax efficiency.</p>' },
    content: { rendered: '<p>Effective corporate structuring is the backbone of any successful international business. Learn how the right structure can protect assets and optimize tax efficiency.</p><p>When expanding globally, businesses face a complex web of regulatory requirements, tax obligations, and operational considerations. The choice of corporate structure — whether a holding company, joint venture, or branch office — has profound implications for liability, taxation, and governance.</p><p>ADIF GROUP works with clients to design bespoke corporate structures that align with their strategic objectives while ensuring full compliance with local and international regulations.</p>' },
    featured_media: 0,
    _embedded: {
      'wp:featuredmedia': [{ source_url: '/public/logo_adif.jpeg', alt_text: 'Corporate structure' }],
      'wp:term': [[{ id: 3, name: 'Business', slug: 'business' }]],
    },
  },
  {
    id: 4,
    slug: 'wealth-management-in-uncertain-times',
    date: '2024-12-10T11:00:00',
    title: { rendered: 'Wealth Management in Uncertain Times' },
    excerpt: { rendered: '<p>Volatility is not the enemy of wealth — mismanagement is. Explore the principles that guide ADIF GROUP\'s approach to preserving and growing client wealth.</p>' },
    content: { rendered: '<p>Volatility is not the enemy of wealth — mismanagement is. Explore the principles that guide ADIF GROUP\'s approach to preserving and growing client wealth through market cycles.</p><p>True wealth management goes beyond portfolio construction. It encompasses estate planning, risk management, tax optimization, and philanthropic strategy. Our holistic approach ensures that every aspect of a client\'s financial life is coordinated and aligned with their long-term goals.</p>' },
    featured_media: 0,
    _embedded: {
      'wp:featuredmedia': [{ source_url: '/public/dubai.jpeg', alt_text: 'Wealth management' }],
      'wp:term': [[{ id: 1, name: 'Investment', slug: 'investment' }]],
    },
  },
  {
    id: 5,
    slug: 'the-rise-of-sustainable-investing',
    date: '2024-11-05T10:00:00',
    title: { rendered: 'The Rise of Sustainable Investing in the GCC' },
    excerpt: { rendered: '<p>ESG investing is no longer a niche strategy. Across the Gulf, institutional and private investors are integrating sustainability into their core investment frameworks.</p>' },
    content: { rendered: '<p>ESG investing is no longer a niche strategy. Across the Gulf, institutional and private investors are integrating sustainability into their core investment frameworks.</p><p>The GCC region is undergoing a profound transformation, driven by national visions that prioritize economic diversification and environmental stewardship. Saudi Vision 2030, UAE Net Zero 2050, and similar initiatives are reshaping the investment landscape and creating new opportunities in renewable energy, green infrastructure, and sustainable real estate.</p>' },
    featured_media: 0,
    _embedded: {
      'wp:featuredmedia': [{ source_url: '/public/bk0006.png', alt_text: 'Sustainable investing' }],
      'wp:term': [[{ id: 4, name: 'Sustainability', slug: 'sustainability' }]],
    },
  },
  {
    id: 6,
    slug: 'private-equity-opportunities-mena',
    date: '2024-10-18T09:00:00',
    title: { rendered: 'Private Equity Opportunities Across MENA' },
    excerpt: { rendered: '<p>The MENA private equity market is maturing rapidly. With a growing pipeline of investable companies and improving exit environments, the timing has never been better.</p>' },
    content: { rendered: '<p>The MENA private equity market is maturing rapidly. With a growing pipeline of investable companies and improving exit environments, the timing has never been better for strategic private equity deployment.</p><p>Key sectors attracting private equity interest include technology, healthcare, education, and consumer goods — all benefiting from young, growing populations and rising middle-class consumption.</p>' },
    featured_media: 0,
    _embedded: {
      'wp:featuredmedia': [{ source_url: '/public/logo_adif.jpeg', alt_text: 'Private equity' }],
      'wp:term': [[{ id: 2, name: 'Real Estate', slug: 'real-estate' }]],
    },
  },
];

export const DUMMY_CATEGORIES: WPCategory[] = [
  { id: 1, name: 'Investment', slug: 'investment', count: 2 },
  { id: 2, name: 'Real Estate', slug: 'real-estate', count: 2 },
  { id: 3, name: 'Business', slug: 'business', count: 1 },
  { id: 4, name: 'Sustainability', slug: 'sustainability', count: 1 },
];

// ── API helpers ──────────────────────────────────────────────────────────────
async function wpFetch<T>(path: string): Promise<T | null> {
  if (!BASE_URL) return null;
  try {
    const res = await fetch(`${BASE_URL}/wp-json/wp/v2${path}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json() as Promise<T>;
  } catch {
    return null;
  }
}

export async function getPosts(): Promise<{ posts: WPPost[]; isFallback: boolean }> {
  const data = await wpFetch<WPPost[]>('/posts?_embed&per_page=100');
  if (!data || data.length === 0) return { posts: DUMMY_POSTS, isFallback: true };
  return { posts: data, isFallback: false };
}

export async function getPostBySlug(slug: string): Promise<{ post: WPPost | null; isFallback: boolean }> {
  const data = await wpFetch<WPPost[]>(`/posts?slug=${slug}&_embed`);
  if (!data || data.length === 0) {
    const fallback = DUMMY_POSTS.find((p) => p.slug === slug) ?? null;
    return { post: fallback, isFallback: true };
  }
  return { post: data[0], isFallback: false };
}

export async function getCategories(): Promise<{ categories: WPCategory[]; isFallback: boolean }> {
  const data = await wpFetch<WPCategory[]>('/categories?per_page=100');
  if (!data || data.length === 0) return { categories: DUMMY_CATEGORIES, isFallback: true };
  return { categories: data, isFallback: false };
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
