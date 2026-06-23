import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A18] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">

          {/* Brand lockup */}
          <div className="md:col-span-1">
            <Link href="/">
              <Image src="/images/logo.svg" alt="Between Us" width={179} height={19} className="invert" />
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
            <a href="mailto:hello@betweenusstories.com" className="block text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors">Contact</a>
            <Link href="/privacy" className="block text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-white/30">
          <span>© 2026 Between Us Stories</span>
          <span>A human-centric publication.</span>
        </div>
      </div>
    </footer>
  );
}
