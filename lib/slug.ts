// Lowercase, URL-safe slug for filter values (e.g. "West Africa" -> "west-africa",
// "AI" -> "ai"). Kept free of server-only imports so it can be used in both
// server components and the client FilterBar.
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
