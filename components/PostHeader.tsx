import Image from "next/image";
import { getImageKitUrl } from "@/lib/imagekit";
import type { Post } from "@/lib/posts";

export default function PostHeader({ post }: { post: Post }) {
  const imageUrl = getImageKitUrl(post.coverImage, { width: 900, height: 1100 });

  return (
    <header className="bg-[#F2F0EB]">
      {/* Split hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh]">

        {/* Left — tags + pull quote */}
        <div className="flex flex-col justify-between px-8 md:px-14 lg:px-20 py-14 md:py-20">
          {/* Tags */}
          <div className="space-y-1 mb-10">
            {post.tags.slice(0, 2).map((tag) => (
              <p key={tag} className="text-xs uppercase tracking-[0.15em] text-[#888884]">{tag}</p>
            ))}
          </div>

          {/* Massive pull quote */}
          <div className="flex-1 flex items-center">
            {post.pullQuote ? (
              <blockquote className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#1A1A18] leading-[1.1]">
                &ldquo;{post.pullQuote}&rdquo;
              </blockquote>
            ) : (
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#1A1A18] leading-[1.1]">
                {post.title}
              </h1>
            )}
          </div>

          {/* Spacer at bottom for balance */}
          <div className="mt-10" />
        </div>

        {/* Right — full portrait photo */}
        <div className="relative min-h-[60vw] md:min-h-0 bg-[#E8E5DE]">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </header>
  );
}
