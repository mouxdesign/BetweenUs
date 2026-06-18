import type { Metadata } from "next";
import ApplyPageTemplate from "@/components/ApplyPageTemplate";

export const metadata: Metadata = {
  title: "Apply: AI",
  description: "Share your AI story with Between Us.",
  alternates: { canonical: "/apply/ai" },
};

export default function ApplyAIPage() {
  // TODO: Add Tally form URL for AI stories when ready
  return <ApplyPageTemplate topic="AI" />;
}
