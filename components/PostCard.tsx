import Link from "next/link";
import Image from "next/image";
import TagBadge from "./TagBadge";
import { getImageKitUrl } from "@/lib/imagekit";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  const imageUrl = getImageKitUrl(post.coverImage, { width: 800, height: 450 });

  return (
    <article className="flex flex-col rounded-lg border border-gray-200 overflow-hidden bg-white hover:shadow-md transition-shadow">
      <Link href={`/posts/${post.slug}`} className="block overflow-hidden aspect-[16/9] relative bg-gray-100">
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.useCase.map((uc) => <TagBadge key={uc} label={uc} type="useCase" />)}
          {post.geography.map((g) => <TagBadge key={g} label={g} type="geography" />)}
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h2 className="font-display text-xl font-semibold text-gray-900 leading-snug hover:text-gray-600 transition-colors mb-2">
            {post.title}
          </h2>
        </Link>
        <p className="text-sm text-gray-600 leading-relaxed flex-1">{post.excerpt}</p>
        <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
          <span>{post.author}</span>
          <span>·</span>
          <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => <TagBadge key={tag} label={tag} type="tag" />)}
        </div>
      </div>
    </article>
  );
}
