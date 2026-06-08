import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import PostHeader from "@/components/PostHeader";
import MDXContent from "@/components/MDXContent";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} — Between Us`, description: post.excerpt };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <PostHeader post={post} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
        <div className="prose prose-gray prose-lg max-w-none prose-headings:font-display prose-headings:font-semibold prose-a:text-gray-900 prose-a:underline">
          <MDXContent source={post.content} />
        </div>
      </div>
    </article>
  );
}
