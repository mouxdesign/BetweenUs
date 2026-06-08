"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// TODO: Replace logo.svg with the exported SVG logo from Figma

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand lockup */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.svg" alt="Between Us logo" width={32} height={32} />
            <span className="font-display text-xl font-medium tracking-tight text-gray-900">
              Between Us
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link href="/" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
            {/* Apply dropdown */}
            <div className="relative">
              <button
                onClick={() => setApplyOpen(!applyOpen)}
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                Apply
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {applyOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 rounded border border-gray-100 bg-white shadow-lg">
                  <Link
                    href="/apply/bitcoin"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setApplyOpen(false)}
                  >
                    Apply: Bitcoin
                  </Link>
                  <Link
                    href="/apply/ai"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setApplyOpen(false)}
                  >
                    Apply: AI
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <Link href="/" className="block text-sm text-gray-700" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/blog" className="block text-sm text-gray-700" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/about" className="block text-sm text-gray-700" onClick={() => setMenuOpen(false)}>About</Link>
          <div className="space-y-2 pl-2 border-l border-gray-200">
            <p className="text-xs uppercase tracking-widest text-gray-400">Apply</p>
            <Link href="/apply/bitcoin" className="block text-sm text-gray-700" onClick={() => setMenuOpen(false)}>Apply: Bitcoin</Link>
            <Link href="/apply/ai" className="block text-sm text-gray-700" onClick={() => setMenuOpen(false)}>Apply: AI</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
