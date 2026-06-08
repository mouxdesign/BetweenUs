import ApplyPageTemplate from "@/components/ApplyPageTemplate";

export const metadata = {
  title: "Apply: Bitcoin — Between Us",
  description: "Share your Bitcoin story with Between Us.",
};

export default function ApplyBitcoinPage() {
  return (
    <ApplyPageTemplate
      topic="Bitcoin"
      tallyUrl="https://tally.so/r/EkJRB4"
    />
  );
}
