import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Between Us handles your data. This website uses no cookies, analytics, or tracking.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "22 June 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display font-bold text-xl md:text-2xl text-[#1A1A18] mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="bg-[#F2F0EB] min-h-screen">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-[#888884] mb-6">Legal</p>
        <h1 className="font-display font-bold text-4xl md:text-5xl text-[#1A1A18] leading-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#888884] mb-12">Last updated: {LAST_UPDATED}</p>

        <div className="space-y-10 text-[#3D3D3A] text-base md:text-lg leading-relaxed">
          <p>
            Between Us (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates betweenusstories.com. This
            policy explains the limited data we process and the rights you have over it. We have
            kept it short because we collect very little.
          </p>

          <Section title="No cookies, no tracking">
            <p>
              This website uses no cookies, no analytics, no advertising, and no tracking
              technologies. We do not profile visitors and we do not sell or share your data with
              advertisers.
            </p>
          </Section>

          <Section title="What we process">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Technical logs.</strong> Our hosting and image providers automatically log
                technical data such as your IP address, browser type, and the pages requested, in
                order to deliver the site securely and reliably.
              </li>
              <li>
                <strong>Story submissions.</strong> If you choose to apply to share your story, the
                application form collects the information you provide&nbsp;— such as your name,
                contact details, and your story. You provide this voluntarily.
              </li>
            </ul>
          </Section>

          <Section title="Service providers">
            <p>We rely on a small number of providers to run the site:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Vercel</strong>&nbsp;— website hosting and delivery.
              </li>
              <li>
                <strong>ImageKit</strong>&nbsp;— image and font delivery.
              </li>
              <li>
                <strong>Tally</strong>&nbsp;— story application forms. Tally acts as a data processor
                for the information you submit. When you open a form you leave our site, and{" "}
                <a
                  href="https://tally.so/help/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A1A18] underline underline-offset-2 hover:opacity-60 transition-opacity"
                >
                  Tally&rsquo;s privacy policy
                </a>{" "}
                also applies.
              </li>
            </ul>
            <p>
              Our hosting and image providers (Vercel and ImageKit) may process technical data
              outside your country, including in the United States, under appropriate safeguards.
            </p>
          </Section>

          <Section title="Legal basis">
            <p>
              Where the GDPR applies, we process technical logs on the basis of our legitimate
              interest in operating a secure, functioning website, and we process story submissions
              on the basis of your consent and to take steps at your request.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              Technical logs are retained only for as long as needed for security and operations.
              Story submissions are kept for as long as necessary to review and, where relevant,
              publish your story&nbsp;— unless you ask us to delete them sooner.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              Depending on where you live, you may have the right to access, correct, or delete your
              personal data, to object to or restrict its processing, and to data portability. You
              also have the right to lodge a complaint with your local data protection authority.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              To exercise your rights or ask any question about this policy, email us at{" "}
              <a
                href="mailto:privacy@betweenusstories.com"
                className="text-[#1A1A18] underline underline-offset-2 hover:opacity-60 transition-opacity"
              >
                privacy@betweenusstories.com
              </a>
              .
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy from time to time. The date at the top shows when it was last
              revised.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}
