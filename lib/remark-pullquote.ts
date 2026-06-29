import { visit } from "unist-util-visit";

// Maps a `:::pullquote{size="lg" attribution="Farida"}` container directive in
// post markdown to a <pullquote> element, which MDXContent renders via the
// PullQuote React component. The directive's inner text stays a normal markdown
// paragraph, so the quote remains real selectable/indexable text in document
// order rather than a decorative duplicate.
export function remarkPullquote() {
  return (tree: unknown) => {
    visit(tree as never, (node: Record<string, unknown>) => {
      const type = node.type;
      if (
        (type === "containerDirective" ||
          type === "leafDirective" ||
          type === "textDirective") &&
        node.name === "pullquote"
      ) {
        const data = (node.data as Record<string, unknown>) || (node.data = {});
        data.hName = "pullquote";
        data.hProperties = { ...((node.attributes as Record<string, unknown>) || {}) };
      }
    });
  };
}
