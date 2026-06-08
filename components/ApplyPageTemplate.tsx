interface ApplyPageTemplateProps {
  topic: "Bitcoin" | "AI";
  tallyUrl: string;
}

export default function ApplyPageTemplate({ topic, tallyUrl }: ApplyPageTemplateProps) {
  return (
    <main className="mx-auto max-w-2xl px-4 sm:px-6 py-20">
      <span className="inline-block rounded-full bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1 mb-6">
        {topic} Stories
      </span>
      <h1 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
        Share your {topic} story with the world.
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        Between Us publishes first-hand accounts of how {topic} is changing lives — from Lagos to La Paz, from Hong Kong to Helsinki. We want stories that are specific, honest, and grounded in real experience.
      </p>
      <p className="text-base text-gray-500 leading-relaxed mb-10">
        You do not need to be a writer. You need to have lived something worth telling. Our editors will work with you to shape the piece. There is no fee to submit, and contributors are paid a flat rate on publication.
      </p>
      <a
        href={tallyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gray-900 text-white font-medium px-8 py-4 rounded hover:bg-gray-700 transition-colors text-base"
      >
        Apply Now
      </a>
      <p className="mt-6 text-sm text-gray-400">
        Applications are reviewed on a rolling basis. We aim to respond within 14 days.
      </p>
    </main>
  );
}
