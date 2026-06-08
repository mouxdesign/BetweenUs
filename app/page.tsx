import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <main>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section id="hero" className="bg-gray-950 text-white px-4 sm:px-6 lg:px-8 py-28 md:py-40">
        <div className="mx-auto max-w-4xl">
          <p className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-6">
            Stories about Bitcoin and AI
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-tight mb-8">
            What happens when the world changes and someone is there to tell it.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            Between Us publishes first-hand accounts from the people living through the Bitcoin and AI revolutions — from Lagos to La Paz, Hong Kong to Helsinki.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-block bg-white text-gray-900 font-medium px-7 py-3.5 rounded hover:bg-gray-100 transition-colors"
            >
              Read the stories
            </Link>
            <Link
              href="/apply/bitcoin"
              className="inline-block border border-white/30 text-white font-medium px-7 py-3.5 rounded hover:border-white/60 transition-colors"
            >
              Share yours
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────────────── */}
      <section id="mission" className="px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-100">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Why Between Us exists
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The biggest stories about Bitcoin and AI are not happening in boardrooms or on conference stages. They are happening in kitchen tables, on motorcycles, in hospital waiting rooms. Between Us finds those stories and gives them the space they deserve.
          </p>
        </div>
      </section>

      {/* ── Recent posts ────────────────────────────────────────── */}
      <section id="recent-posts" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-gray-900">
              Latest stories
            </h2>
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              All stories →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Apply CTA ───────────────────────────────────────────── */}
      <section id="apply-cta" className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Have a story to tell?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We publish Bitcoin and AI stories from contributors around the world. You don't need to be a writer — just someone who was there.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/apply/bitcoin"
              className="inline-block bg-gray-900 text-white font-medium px-7 py-3.5 rounded hover:bg-gray-700 transition-colors"
            >
              Apply: Bitcoin
            </Link>
            <Link
              href="/apply/ai"
              className="inline-block border border-gray-300 text-gray-900 font-medium px-7 py-3.5 rounded hover:border-gray-500 transition-colors"
            >
              Apply: AI
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
