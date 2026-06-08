import ApplyPageTemplate from "@/components/ApplyPageTemplate";

export const metadata = {
  title: "Apply: AI — Between Us",
  description: "Share your AI story with Between Us.",
};

export default function ApplyAIPage() {
  // TODO: Replace with real Tally form URL for AI stories
  return (
    <ApplyPageTemplate
      topic="AI"
      tallyUrl="https://tally.so/placeholder-ai"
    />
  );
}
