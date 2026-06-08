import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import { getImageKitUrl } from "@/lib/imagekit";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#F2F0EB] overflow-hidden min-h-[70vh] flex items-center">
        {/* Background portrait — right half */}
        <div className="absolute inset-y-0 right-0 w-1/2 md:w-[52%]">
          <div className="relative w-full h-full min-h-[70vh]">
            <Image
              src="/images/temp/Hero.jpg"
              alt="Between Us hero"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradient fade to cream on left edge */}
            <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#F2F0EB] to-transparent" />
          </div>
        </div>

        {/* Hero text */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 w-full py-24 md:py-32">
          <div className="max-w-xl">
            <h1 className="font-display font-bold text-6xl md:text-7xl lg:text-8xl text-[#1A1A18] leading-[1.0] tracking-tight mb-6">
              Real people.<br />Unfiltered stories.
            </h1>
            <p className="font-sans italic text-lg md:text-xl text-[#3D3D3A] leading-relaxed max-w-sm mb-12">
              From families to builders — the humans behind the technology, in their own words.
            </p>
            <div className="flex flex-col items-start gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#888884]">Explore</span>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" className="text-[#1A1A18]">
                <path d="M8 0v18M1 11l7 7 7-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#1A1A18] leading-tight mb-6">
            We are building the archive nobody else thought to build.
          </h2>
          <p className="text-[#888884] text-base md:text-lg leading-relaxed">
            The stories of ordinary people for whom financial sovereignty is not theory — it is survival, dignity, and daily life.
          </p>
        </div>
      </section>

      {/* ── Vision split ────────────────────────────────────────────────── */}
      <section className="bg-[#1A1A18] px-6 lg:px-10 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left card */}
          <div className="bg-[#1A1A18] px-12 md:px-16 py-14 md:py-20 flex flex-col justify-between min-h-[480px]">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-[1.1]">
              We started asking questions. Now we can&apos;t stop.
            </h2>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors"
            >
              Read our vision
              <svg width="14" height="10" fill="none" viewBox="0 0 14 10">
                <path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          {/* Right portrait */}
          <div className="relative min-h-[480px] bg-[#E8E5DE] overflow-hidden">
            <Image
              src="/images/temp/Image1.png"
              alt="Between Us vision"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ── Story Bank ──────────────────────────────────────────────────── */}
      <section className="bg-[#F2F0EB] px-6 lg:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center mb-14">
            <span className="border border-[#1A1A18] text-[#1A1A18] text-xs uppercase tracking-[0.2em] px-5 py-2 rounded-full">
              Story Bank
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {posts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/posts/${post.slug}`} className="group block">
                <div className="relative aspect-square bg-[#E8E5DE] overflow-hidden mb-5">
                  <Image
                    src={getImageKitUrl(post.coverImage, { width: 600, height: 600 })}
                    alt={post.author}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <p className="font-display font-bold text-lg text-[#1A1A18] mb-0.5">{post.author}</p>
                  <p className="text-xs text-[#888884] uppercase tracking-widest mb-3">
                    {post.geography.join(", ")}
                  </p>
                  {post.pullQuote && (
                    <p className="font-sans italic text-base text-[#3D3D3A] leading-snug">
                      &ldquo;{post.pullQuote}&rdquo;
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dark CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[#1A1A18] px-6 lg:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">The Origin</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-3">
            We started asking questions.
          </h2>
          <p className="font-sans italic text-2xl md:text-3xl text-white/60">
            Now we can&apos;t stop.
          </p>
        </div>
      </section>

    </main>
  );
}
