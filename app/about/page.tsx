export const metadata = {
  title: "About — Between Us",
  description: "Between Us is an editorial publication covering Bitcoin and AI stories from around the world.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 sm:px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-8">
        About Between Us
      </h1>
      <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
        <p>
          Between Us is an editorial publication for first-hand stories about Bitcoin and AI from around the world. Not predictions. Not think-pieces. Not market analysis. Stories.
        </p>
        <p>
          We believe the most important things happening in Bitcoin and AI are not happening in San Francisco or in Davos. They are happening in places with unreliable electricity, in families split across borders by remittances, in communities who had no choice but to build their own infrastructure.
        </p>
        <p>
          We find those stories, work with contributors to shape them, and put them in front of readers who want to understand what is actually going on — not what the industry wants them to think is going on.
        </p>
        <p>
          Between Us is independent. We take no advertising and no investment from companies covered in our stories. We are funded by readers and the contributors who believe in what we are building.
        </p>
        <h2 className="font-display text-2xl font-semibold text-gray-900 pt-4">The editorial approach</h2>
        <p>
          Every story we publish is either written by someone who lived it, or reported by a journalist who was present. We do not aggregate, summarise, or speculate. We ask: were you there? Tell us what you saw.
        </p>
        <h2 className="font-display text-2xl font-semibold text-gray-900 pt-4">How to contribute</h2>
        <p>
          If you have a Bitcoin or AI story worth telling, we want to hear from you. You do not need to be a professional writer. You need to have experienced something that others need to understand.
        </p>
        <p>
          Use the apply pages to submit a pitch. Our editors review every submission and aim to respond within two weeks.
        </p>
      </div>
    </main>
  );
}
