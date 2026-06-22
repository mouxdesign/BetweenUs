import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllUseCases, filterPosts } from "@/lib/posts";
import { slugify } from "@/lib/slug";
import StoryListing from "@/components/StoryListing";

interface UseCasePageProps {
  params: Promise<{ useCase: string }>;
}

export async function generateStaticParams() {
  return getAllUseCases().map((useCase) => ({ useCase: slugify(useCase) }));
}

export async function generateMetadata({ params }: UseCasePageProps): Promise<Metadata> {
  const { useCase } = await params;
  const value = getAllUseCases().find((uc) => slugify(uc) === useCase);
  if (!value) return {};
  return {
    title: `${value} Stories`,
    description: `First-hand stories about ${value} on Between Us.`,
    alternates: { canonical: `/stories/use-case/${slugify(value)}` },
  };
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const { useCase } = await params;
  const value = getAllUseCases().find((uc) => slugify(uc) === useCase);
  if (!value) notFound();
  return (
    <StoryListing
      label="Topic"
      title={value}
      posts={filterPosts({ useCase: value })}
      active={{ useCase: value }}
    />
  );
}
