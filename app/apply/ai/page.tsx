import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply: AI",
  description: "Share your AI story with Between Us.",
  alternates: { canonical: "/apply/ai" },
};

const stories = [
  {
    detail: "The farmer in northern Tanzania who saved his maize with a photo.",
    subtext: "He saw yellow streaks spreading across his plants and didn't know why. So he took a photo of one. The tool on his phone identified it as maize streak virus — one of the worst crop diseases in Africa. He caught it in time before it affected the rest of the crop.",
  },
  {
    detail: "The shop owner in Kenya who keeps a business mentor in his pocket.",
    subtext: "As a shop owner he couldn't afford a business consultant. So he reached out to an AI mentor. When he's researching prices or replying to a customer, he simply opens WhatsApp and asks.",
  },
  {
    detail: "The teacher in San Marino, California who got his time back.",
    subtext: "He used to spend half the class time explaining the basics. Now he lets AI handle that part, so he can do the part only he can do: sit with his students and have real discussions.",
  },
];

const steps = [
  {
    number: "01",
    heading: "A private, recorded conversation.",
    body: "We'll have a conversation no longer than 30 minutes.",
  },
  {
    number: "02",
    heading: "Your real name, or stay anonymous.",
    body: "Feel free to use your real name or stay anonymous. The choice is entirely yours.",
  },
  {
    number: "03",
    heading: "We ask. You share your story.",
    body: "We'll ask you questions and you'll share your story in your own words.",
  },
  {
    number: "04",
    heading: "Published on Between Us.",
    body: "Your story will be published on the Between Us website. You approve every line.",
  },
];

export default function ApplyAIPage() {
  return (
    <main>

      {/* ── Dark hero ───────────────────────────────────────────────────── */}
      <section className="bg-[#1A1A18] px-6 lg:px-10 py-24 md:py-36">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-8">AI Stories</p>
          <h1 className="font-display font-bold text-white leading-[1.05]" style={{ fontSize: 'clamp(2.2rem, 6vw, 7rem)' }}>
            The most important AI stories aren&apos;t the ones making headlines.
          </h1>
          <div className="mt-12">
            <button
              disabled
              className="inline-flex items-center gap-3 border border-white text-white text-xs uppercase tracking-[0.15em] px-8 py-4 cursor-not-allowed"
            >
              Share your story
            </button>
          </div>
        </div>
      </section>

      {/* ── Story vignettes ─────────────────────────────────────────────── */}
      <section className="bg-[#F2F0EB] px-6 lg:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-3xl divide-y divide-[#E8E5DE]">
          {stories.map((s, i) => (
            <div key={i} className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-4 md:gap-16">
              <p className="font-display font-bold text-xl md:text-2xl text-[#1A1A18] leading-snug">
                {s.detail}
              </p>
              <p className="text-[#3D3D3A] text-base leading-relaxed self-center">
                {s.subtext}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pull quote ──────────────────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl md:text-3xl text-[#888884] leading-relaxed mb-8">
            These people are not famous.<br />
            They do not have a big following.<br />
            But they have something that lasts.
          </p>
          <p className="font-display font-bold text-4xl md:text-5xl text-[#1A1A18] leading-tight">
            They have a story.<br />And so do you.
          </p>
        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────────────────────── */}
      <section className="bg-[#F2F0EB] px-6 lg:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1A1A18] leading-tight">
            We want to<br />hear your story.
          </h2>
          <div className="space-y-5 text-[#3D3D3A] text-base leading-relaxed">
            <p>
              We believe every story matters and that your story has the power to show someone else what&apos;s possible. It could help them take their first step with AI. It can show them that people like them are already using AI and that it&apos;s changing their lives.
            </p>
            <p>
              Between Us is a platform where those stories get told. We&apos;d like to invite you to share yours with the rest of the world.
            </p>
          </div>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1A1A18] leading-tight">
              Here&apos;s what<br />we&apos;ll do.
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[#888884]">
              Four steps · About 30 minutes total
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8E5DE]">
            {steps.map((step) => (
              <div key={step.number} className="bg-white p-8 md:p-10">
                <p className="font-display text-4xl font-bold text-[#E8E5DE] mb-6">{step.number}</p>
                <p className="font-display font-bold text-xl text-[#1A1A18] mb-2">{step.heading}</p>
                <p className="text-[#888884] text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#1A1A18] px-6 lg:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
            We&apos;d love to chat with you.
          </h2>
          <p className="text-[#888884] text-base leading-relaxed mb-10">
            Fill in the form using the link. It just takes three minutes.
          </p>
          <button
            disabled
            className="inline-flex items-center gap-3 border border-white text-white text-xs uppercase tracking-[0.15em] px-8 py-4 cursor-not-allowed"
          >
            Share your story
            <svg width="14" height="10" fill="none" viewBox="0 0 14 10">
              <path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>

    </main>
  );
}
