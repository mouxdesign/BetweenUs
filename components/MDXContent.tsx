"use client";

import { useMemo } from "react";
import { MDXProvider } from "@mdx-js/react";

// Simple MDX renderer — converts raw MDX/markdown string to JSX
// using a minimal set of HTML element overrides for typography control
export default function MDXContent({ source }: { source: string }) {
  const html = useMemo(() => markdownToHtml(source), [source]);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function markdownToHtml(md: string): string {
  return md
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .split(/\n\n+/)
    .map((block) => {
      if (block.startsWith("<h")) return block;
      return `<p>${block.replace(/\n/g, " ")}</p>`;
    })
    .join("\n");
}
