import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { getImageKitUrl } from "@/lib/imagekit";
import { absoluteUrl, siteName } from "@/lib/site";
import PostHeader from "@/components/PostHeader";
import MDXContent from "@/components/MDXContent";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `/story/${post.slug}`;
  const ogImage = getImageKitUrl(post.coverImage, { width: 1200, height: 630 });

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    keywords: [...post.tags, ...post.useCase, ...post.geography],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    image: [absoluteUrl(getImageKitUrl(post.coverImage, { width: 1200, height: 630 }))],
    datePublished: post.date,
    dateModified: post.date,
    author: [{ "@type": "Person", name: post.author }],
    publisher: { "@type": "Organization", name: siteName },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(`/story/${post.slug}`) },
    keywords: post.tags.join(", "),
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <PostHeader post={post} />

      {/* ── Article body ──────────────────────────────────────────────── */}
      <section className="bg-[#F2F0EB] px-6 lg:px-10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-20">

            {/* Sidebar metadata */}
            <aside className="space-y-6 md:pt-1">
              {post.subject && (
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#888884] mb-1">Subject</p>
                  <p className="text-sm font-medium text-[#1A1A18]">{post.subject}</p>
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#888884] mb-1">Location</p>
                <p className="text-sm text-[#1A1A18]">{post.geography.join(" / ")}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#888884] mb-1">Use Case</p>
                {post.useCase.map((uc) => (
                  <p key={uc} className="text-sm text-[#1A1A18]">{uc}</p>
                ))}
              </div>
            </aside>

            {/* Body copy */}
            <div className="prose prose-lg max-w-2xl text-[#1A1A18] prose-p:text-[#3D3D3A] prose-p:leading-relaxed prose-headings:font-display prose-headings:font-bold prose-headings:text-[#1A1A18]">
              <MDXContent source={post.content} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section divider ───────────────────────────────────────────── */}
      <div className="bg-[#F2F0EB] flex justify-center py-6">
        <span className="text-[#888884] tracking-[0.3em] text-sm">• • •</span>
      </div>

      {/* ── Related stories ───────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-[#F2F0EB] px-6 lg:px-10 pt-8 pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#888884] mb-10">Explore more stories.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p) => (
                <Link key={p.slug} href={`/story/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] bg-[#E8E5DE] overflow-hidden mb-4">
                    <Image
                      src={getImageKitUrl(p.coverImage, { width: 600, height: 450 })}
                      alt={`${p.author} — ${p.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="font-display font-bold text-base text-[#1A1A18] mb-1">{p.author}</p>
                  <p className="text-sm text-[#888884] leading-snug">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
