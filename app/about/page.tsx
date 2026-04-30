import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Mark Abplanalp | KodeCite.ai',
  description:
    "Mark Abplanalp built KodeCite.ai after spending a year figuring out why the phones stopped ringing — even while rankings looked fine on paper. 30 years in sales. 23 years as an entrepreneur. Based in North Idaho.",
  alternates: { canonical: 'https://www.kodecite.ai/about' },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://kodecite.ai/#founder',
  name: 'Mark Abplanalp',
  jobTitle: 'Founder',
  worksFor: { '@id': 'https://kodecite.ai/#organization' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: "Coeur d'Alene",
    addressRegion: 'ID',
    addressCountry: 'US',
  },
  // sameAs: [''], // TODO: add LinkedIn URL when provided
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kodecite.ai/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://kodecite.ai/about' },
  ],
};

const beliefs = [
  {
    n: '01',
    h: 'You should own everything.',
    d: "Your repository, your domain, your hosting account, your design system. If our relationship ends, your business doesn't skip a beat. No platform rent. No \"managed\" services that hold your site hostage.",
  },
  {
    n: '02',
    h: 'No retainer.',
    d: "I scope, I build, I hand off. You don't pay me monthly to keep your own website running. If you need help later, I scope a new engagement — but you're never on a meter.",
  },
  {
    n: '03',
    h: 'Schema is product, not metadata.',
    d: "Most agencies treat structured data as an afterthought. It's the actual product. The JSON-LD graph is what AI systems read — making it the most important code on your site.",
  },
  {
    n: '04',
    h: 'Speak plainly. Show the work.',
    d: "No jargon walls. No black boxes. Every recommendation I make, every line of code I write, every decision in the build — explained in language you can actually use to make a decision.",
  },
  {
    n: '05',
    h: 'Build for the next ten years, not the next algorithm update.',
    d: "Web standards. Server-rendered HTML. Real schema. The boring, durable foundation that doesn't need to be rebuilt every time the platforms shift. Because they will shift again.",
  },
];

const practiceCards = [
  {
    tag: 'SOLO + DELIBERATE',
    h: 'One operator. Two clients at a time.',
    d: "I run a deliberately small book. Two Foundation Build engagements concurrent — no more. That's how the work stays personally read, personally written, and personally accountable. If I can't take you on, I'll tell you when I can.",
  },
  {
    tag: 'SCOPED · NOT SUBSCRIBED',
    h: 'Engagements have a beginning and an end.',
    d: "Discovery, build, handoff. I scope it, I build it, I hand it off — you own it. No auto-renewing contracts. No \"and I'll keep optimizing for $X/month.\" If you decide later you want more work, I scope it new.",
  },
  {
    tag: 'PROFESSIONAL SERVICES',
    h: 'I work with practices, not platforms.',
    d: "Dentists, med spas, physical rehab, law, financial advisors, specialty medical. Owner-operators with a real practice and real revenue at stake. Not e-commerce, not SaaS, not ad-driven content sites. Different problems.",
  },
  {
    tag: 'PNW · REMOTE-FIRST',
    h: 'Based in North Idaho. Working everywhere.',
    d: "The practice runs from Coeur d'Alene. Engagements run remote — async with weekly calls. I've delivered for clients across the country and into Canada. Time zones haven't been a problem yet.",
  },
];

const trackItems = [
  {
    n: '30', u: 'YEARS',
    l: 'In sales — learning what makes someone actually buy, and what makes them walk away.',
  },
  {
    n: '23', u: 'YEARS',
    l: "As an entrepreneur — running my own businesses, paying my own bills, missing my own paychecks when things broke.",
  },
  {
    n: '12mo', u: 'RESEARCH',
    l: 'Spent studying the AI search shift, schema, llms.txt, and what actually moves the needle.',
  },
  {
    n: '2', u: 'BUSINESSES',
    l: "Of my own running on this stack — Luxe Window Works and my wife's real estate practice.",
  },
];

