import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllGeographies, filterPosts } from "@/lib/posts";
import { slugify } from "@/lib/slug";
import StoryListing from "@/components/StoryListing";

interface GeoPageProps {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return getAllGeographies().map((location) => ({ location: slugify(location) }));
}

export async function generateMetadata({ params }: GeoPageProps): Promise<Metadata> {
  const { location } = await params;
  const value = getAllGeographies().find((g) => slugify(g) === location);
  if (!value) return {};
  return {
    title: `Stories from ${value}`,
    description: `First-hand Bitcoin and AI stories from ${value}.`,
    alternates: { canonical: `/stories/geography/${slugify(value)}` },
  };
}

export default async function GeographyPage({ params }: GeoPageProps) {
  const { location } = await params;
  const value = getAllGeographies().find((g) => slugify(g) === location);
  if (!value) notFound();
  return (
    <StoryListing
      label="Location"
      title={value}
      posts={filterPosts({ geography: value })}
      active={{ geography: value }}
    />
  );
}
