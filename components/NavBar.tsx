"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setApplyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="w-full bg-[#F2F0EB] border-b border-[#E8E5DE] relative z-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-14 items-center justify-between">

          {/* Brand lockup — single SVG containing icon + wordmark */}
          <Link href="/" className="shrink-0">
            <Image src="/images/logo.svg" alt="Between Us" width={179} height={19} />
          </Link>

          {/* Desktop centre nav */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="text-sm text-[#1A1A18] hover:opacity-60 transition-opacity">
              Home
            </Link>
            <Link href="/blog" className="text-sm text-[#1A1A18] hover:opacity-60 transition-opacity">
              Stories
            </Link>
            <Link href="/about" className="text-sm text-[#1A1A18] hover:opacity-60 transition-opacity">
              About
            </Link>

            {/* Apply dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setApplyOpen(!applyOpen)}
                className="flex items-center gap-1 text-sm text-[#1A1A18] hover:opacity-60 transition-opacity"
              >
                Apply
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${applyOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {applyOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 bg-[#F2F0EB] border border-[#E8E5DE] shadow-md z-50">
                  <Link
                    href="/apply/bitcoin"
                    className="block px-5 py-3 text-sm text-[#1A1A18] hover:bg-[#E8E5DE] transition-colors"
                    onClick={() => setApplyOpen(false)}
                  >
                    Apply: Bitcoin
                  </Link>
                  <Link
                    href="/apply/ai"
                    className="block px-5 py-3 text-sm text-[#1A1A18] hover:bg-[#E8E5DE] transition-colors border-t border-[#E8E5DE]"
                    onClick={() => setApplyOpen(false)}
                  >
                    Apply: AI
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-4">
            <button aria-label="Search" className="text-[#1A1A18] hover:opacity-60 transition-opacity p-1">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="M16.5 16.5l4 4" />
              </svg>
            </button>
            <Link
              href="/apply/bitcoin"
              className="bg-[#1A1A18] text-white text-sm font-medium px-4 py-2 rounded-full hover:opacity-80 transition-opacity"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#1A1A18]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#E8E5DE] bg-[#F2F0EB] px-6 py-5 space-y-4">
          <Link href="/" className="block text-sm text-[#1A1A18]" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/blog" className="block text-sm text-[#1A1A18]" onClick={() => setMenuOpen(false)}>Stories</Link>
          <Link href="/about" className="block text-sm text-[#1A1A18]" onClick={() => setMenuOpen(false)}>About</Link>
          <div className="pl-0 space-y-2 border-t border-[#E8E5DE] pt-4">
            <p className="text-xs uppercase tracking-[0.15em] text-[#888884]">Apply</p>
            <Link href="/apply/bitcoin" className="block text-sm text-[#1A1A18]" onClick={() => setMenuOpen(false)}>Apply: Bitcoin</Link>
            <Link href="/apply/ai" className="block text-sm text-[#1A1A18]" onClick={() => setMenuOpen(false)}>Apply: AI</Link>
          </div>
          <Link
            href="/apply/bitcoin"
            className="inline-block bg-[#1A1A18] text-white text-sm font-medium px-5 py-2.5 rounded-full mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Subscribe
          </Link>
        </div>
      )}
    </nav>
  );
}
