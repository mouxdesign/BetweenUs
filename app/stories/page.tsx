import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import StoryListing from "@/components/StoryListing";

export const metadata: Metadata = {
  title: "Story Bank",
  description:
    "Browse first-hand stories about how Bitcoin and AI are changing lives, filterable by topic and location.",
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
  return <StoryListing title="Story Bank." posts={getAllPosts()} />;
}