const namedStyle = {
  color: 'rgba(93,213,255,0.8)',
  fontStyle: 'italic',
} as const;

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{ padding: '120px 32px 80px', backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Left: text */}
            <div>
              <div className="d-eyebrow mb-6">ABOUT · THE PRACTICE</div>
              <h1
                className="font-inter font-semibold mb-6"
                style={{
                  fontSize: 'clamp(40px, 5.5vw, 68px)',
                  lineHeight: 1.0,
                  letterSpacing: '-0.03em',
                  color: 'var(--d-fg)',
                }}
              >
                I built this for{' '}
                <em className="serif">my own family</em> first.
              </h1>
              <p
                className="font-inter mb-8"
                style={{
                  fontSize: '17px',
                  lineHeight: 1.65,
                  color: 'var(--d-fg-dim)',
                  fontWeight: 300,
                  maxWidth: '500px',
                }}
              >
                KodeCite.ai didn&apos;t start as an agency. It started because the phones in
                my own businesses stopped ringing — even though the rankings looked fine on paper.
                I spent a year figuring out why. This is what I built to fix it.
              </p>
              <div
                className="flex flex-wrap items-center gap-2 font-mono"
                style={{ fontSize: '10px', letterSpacing: '0.16em', color: 'var(--d-fg-mute)' }}
              >
                <span>MARK ABPLANALP</span>
                <span style={{ color: 'var(--d-line)' }}>·</span>
                <span>FOUNDER</span>
                <span style={{ color: 'var(--d-line)' }}>·</span>
                <span>NORTH IDAHO</span>
              </div>
            </div>

            {/* Right: portrait placeholder */}
            <figure style={{ maxWidth: '360px', marginLeft: 'auto', width: '100%' }}>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  borderRadius: '14px',
                  border: '1px solid var(--d-line)',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/mark-abplanalp.png"
                  alt="Mark Abplanalp — Founder, KodeCite.ai"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority
                />
                {/* Corner label */}
                <div
                  className="font-mono"
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    right: '16px',
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    color: 'var(--d-fg)',
                    background: 'rgba(10,12,31,0.75)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    border: '1px solid var(--d-line-s)',
                  }}
                >
                  M.A.
                </div>
              </div>
              <figcaption
                className="flex flex-wrap items-center gap-2 font-mono mt-3"
                style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'var(--d-fg-mute)' }}
              >
                <span>30 YR SALES · 23 YR ENTREPRENEUR</span>
                <span style={{ color: 'var(--d-line)' }}>/</span>
                <span>CDA, ID</span>
              </figcaption>
            </figure>

          </div>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────── */}
      <section
        style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <p className="font-mono mb-4" style={{ fontSize: '11px', letterSpacing: '0.18em', color: 'var(--d-accent)' }}>
            01 / THE STORY
          </p>
          <h2
            className="font-inter font-semibold mb-12"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: 'var(--d-fg)',
            }}
          >
            How I got <em className="serif">here.</em>
          </h2>

          <div style={{ maxWidth: '720px' }}>

            <p
              className="font-inter mb-6"
              style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--d-fg-dim)', fontWeight: 300 }}
            >
              When my wife and I relocated to North Idaho, I did what you&apos;ve probably done:
              I looked for a way to build visibility in a new market. I sat in the same meetings
              you&apos;ve likely sat in, hearing the same{' '}
              <span style={namedStyle}>Yesterday&apos;s Playbook</span>
              {' '}— spend more, wait longer, chase the blue link.
            </p>

            <p
              className="font-inter mb-8"
              style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--d-fg-dim)', fontWeight: 300 }}
            >
              But while my rankings looked good on paper, the phones weren&apos;t ringing.
              I felt that{' '}
              <span style={namedStyle}>quiet panic</span>{' '}
              of knowing the game was shifting,
              even if the experts in the room couldn&apos;t explain why.
            </p>

            {/* Pull-quote */}
            <blockquote
              style={{
                margin: '0 0 32px',
                padding: '32px 40px',
                background: 'var(--d-bg-3)',
                border: '1px solid var(--d-line)',
                borderLeft: '3px solid var(--d-accent)',
                borderRadius: '12px',
              }}
            >
              <p
                className="font-inter"
                style={{
                  fontSize: '64px',
                  lineHeight: 0.75,
                  color: 'var(--d-accent)',
                  marginBottom: '16px',
                }}
              >
                &ldquo;
              </p>
              <p
                className="font-inter"
                style={{
                  fontSize: '18px',
                  lineHeight: 1.65,
                  color: 'var(--d-fg)',
                  fontWeight: 400,
                }}
              >
                I didn&apos;t start KodeCite.ai to build an agency.<br />
                I started it because I was{' '}
                <em className="serif">tired of writing checks</em>{' '}
                for visibility that didn&apos;t turn into revenue.
              </p>
            </blockquote>

            <p
              className="font-inter mb-6"
              style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--d-fg-dim)', fontWeight: 300 }}
            >
              I spent a year digging into the data and realized we are in the middle of
              {' '}<span style={namedStyle}>The Great Decoupling</span>. Search volume is higher than ever —
              but nearly{' '}
              <strong style={{ color: 'var(--d-fg)', fontWeight: 600 }}>
                60% of those searches now end without a single click
              </strong>{' '}
              to a website.
              AI and wearables — like the Oakley Meta glasses — are giving your customers answers
              before they ever see your link.
            </p>

            {/* Stat row */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-px mb-8"
              style={{
                background: 'var(--d-line)',
                border: '1px solid var(--d-line)',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              {[
                { num: '60%', label: 'of searches end without a click' },
                { num: '5×',  label: 'higher conversion when AI cites you' },
                { num: '40%', label: 'more time on site from AI-referred buyers' },
              ].map((stat) => (
                <div
                  key={stat.num}
                  style={{ padding: '28px 24px', background: 'var(--d-bg-3)' }}
                >
                  <p
                    className="font-inter font-semibold mb-1"
                    style={{
                      fontSize: 'clamp(28px, 4vw, 40px)',
                      lineHeight: 1,
                      letterSpacing: '-0.025em',
                      color: 'var(--d-accent)',
                    }}
                  >
                    {stat.num}
                  </p>
                  <p
                    className="font-inter"
                    style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--d-fg-mute)', fontWeight: 300 }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="font-inter mb-6"
              style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--d-fg-dim)', fontWeight: 300 }}
            >
              I built the Foundation Build because my own family&apos;s revenue depended on it.
              I needed to ensure that when a homebuyer asked their glasses for a &ldquo;realtor in
              Coeur d&apos;Alene,&rdquo; my wife&apos;s name was the one they heard in their ear. That when
              someone asked an AI for a window installer, my company came up — not the
              national chain that outspent me on ads.
            </p>

            <p
              className="font-inter mb-6"
              style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--d-fg-dim)', fontWeight: 300 }}
            >
              Here is what I learned: when an AI cites you, it&apos;s a{' '}
              <strong style={{ color: 'var(--d-fg)', fontWeight: 600 }}>warm referral from the machine</strong>.
              These buyers arrive pre-vetted. They spend 40% more time on your site and convert
              at a rate 5× higher than traditional search. They aren&apos;t comparison-shopping —
              they were already told you were the answer.
            </p>

            <p
              className="font-inter mb-10"
              style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--d-fg-dim)', fontWeight: 300 }}
            >
              I&apos;m a business owner who found a way to stop the bleeding. If you&apos;re feeling the
              quiet panic of disappearing clicks, I get it. I built this stack to reclaim the
              {' '}<span style={namedStyle}>Answer Real Estate</span>{' '}
              for my own businesses — and I&apos;m here
              to help you do the same for yours.
            </p>

            {/* Sign-off */}
            <div style={{ borderTop: '1px solid var(--d-line)', paddingTop: '24px' }}>
              <p
                className="font-mono mb-1"
                style={{ fontSize: '14px', letterSpacing: '0.08em', color: 'var(--d-fg)' }}
              >
                — M.A.
              </p>
              <p
                className="font-mono"
                style={{ fontSize: '9px', letterSpacing: '0.18em', color: 'var(--d-fg-mute)' }}
              >
                FOUNDER · KODECITE.AI · NORTH IDAHO
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Beliefs ──────────────────────────────────────── */}
      <section
        style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)', borderTop: '1px solid var(--d-line)' }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <p className="font-mono mb-4" style={{ fontSize: '11px', letterSpacing: '0.18em', color: 'var(--d-accent)' }}>
            02 / WHAT I BELIEVE
          </p>
          <h2
            className="font-inter font-semibold mb-5"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: 'var(--d-fg)',
              maxWidth: '640px',
            }}
          >
            Five things I won&apos;t <em className="serif">compromise on.</em>
          </h2>
          <p
            className="font-inter mb-14"
            style={{
              fontSize: '17px',
              lineHeight: 1.65,
              color: 'var(--d-fg-dim)',
              fontWeight: 300,
              maxWidth: '560px',
            }}
          >
            These aren&apos;t marketing talking points. They&apos;re the rules I built the practice around
            because they&apos;re the rules I needed when I was on your side of the table.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {beliefs.map((b) => (
              <article
                key={b.n}
                style={{
                  background: 'var(--d-bg-2)',
                  border: '1px solid var(--d-line)',
                  borderRadius: '12px',
                  padding: '28px 32px',
                }}
              >
                <p
                  className="font-mono mb-4"
                  style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'var(--d-accent)' }}
                >
                  {b.n}
                </p>
                <h3
                  className="font-inter font-semibold mb-3"
                  style={{ fontSize: '16px', lineHeight: 1.3, letterSpacing: '-0.01em', color: 'var(--d-fg)' }}
                >
                  {b.h}
                </h3>
                <p
                  className="font-inter"
                  style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300 }}
                >
                  {b.d}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practice ─────────────────────────────────────── */}
      <section
        style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <p className="font-mono mb-4" style={{ fontSize: '11px', letterSpacing: '0.18em', color: 'var(--d-accent)' }}>
            03 / THE PRACTICE
          </p>
          <h2
            className="font-inter font-semibold mb-5"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: 'var(--d-fg)',
              maxWidth: '640px',
            }}
          >
            How KodeCite <em className="serif">actually operates.</em>
          </h2>
          <p
            className="font-inter mb-14"
            style={{
              fontSize: '17px',
              lineHeight: 1.65,
              color: 'var(--d-fg-dim)',
              fontWeight: 300,
              maxWidth: '560px',
            }}
          >
            A small, deliberate practice. I&apos;m good at a narrow set of things — and I say
            no to a lot of work that doesn&apos;t fit. Here&apos;s what it actually looks like.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practiceCards.map((c) => (
              <div
                key={c.tag}
                style={{
                  background: 'var(--d-bg-3)',
                  border: '1px solid var(--d-line)',
                  borderRadius: '12px',
                  padding: '28px 32px',
                }}
              >
                <p
                  className="font-mono mb-3"
                  style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'var(--d-accent)' }}
                >
                  {c.tag}
                </p>
                <p
                  className="font-inter font-semibold mb-3"
                  style={{ fontSize: '17px', lineHeight: 1.25, letterSpacing: '-0.01em', color: 'var(--d-fg)' }}
                >
                  {c.h}
                </p>
                <p
                  className="font-inter"
                  style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300 }}
                >
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Track record ─────────────────────────────────── */}
      <section
        style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)', borderTop: '1px solid var(--d-line)' }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <p className="font-mono mb-4" style={{ fontSize: '11px', letterSpacing: '0.18em', color: 'var(--d-accent)' }}>
            04 / TRACK RECORD
          </p>
          <h2
            className="font-inter font-semibold mb-14"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: 'var(--d-fg)',
              maxWidth: '640px',
            }}
          >
            What I&apos;m bringing to <em className="serif">your project.</em>
          </h2>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{
              background: 'var(--d-line)',
              border: '1px solid var(--d-line)',
              borderRadius: '14px',
              overflow: 'hidden',
            }}
          >
            {trackItems.map((t) => (
              <div
                key={t.n}
                style={{ padding: '36px 32px', background: 'var(--d-bg-2)' }}
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <p
                    className="font-inter font-semibold"
                    style={{
                      fontSize: 'clamp(32px, 4vw, 52px)',
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                      color: 'var(--d-accent)',
                    }}
                  >
                    {t.n}
                  </p>
                  <p
                    className="font-mono"
                    style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--d-fg-mute)' }}
                  >
                    {t.u}
                  </p>
                </div>
                <p
                  className="font-inter"
                  style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--d-fg-mute)', fontWeight: 300 }}
                >
                  {t.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section
        style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">START THE CONVERSATION</div>

          <h2
            className="font-inter font-semibold mb-5"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: 'var(--d-fg)',
            }}
          >
            If any of this <em className="serif">resonates,</em> the next step is simple.
          </h2>

          <p
            className="font-inter mb-8"
            style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: 'var(--d-fg-dim)',
              fontWeight: 300,
            }}
          >
            Run your site through a Machine Read. I&apos;ll personally read what&apos;s there
            and send back a plain-language report — what&apos;s working, what isn&apos;t, what it means.
            Free. 24–48 hour turnaround. Yours to keep either way.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="d-btn d-btn-primary">
              Run my site →
            </Link>
            <a href="mailto:mark@kodecite.ai" className="d-btn d-btn-ghost">
              Email me directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
