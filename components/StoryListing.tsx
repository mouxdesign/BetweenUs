import { getAllGeographies, getAllUseCases } from "@/lib/posts";
import type { Post } from "@/lib/posts";
import FilterBar from "@/components/FilterBar";
import StoryCard from "@/components/StoryCard";

interface StoryListingProps {
  title: string;
  /** Small eyebrow label above the title (e.g. "Topic", "Location", "Tag"). */
  label?: string;
  posts: Post[];
  /** Pre-selected filter shown in the dropdowns. */
  active?: { geography?: string; useCase?: string };
}

// Shared layout for every story listing: the /stories hub and the nested
// /stories/use-case, /stories/geography and /stories/tags filter pages.
export default function StoryListing({ title, label, posts, active = {} }: StoryListingProps) {
  const geographies = getAllGeographies();
  const useCases = getAllUseCases();

  return (
    <main className="bg-[#F2F0EB] min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            {label && (
              <p className="text-xs uppercase tracking-[0.2em] text-[#888884] mb-3">{label}</p>
            )}
            <h1 className="font-display font-bold text-5xl md:text-6xl text-[#1A1A18] leading-tight">
              {title}
            </h1>
            <p className="text-[#888884] mt-2 text-sm">
              {posts.length} {posts.length === 1 ? "story" : "stories"}
            </p>
          </div>
          <FilterBar geographies={geographies} useCases={useCases} active={active} />
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <StoryCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-[#888884] py-20 text-center font-sans italic text-xl">
            No stories match the selected filters.
          </p>
        )}
      </div>
    </main>
  );
}
