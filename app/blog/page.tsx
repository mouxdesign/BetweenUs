import { getAllPosts, getAllGeographies, getAllUseCases } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import FilterBar from "@/components/FilterBar";

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
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
        All stories
      </h1>
      <p className="text-gray-500 mb-10">
        {filtered.length} {filtered.length === 1 ? "story" : "stories"}
        {params.geography ? ` from ${params.geography}` : ""}
        {params.useCase ? ` about ${params.useCase}` : ""}
      </p>
      <FilterBar geographies={geographies} useCases={useCases} active={params} />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-400 col-span-full py-16 text-center">
            No stories match the selected filters.
          </p>
        )}
      </div>
    </main>
  );
}
