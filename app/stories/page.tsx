import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getAllGeographies, getAllUseCases } from "@/lib/posts";
import { getImageKitUrl } from "@/lib/imagekit";
import FilterBar from "@/components/FilterBar";

export const metadata: Metadata = {
  title: "Story Bank",
  description:
    "Browse first-hand stories about how Bitcoin and AI are changing lives, filterable by topic and location.",
  alternates: { canonical: "/stories" },
};

interface BlogPageProps {
  searchParams: Promise<{ geography?: string; useCase?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const allPosts = getAllPosts();
  const geographies = getAllGeographies();
  const useCases = getAllUseCases();

  const filtered = allPosts.filter((p) => {
    if (params.geography && !p.geography.includes(params.geography)) return false;
    if (params.useCase && !p.useCase.includes(params.useCase)) return false;
    return true;
  });

  return (
    <main className="bg-[#F2F0EB] min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-[#1A1A18] leading-tight">
              Story Bank.
            </h1>
            <p className="text-[#888884] mt-2 text-sm">
              {filtered.length} {filtered.length === 1 ? "story" : "stories"}
              {params.geography ? ` from ${params.geography}` : ""}
              {params.useCase ? ` about ${params.useCase}` : ""}
            </p>
          </div>
          <FilterBar geographies={geographies} useCases={useCases} active={params} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((post) => (
            <Link key={post.slug} href={`/story/${post.slug}`} className="group block">
              <div className="relative aspect-square bg-[#E8E5DE] overflow-hidden mb-5">
                <Image
                  src={getImageKitUrl(post.coverImage, { width: 600, height: 600 })}
                  alt={`${post.author} — ${post.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-display font-bold text-lg text-[#1A1A18] mb-0.5">{post.author}</p>
              <p className="text-xs text-[#888884] uppercase tracking-widest mb-3">{post.geography.join(", ")}</p>
              {post.pullQuote && (
                <p className="font-sans italic text-base text-[#3D3D3A] leading-snug">
                  <span aria-hidden="true" className="-ml-[0.4em] mr-[0.05em]">&ldquo;</span>{post.pullQuote}&rdquo;
                </p>
              )}
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="text-[#888884] col-span-full py-20 text-center font-sans italic text-xl">
              No stories match the selected filters.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
