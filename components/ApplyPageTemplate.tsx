interface ApplyPageTemplateProps {
  topic: "Bitcoin" | "AI";
  tallyUrl?: string;
}

export default function ApplyPageTemplate({ topic, tallyUrl }: ApplyPageTemplateProps) {
  return (
    <main className="bg-[#1A1A18] min-h-screen px-6 lg:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-8">{topic} Stories</p>
        <h1 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight mb-8">
          Your story belongs in this archive.
        </h1>
        <p className="text-[#888884] text-lg leading-relaxed mb-4">
          We are looking for people whose lives have been changed by {topic === "Bitcoin" ? "Bitcoin and new tools for financial freedom" : "AI and new tools for human connection"} — not traders, not investors. People. Apply to share your story.
        </p>
        <p className="text-[#888884] text-base leading-relaxed mb-12">
          You do not need to be a writer. You need to have lived something worth telling. Our editors will work with you to shape the piece. There is no fee to submit, and contributors are paid a flat rate on publication.
        </p>
        {tallyUrl ? (
          <a
            href={tallyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-white text-white text-xs uppercase tracking-[0.15em] px-8 py-4 hover:bg-white hover:text-[#1A1A18] transition-colors"
          >
            Share your story
            <svg width="14" height="10" fill="none" viewBox="0 0 14 10">
              <path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ) : (
          <button
            disabled
            className="inline-flex items-center gap-3 border border-white/20 text-white/30 text-xs uppercase tracking-[0.15em] px-8 py-4 cursor-not-allowed"
          >
            Apply Now — Coming Soon
          </button>
        )}
        <p className="mt-8 text-xs text-white/30">
          Applications are reviewed on a rolling basis. We aim to respond within 14 days.
        </p>
      </div>
    </main>
  );
}
