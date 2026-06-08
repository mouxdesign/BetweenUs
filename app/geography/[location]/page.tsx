import { getAllGeographies, filterPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

interface GeoPageProps {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return getAllGeographies().map((location) => ({ location: encodeURIComponent(location) }));
}

export default async function GeographyPage({ params }: GeoPageProps) {
  const { location } = await params;
  const decoded = decodeURIComponent(location);
  const posts = filterPosts({ geography: decoded });

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Location</p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-10">{decoded}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => <PostCard key={post.slug} post={post} />)}
        {posts.length === 0 && <p className="text-gray-400 col-span-full">No stories found.</p>}
      </div>
    </main>
  );
}
