import { getPostBySlug, getPosts, formatDate } from '@/lib/wordpress';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const { posts } = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { post } = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title.rendered} — ADIF GROUP`,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { post, isFallback } = await getPostBySlug(params.slug);
  if (!post) notFound();

  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const category = post._embedded?.['wp:term']?.[0]?.[0];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-blue-deep text-white overflow-hidden">
        {image && (
          <div className="absolute inset-0 opacity-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          {category && (
            <Link
              href={`/blog?category=${category.slug}`}
              className="inline-block text-[11px] tracking-[0.2em] uppercase text-gold mb-4 hover:text-gold-hover transition-colors"
            >
              {category.name}
            </Link>
          )}
          <h1
            className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <p className="text-white/50 text-sm">{formatDate(post.date)}</p>
        </div>
      </section>

      <main className="bg-off-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-16">

          {isFallback && (
            <div className="mb-8 px-4 py-3 bg-gold/10 border border-gold/30 text-gold text-sm rounded-sm text-center">
              Showing sample content — live CMS is currently unavailable.
            </div>
          )}

          {/* Featured image */}
          {image && (
            <div className="mb-10 rounded-sm overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || ''}
                className="w-full h-72 object-cover"
              />
            </div>
          )}

          {/* Content */}
          <article
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-text-dark prose-headings:font-light
              prose-p:text-text-muted prose-p:leading-relaxed
              prose-a:text-blue-mid prose-a:no-underline hover:prose-a:text-gold
              prose-strong:text-text-dark
              prose-blockquote:border-l-gold prose-blockquote:text-text-muted"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="text-[12px] tracking-[0.1em] uppercase text-blue-mid hover:text-gold transition-colors duration-200"
            >
              ← Back to Insights
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
