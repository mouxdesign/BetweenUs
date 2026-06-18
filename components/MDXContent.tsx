import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Server component: renders post markdown to React elements via react-markdown.
// react-markdown does NOT use dangerouslySetInnerHTML and escapes any raw HTML
// in the source by default, so this is XSS-safe. Rendering on the server also
// keeps the article body in the initial HTML for SEO and faster paint.
export default function MDXContent({ source }: { source: string }) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children, ...props }) => {
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
      }}
    >
      {source}
    </Markdown>
  );
}
