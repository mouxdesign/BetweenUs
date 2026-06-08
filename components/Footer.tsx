import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <span className="font-display text-lg font-medium text-gray-900">Between Us</span>
          <nav className="flex flex-wrap gap-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
            <Link href="/apply/bitcoin" className="hover:text-gray-900 transition-colors">Apply: Bitcoin</Link>
            <Link href="/apply/ai" className="hover:text-gray-900 transition-colors">Apply: AI</Link>
          </nav>
        </div>
        <p className="mt-8 text-xs text-gray-400">
          © {new Date().getFullYear()} Between Us. Stories about Bitcoin and AI from around the world.
        </p>
      </div>
    </footer>
  );
}
