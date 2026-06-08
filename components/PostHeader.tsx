import Image from "next/image";
import TagBadge from "./TagBadge";
import { getImageKitUrl } from "@/lib/imagekit";
import type { Post } from "@/lib/posts";

export default function PostHeader({ post }: { post: Post }) {
  const imageUrl = getImageKitUrl(post.coverImage, { width: 1600, height: 700 });

  return (
    <header className="w-full">
      <div className="relative w-full aspect-[21/9] bg-gray-100">
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-10 pb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.useCase.map((uc) => <TagBadge key={uc} label={uc} type="useCase" />)}
          {post.geography.map((g) => <TagBadge key={g} label={g} type="geography" />)}
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500 border-t border-gray-100 pt-4">
          <span className="font-medium text-gray-700">{post.author}</span>
          <span>·</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </time>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => <TagBadge key={tag} label={tag} type="tag" />)}
        </div>
      </div>
    </header>
  );
}
