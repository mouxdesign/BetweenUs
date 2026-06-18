import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { searchPosts } from "@/lib/posts";
import { getImageKitUrl } from "@/lib/imagekit";
import SearchBox from "@/components/SearchBox";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  const title = q ? `Search: ${q}` : "Search";
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
        <h1 className="font-display font-bold text-5xl md:text-6xl text-[#1A1A18] leading-tight mb-8">
          Search.
        </h1>

        <div className="max-w-xl mb-4">
          <SearchBox defaultValue={query} autoFocus />
        </div>

        {query && (
          <p className="text-[#888884] mb-14 text-sm">
            {results.length} {results.length === 1 ? "result" : "results"} for{" "}
            <span className="text-[#1A1A18]">&ldquo;{query}&rdquo;</span>
          </p>
        )}

        {!query && (
          <p className="text-[#888884] mt-6 font-sans italic text-lg">
            Search by name, country, topic, or any word from a story.
          </p>
        )}

        {query && results.length === 0 && (
          <p className="text-[#888884] py-16 font-sans italic text-xl">
            No stories match &ldquo;{query}&rdquo;. Try a different word.
          </p>
        )}

        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {results.map((post) => (
              <Link key={post.slug} href={`/story/${post.slug}`} className="group block">
                <div className="relative aspect-square bg-[#E8E5DE] overflow-hidden mb-5">
                  <Image
                    src={getImageKitUrl(post.coverImage, { width: 600, height: 600 })}
                    alt={`${post.author} — ${post.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="font-display font-bold text-lg text-[#1A1A18] mb-0.5">{post.author}</p>
                <p className="text-xs text-[#888884] uppercase tracking-widest mb-3">{post.geography.join(", ")}</p>
                <p className="font-sans text-base text-[#3D3D3A] leading-snug">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
