import type { ReactNode } from "react";

// Surfaced "display moment" used inside post bodies. Authored in markdown as a
// `:::pullquote` container directive (see lib/remark-pullquote.ts) so the text
// stays a real <blockquote><p>, remains selectable / indexable, and sits in
// document order — this is NOT a decorative repeat of the margin pull quote.
//
// Design: breaks out of the prose column to a slightly wider measure, large
// display-serif type (~1.8–2.4× body), generous breathing room above/below, and
// a single restrained accent marker (the large opening quote glyph in --muted).
// No entrance animation, so prefers-reduced-motion needs no special handling.
export default function PullQuote({
  children,
  attribution,
  size = "md",
}: {
  children?: ReactNode;
  /** Optional quiet credit beneath the quote, e.g. "Farida". Off by default. */
  attribution?: string;
  /** "lg" sits one step larger than "md" for an escalating sequence. */
  size?: "md" | "lg";
}) {
  const sizeClasses =
    size === "lg"
      ? "text-3xl sm:text-4xl md:text-5xl"
      : "text-2xl sm:text-3xl md:text-4xl";

  return (
    <figure className="not-prose my-12 md:my-16 md:-mx-10 lg:-mx-16">
      <blockquote
        style={{ fontFamily: "var(--font-display)" }}
        className={`relative mx-auto max-w-3xl font-bold normal-case tracking-tight leading-[1.2] text-[#1A1A18] [&_p]:m-0 ${sizeClasses}`}
      >
        <span
          aria-hidden="true"
          style={{ fontFamily: "var(--font-display)" }}
          className="block select-none leading-none text-[#888884] text-5xl md:text-6xl mb-2"
        >
          &ldquo;
        </span>
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-5 max-w-3xl mx-auto text-xs uppercase tracking-[0.15em] text-[#888884]">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}
