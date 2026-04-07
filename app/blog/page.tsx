import { getPosts, getCategories, stripHtml, formatDate, type WPPost } from '@/lib/wordpress';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Insights & News — ADIF GROUP',
  description: 'Explore the latest insights, market analysis, and news from ADIF GROUP.',
};

function PostCard({ post }: { post: WPPost }) {
  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name;
  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 160) + '…';

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-blue-deep">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-deep to-blue-mid" />
        )}
        {category && (
          <span className="absolute top-4 left-4 text-[11px] tracking-[0.1em] uppercase bg-gold text-white px-3 py-1">
            {category}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <p className="text-[12px] text-text-muted tracking-wide">{formatDate(post.date)}</p>
        <h3
          className="font-serif text-xl text-text-dark leading-snug group-hover:text-blue-mid transition-colors duration-200"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <p className="text-sm text-text-muted leading-relaxed flex-1">{excerpt}</p>
        <span className="text-[12px] tracking-[0.08em] uppercase text-gold font-medium mt-2">
          Read More →
        </span>
      </div>
    </Link>
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const [{ posts, isFallback }, { categories }] = await Promise.all([
    getPosts(),
    getCategories(),
  ]);

  const activeCategory = searchParams.category ?? 'all';

  const filtered =
    activeCategory === 'all'
      ? posts
      : posts.filter((p) => {
          const terms = p._embedded?.['wp:term']?.[0] ?? [];
          return terms.some((t) => t.slug === activeCategory);
        });

  return (
    <>
      <Navbar />

      {/* Hero banner */}
      <section className="pt-32 pb-16 bg-blue-deep text-white text-center px-6">
        <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-3">ADIF GROUP</p>
        <h1 className="font-serif text-5xl md:text-6xl font-light mb-4">Insights &amp; News</h1>
        <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed mb-8">
          Market analysis, investment perspectives, and thought leadership from our team.
        </p>
        <a
          href="https://www.aixinvestment.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[12px] tracking-[0.12em] uppercase py-3 px-8 border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 rounded-sm"
        >
          Explore AIX Investment →
        </a>
      </section>

      <main className="bg-off-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Fallback notice */}
          {isFallback && (
            <div className="mb-8 px-4 py-3 bg-gold/10 border border-gold/30 text-gold text-sm rounded-sm text-center">
              Showing sample content — live CMS is currently unavailable.
            </div>
          )}

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            <Link
              href="/blog"
              className={[
                'text-[12px] tracking-[0.08em] uppercase px-5 py-2 border transition-colors duration-200',
                activeCategory === 'all'
                  ? 'bg-blue-deep text-white border-blue-deep'
                  : 'border-gray-300 text-text-muted hover:border-blue-deep hover:text-blue-deep',
              ].join(' ')}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog?category=${cat.slug}`}
                className={[
                  'text-[12px] tracking-[0.08em] uppercase px-5 py-2 border transition-colors duration-200',
                  activeCategory === cat.slug
                    ? 'bg-blue-deep text-white border-blue-deep'
                    : 'border-gray-300 text-text-muted hover:border-blue-deep hover:text-blue-deep',
                ].join(' ')}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-text-muted py-24">No posts found in this category.</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
