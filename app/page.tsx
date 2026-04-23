import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f8f5f0] pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Text */}
            <div>
              <ScrollReveal>
                <h1 className="font-poppins font-bold text-[#0a0806] leading-tight mb-6" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
                  Stop competing with a broken foundation.
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <p className="font-poppins text-[#6a5a48] text-lg leading-relaxed mb-5">
                  Your WordPress, Squarespace, or Wix site was built for an era that&apos;s ending. AI search doesn&apos;t reward content volume, review counts, or mention equity — it rewards businesses whose digital foundation is built for machine clarity.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="font-poppins text-[#6a5a48] text-base leading-relaxed mb-8">
                  We rebuild the foundation on Next.js — engineered for clarity, speed, and AI readability. You own it. Forever. And every dollar you spend on content or marketing after that actually starts compounding.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/audit" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block text-center">
                    Get My Free Scaffolding Audit
                  </Link>
                  <Link href="/services" className="btn-gold-outline text-base font-bold px-8 py-4 rounded-md inline-block text-center">
                    See What&apos;s Included
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Image */}
            <ScrollReveal delay={150}>
              <div className="relative w-full flex items-center justify-center">
                <Image
                  src="/images/kodecite-hero.png"
                  alt="KodeCite.ai — AI-ready digital foundations"
                  width={640}
                  height={520}
                  className="w-full h-auto object-contain rounded-xl"
                  priority
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-[#f2ede4] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="eyebrow mb-6">THE PROBLEM</p>
            <p className="font-poppins text-[#0a0806] text-xl leading-relaxed">
              You&apos;ve been sold SEO. You&apos;ve been sold content. You&apos;ve been sold reviews, Reddit tactics, mentions, and retainer after retainer. None of it is compounding the way it&apos;s supposed to. That&apos;s not because you picked the wrong agency. It&apos;s because the ground has shifted — and almost no one in the industry is telling you the truth about what&apos;s actually happening.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
