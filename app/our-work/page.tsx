import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Our Work — Zero Click Strategies',
  description:
    'Every site we build is fast, structured for AI, and built to convert. See our recent projects including INW Basecamp and Luxe Window Works.',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zeroclickstrategies.com' },
    { '@type': 'ListItem', position: 2, name: 'Our Work', item: 'https://zeroclickstrategies.com/our-work' },
  ],
};

const projects = [
  {
    url: 'https://www.inwbasecamp.com/',
    screenshot: '/inw-basecamp-hero.png',
    title: 'INW Basecamp',
    category: 'Real Estate & Relocation',
    description:
      'Northern Idaho real estate and relocation resource. Built on Next.js with full schema markup and AEO-optimized content.',
  },
  {
    url: 'https://www.luxewindowworks.com/',
    screenshot: '/luxe-window-works-hero.png',
    title: 'Luxe Window Works',
    category: 'Home Services',
    description:
      'Custom window treatment company serving Northern Idaho. Built on Next.js with location pages, service schema, and AI-optimized content.',
  },
];

export default function OurWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#0A1628] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-50 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="eyebrow mb-4">RECENT PROJECTS</p>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Our Work
          </h1>
          <p className="text-[#8A9BB5] text-xl font-poppins max-w-3xl mx-auto leading-relaxed">
            Every site we build is fast, structured for AI, and built to convert. See for yourself.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Project Cards */}
      <section className="py-24 md:py-32 bg-[#0F1E3C] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.url} delay={i * 150}>
                <div className="bg-[#162444] rounded-2xl overflow-hidden border border-white/5 hover:border-[#D4A94A]/30 transition-all duration-300 flex flex-col h-full card-gold-border">
                  {/* Screenshot Preview */}
                  <div className="relative w-full aspect-video overflow-hidden bg-[#0A1628]">
                    <Image
                      src={project.screenshot}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="mb-4">
                      <span className="category-tag">{project.category}</span>
                    </div>
                    <h2 className="font-poppins font-bold text-2xl text-white mb-3 leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-[#8A9BB5] font-poppins text-base leading-relaxed mb-8 flex-1">
                      {project.description}
                    </p>
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold text-sm font-semibold px-6 py-3 rounded-md inline-block text-center"
                    >
                      Visit Site
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="py-24 bg-[#0A1628] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">
              Your Business Could Be <span className="text-[#D4A94A]">Next</span>
            </h2>
            <p className="text-[#8A9BB5] text-xl font-poppins mb-10 leading-relaxed max-w-2xl mx-auto">
              The same approach that builds fast, AI-ready websites — available for your business right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md">
                Start the Conversation
              </Link>
              <Link href="/services" className="btn-gold-outline text-base font-semibold px-8 py-4 rounded-md">
                See Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
