import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostFrontmatter {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  pullQuote?: string;
  subject?: string;
  coverImage: string;
  /** CSS object-position for the hero crop, e.g. "center 20%". Defaults to center. */
  coverPosition?: string;
  tags: string[];
  geography: string[];
  useCase: string[];
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      return { slug, content, ...(data as PostFrontmatter) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.existsSync(fullPath)
      ? fs.readFileSync(fullPath, "utf8")
      : fs.readFileSync(path.join(postsDirectory, `${slug}.md`), "utf8");
    const { data, content } = matter(fileContents);
    return { slug, content, ...(data as PostFrontmatter) };
  } catch {
    return undefined;
  }
}

export function getAllTags(): string[] {
  return [...new Set(getAllPosts().flatMap((p) => p.tags))].sort();
}

export function getAllGeographies(): string[] {
  return [...new Set(getAllPosts().flatMap((p) => p.geography))].sort();
}

export function getAllUseCases(): string[] {
  return [...new Set(getAllPosts().flatMap((p) => p.useCase))].sort();
}

export function filterPosts({ tag, geography, useCase }: { tag?: string; geography?: string; useCase?: string }): Post[] {
  return getAllPosts().filter((p) => {
    if (tag && !p.tags.includes(tag)) return false;
    if (geography && !p.geography.includes(geography)) return false;
    if (useCase && !p.useCase.includes(useCase)) return false;
    return true;
  });
}

export interface SearchResult extends Post {
  score: number;
}

// Full-text search across all post fields. Every whitespace-separated term in
// the query must match somewhere in a post (AND semantics). Matches in the
// title/author/tags are weighted higher than matches in the body copy so the
// most relevant stories surface first.
export function searchPosts(query: string): SearchResult[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return getAllPosts()
    .map((post) => {
      const fields: { text: string; weight: number }[] = [
        { text: post.title, weight: 5 },
        { text: post.author, weight: 4 },
        { text: post.subject ?? "", weight: 3 },
        { text: post.tags.join(" "), weight: 3 },
        { text: post.geography.join(" "), weight: 3 },
        { text: post.useCase.join(" "), weight: 3 },
        { text: post.pullQuote ?? "", weight: 2 },
        { text: post.excerpt, weight: 2 },
        { text: post.content, weight: 1 },
      ].map((f) => ({ text: f.text.toLowerCase(), weight: f.weight }));

      let score = 0;
      const matchesAllTerms = terms.every((term) => {
        let termMatched = false;
        for (const field of fields) {
          if (field.text.includes(term)) {
            score += field.weight;
            termMatched = true;
          }
        }
        return termMatched;
      });

      return matchesAllTerms ? { ...post, score } : null;
    })
    .filter((r): r is SearchResult => r !== null)
    .sort((a, b) => b.score - a.score);
}
