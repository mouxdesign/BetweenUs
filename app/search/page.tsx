import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { searchPosts } from "@/lib/posts";
import { getImageKitUrl } from "@/lib/imagekit";
import { slugify } from "@/lib/slug";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  const title = q ? `Results for ${q}` : "Search";
  return {
    title,
    description: "Search first-hand stories about how Bitcoin and AI are changing lives around the world.",
    // Search result pages should not be indexed by crawlers.
    robots: { index: false, follow: true },
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();
  const results = query ? searchPosts(query) : [];

  return (
    <main className="bg-[#F2F0EB] min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20">
        <h1 className="font-display font-bold text-xl md:text-2xl text-[#1A1A18] leading-tight mb-3">
          {query ? <>Results for &ldquo;{query}&rdquo;</> : "Search."}
        </h1>

        {query && (
          <p className="text-[#888884] mb-14 text-sm">
            {results.length} {results.length === 1 ? "result" : "results"}
          </p>
        )}

        {!query && (
          <p className="text-[#888884] mt-6 mb-14 font-sans italic text-lg">
            Use the search box at the top to find stories by name, country, topic, or any word from a story.
          </p>
        )}

        {query && results.length === 0 && (
          <p className="text-[#888884] py-16 font-sans italic text-xl">
            No stories match &ldquo;{query}&rdquo;. Try a different word.
          </p>
        )}

        {results.length > 0 && (
          <ul className="flex flex-col divide-y divide-[#E8E5DE] border-t border-[#E8E5DE]">
            {results.map((post) => (
              <li key={post.slug} className="group flex flex-col sm:flex-row gap-5 sm:gap-8 py-8">
                {/* Photo — right on desktop, top on mobile */}
                <Link
                  href={`/story/${post.slug}`}
                  className="relative order-1 sm:order-2 w-full sm:w-56 md:w-64 aspect-[16/10] sm:aspect-[4/3] shrink-0 bg-[#E8E5DE] overflow-hidden block"
                >
                  <Image
                    src={getImageKitUrl(post.coverImage, { width: 640, height: 480 })}
                    alt={`${post.author} — ${post.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 256px"
                  />
                </Link>

                {/* Details */}
                <div className="order-2 sm:order-1 flex-1 min-w-0">
                  <Link href={`/story/${post.slug}`} className="block">
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-[#1A1A18] mb-1 group-hover:opacity-70 transition-opacity">
                      {post.author}
                    </h2>

                    <p className="text-xs text-[#888884] uppercase tracking-widest mb-4">
                      {post.geography.join(", ")}
                      {post.date && (
                        <>
                          {" · "}
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </time>
                        </>
                      )}
                    </p>

                    {post.pullQuote && (
                      <p className="font-sans italic text-lg text-[#3D3D3A] leading-snug mb-3 max-w-2xl">
                        <span aria-hidden="true" className="-ml-[0.4em] mr-[0.05em]">&ldquo;</span>
                        {post.pullQuote}&rdquo;
                      </p>
                    )}

                    <p className="text-base text-[#3D3D3A] leading-relaxed max-w-2xl">{post.excerpt}</p>
                  </Link>

                  {post.useCase.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.useCase.map((uc) => (
                        <Link
                          key={uc}
                          href={`/stories/use-case/${slugify(uc)}`}
                          className="border border-[#1A1A18] text-[#1A1A18] text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full hover:bg-[#1A1A18] hover:text-white transition-colors"
                        >
                          {uc}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
