"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchBoxProps {
  defaultValue?: string;
  autoFocus?: boolean;
  placeholder?: string;
  /**
   * "underline" — full-width bottom-border field (search page, mobile menu).
   * "pill" — compact rounded field that matches the nav buttons (top nav bar).
   */
  variant?: "underline" | "pill";
  className?: string;
  /** Called after a successful search submit (e.g. to close a mobile menu). */
  onSubmitted?: () => void;
}

// Progressive-enhancement search input. It is a real <form> that GET-submits to
// /search, so it works even without JavaScript; the router push just avoids a
// full page reload when JS is available.
export default function SearchBox({
  defaultValue = "",
  autoFocus = false,
  placeholder = "Search stories…",
  variant = "underline",
  className = "",
  onSubmitted,
}: SearchBoxProps) {
  const router = useRouter();
  const [value, setValue] = useState(defaultValue);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = value.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
    onSubmitted?.();
  }

  const isPill = variant === "pill";

  return (
    <form
      action="/search"
      method="get"
      onSubmit={handleSubmit}
      role="search"
      className={`flex items-center gap-2 transition-colors ${
        isPill
          ? "rounded-full border border-[#1A1A18]/20 bg-white/60 px-4 py-1.5 focus-within:border-[#1A1A18] focus-within:bg-white"
          : "border-b border-[#1A1A18]/30 focus-within:border-[#1A1A18]"
      } ${className}`}
    >
      <input
        type="search"
        name="q"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus={autoFocus}
        placeholder={placeholder}
        aria-label="Search stories"
        className={`order-1 flex-1 bg-transparent text-sm text-[#1A1A18] placeholder:text-[#888884] outline-none ${
          isPill ? "min-w-0" : "py-2"
        }`}
      />
      <button
        type="submit"
        aria-label="Search"
        className="order-2 shrink-0 text-[#888884] hover:text-[#1A1A18] transition-colors"
      >
        <svg
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M16.5 16.5l4 4" />
        </svg>
      </button>
    </form>
  );
}
