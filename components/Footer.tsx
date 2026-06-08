import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A18] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">

          {/* Brand lockup */}
          <div className="md:col-span-1">
            <Link href="/">
              <Image src="/images/logo.svg" alt="Between Us" width={200} height={24} className="invert" />
            </Link>
          </div>

          {/* Social */}
          <div className="space-y-2">
            <a href="#" className="block text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="block text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors">Nostr</a>
          </div>

          {/* Nav */}
          <div className="space-y-2">
            <Link href="/about" className="block text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors">About</Link>
            <Link href="/apply/bitcoin" className="block text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Your editorial newsletter</p>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent border-b border-white/30 text-sm text-white placeholder:text-white/30 py-1.5 outline-none focus:border-white transition-colors"
              />
              <button type="submit" className="text-white/50 hover:text-white transition-colors" aria-label="Subscribe">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-white/30">
          <span>© {new Date().getFullYear()} Between Us Magazine</span>
          <span>A human-centric publication.</span>
        </div>
      </div>
    </footer>
  );
}
