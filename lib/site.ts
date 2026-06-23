// Central site configuration. Set NEXT_PUBLIC_SITE_URL in production
// (e.g. on Vercel) to your canonical origin; it falls back to the live domain.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.betweenusstories.com"
).replace(/\/$/, "");

export const siteName = "Between Us";

export const siteDescription =
  "First-hand accounts of how Bitcoin and AI are changing lives from around the world.";

// Default social-share image (must exist in /public).
export const defaultOgImage = "/images/temp/Hero.jpg";

/** Build an absolute URL for a site-relative path. */
export function absoluteUrl(path = "/"): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
