import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllTags, filterPosts } from "@/lib/posts";
import { slugify } from "@/lib/slug";
import StoryListing from "@/components/StoryListing";

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: slugify(tag) }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const value = getAllTags().find((t) => slugify(t) === tag);
  if (!value) return {};
  return {
    title: `${value} — Stories`,
    description: `Stories tagged “${value}” on Between Us.`,
    alternates: { canonical: `/stories/tags/${slugify(value)}` },
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const value = getAllTags().find((t) => slugify(t) === tag);
  if (!value) notFound();
  return <StoryListing label="Tag" title={value} posts={filterPosts({ tag: value })} />;
}
