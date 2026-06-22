import Link from "next/link";
import Image from "next/image";
import { getImageKitUrl } from "@/lib/imagekit";
import { slugify } from "@/lib/slug";
import type { Post } from "@/lib/posts";

// Shared square story card used on the home, stories, and archive pages.
// Shows cover, author, location · date, pull quote, and the Bitcoin/AI tag.
export default function StoryCard({
  post,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: {
  post: Post;
  sizes?: string;
}) {
  return (
    <div className="group">
      <Link href={`/story/${post.slug}`} className="block">
        <div className="relative aspect-square bg-[#E8E5DE] overflow-hidden mb-5">
          <Image
            src={getImageKitUrl(post.coverImage, { width: 600, height: 600 })}
            alt={`${post.author} — ${post.title}`}
            fill
            sizes={sizes}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <p className="font-display font-bold text-lg text-[#1A1A18] mb-0.5">{post.author}</p>
        <p className="text-xs text-[#888884] uppercase tracking-widest mb-3">
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
          <p className="font-sans italic text-base text-[#3D3D3A] leading-snug">
            <span aria-hidden="true" className="-ml-[0.4em] mr-[0.05em]">&ldquo;</span>
            {post.pullQuote}&rdquo;
          </p>
        )}
      </Link>
      {post.useCase.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
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
  );
}
