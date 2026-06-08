import Link from "next/link";
import Image from "next/image";
import { getAllUseCases, filterPosts } from "@/lib/posts";
import { getImageKitUrl } from "@/lib/imagekit";

interface UseCasePageProps {
  params: Promise<{ useCase: string }>;
}

export async function generateStaticParams() {
  return getAllUseCases().map((useCase) => ({ useCase: encodeURIComponent(useCase) }));
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const { useCase } = await params;
  const decoded = decodeURIComponent(useCase);
  const posts = filterPosts({ useCase: decoded });

  return (
    <main className="bg-[#F2F0EB] min-h-screen px-6 lg:px-10 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#888884] mb-3">Topic</p>
        <h1 className="font-display font-bold text-5xl md:text-6xl text-[#1A1A18] mb-14">{decoded}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} className="group block">
              <div className="relative aspect-square bg-[#E8E5DE] overflow-hidden mb-5">
                <Image src={getImageKitUrl(post.coverImage, { width: 600, height: 600 })} alt={post.author} fill className="object-cover grayscale group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="font-display font-bold text-lg text-[#1A1A18] mb-0.5">{post.author}</p>
              <p className="text-xs text-[#888884] uppercase tracking-widest mb-3">{post.geography.join(", ")}</p>
              {post.pullQuote && <p className="font-display italic text-base text-[#3D3D3A]">&ldquo;{post.pullQuote}&rdquo;</p>}
            </Link>
          ))}
          {posts.length === 0 && <p className="text-[#888884] col-span-full font-display italic text-xl">No stories found.</p>}
        </div>
      </div>
    </main>
  );
}
