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
  dark = false,
}: {
  post: Post;
  sizes?: string;
  dark?: boolean;
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
        {post.pullQuote && (
          <p className={`font-display font-bold text-xl md:text-2xl leading-snug mb-3 ${dark ? "text-white" : "text-[#1A1A18]"}`}>
            <span aria-hidden="true" className="-ml-[0.45em] mr-[0.05em]">&ldquo;</span>
            {post.pullQuote}&rdquo;
          </p>
        )}
        <p className={`text-xs uppercase tracking-[0.15em] ${dark ? "text-white/40" : "text-[#888884]"}`}>{post.author}</p>
      </Link>
      {post.useCase.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {post.useCase.map((uc) => (
            <Link
              key={uc}
              href={`/stories/use-case/${slugify(uc)}`}
              className={`text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full transition-colors ${dark ? "border border-white/30 text-white/60 hover:bg-white hover:text-[#1A1A18]" : "border border-[#1A1A18] text-[#1A1A18] hover:bg-[#1A1A18] hover:text-white"}`}
            >
              {uc}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
