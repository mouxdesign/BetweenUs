export const metadata = {
  title: "About — Between Us",
  description: "Between Us is an editorial publication covering Bitcoin and AI stories from around the world.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#F2F0EB] min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-24">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#888884] mb-6">The Origin</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-[#1A1A18] leading-tight">
            We started asking questions.
          </h1>
          <p className="font-display italic text-2xl md:text-3xl text-[#3D3D3A] mt-4">
            Now we can&apos;t stop.
          </p>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_480px] gap-16 md:gap-24">
          <div className="space-y-6 text-[#3D3D3A] text-lg leading-relaxed">
            <p>
              Between Us is an editorial publication for first-hand stories about Bitcoin and AI from around the world. Not predictions. Not think-pieces. Not market analysis. Stories.
            </p>
            <p>
              We believe the most important things happening in Bitcoin and AI are not happening in San Francisco or in Davos. They are happening at kitchen tables, on motorcycles, in hospital waiting rooms. Between Us finds those stories and gives them the space they deserve.
            </p>
            <p>
              Every story we publish is either written by someone who lived it, or reported by a journalist who was present. We do not aggregate, summarise, or speculate. We ask: were you there? Tell us what you saw.
            </p>
            <p>
              Between Us is independent. We take no advertising and no investment from companies covered in our stories.
            </p>
          </div>

          {/* Aside pull */}
          <aside>
            <div className="bg-white p-10">
              <p className="font-display font-bold text-2xl text-[#1A1A18] leading-snug mb-8">
                The stories of ordinary people for whom financial sovereignty is not theory — it is survival, dignity, and daily life.
              </p>
              <a
                href="/apply/bitcoin"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#1A1A18] hover:opacity-60 transition-opacity"
              >
                Share your story
                <svg width="14" height="10" fill="none" viewBox="0 0 14 10">
                  <path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
