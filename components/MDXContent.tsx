import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import { remarkPullquote } from "@/lib/remark-pullquote";
import { getImageKitUrl } from "@/lib/imagekit";
import PullQuote from "@/components/PullQuote";

// Server component: renders post markdown to React elements via react-markdown.
// react-markdown does NOT use dangerouslySetInnerHTML and escapes any raw HTML
// in the source by default, so this is XSS-safe. Rendering on the server also
// keeps the article body in the initial HTML for SEO and faster paint.
//
// `:::pullquote` container directives are mapped to the PullQuote component
// (remark-directive + remarkPullquote → a <pullquote> element handled below).
//
// `components` is typed loosely because <pullquote> is a custom element name
// produced by the directive plugin, not a standard intrinsic element.
const components = {
  a: ({ href, children, ...props }: { href?: string; children?: React.ReactNode }) => {
    const isExternal = !!href && /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  },
  pullquote: ({
    children,
    size,
    attribution,
  }: {
    children?: React.ReactNode;
    size?: "md" | "lg";
    attribution?: string;
  }) => (
    <PullQuote size={size} attribution={attribution}>
      {children}
    </PullQuote>
  ),
  // Body images: authored in markdown with just the ImageKit path
  // (e.g. ![alt](Joyce2.jpeg)) and routed through the ImageKit helper, matching
  // the coverImage convention. Rendered as a figure with an optional caption.
  img: ({ src, alt, title }: { src?: string; alt?: string; title?: string }) => {
    if (!src) return null;
    const url = getImageKitUrl(src, { width: 1400 });
    return (
      <figure className="not-prose my-10 md:my-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt={alt ?? ""} loading="lazy" className="w-full h-auto" />
        {title && (
          <figcaption className="mt-3 text-xs uppercase tracking-[0.15em] text-[#888884]">
            {title}
          </figcaption>
        )}
      </figure>
    );
  },
};

export default function MDXContent({ source }: { source: string }) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm, remarkDirective, remarkPullquote]}
      components={components as never}
    >
      {source}
    </Markdown>
  );
}
