'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    website: '',
    challenge: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* No distracting nav elements on contact page — full focus */}
      <section className="min-h-screen bg-[#0A1628] pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="eyebrow mb-4">GET IN TOUCH</p>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Let&apos;s Build Your{' '}
                <span className="text-[#D4A94A]">Lead Generation System</span>
              </h1>
              <p className="text-[#8A9BB5] text-lg font-poppins max-w-2xl mx-auto leading-relaxed">
                No long forms. No commitment. Just a conversation about where your business is and
                where you want it to go. We&apos;ll be direct about what we can do and what it costs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Form */}
            <ScrollReveal delay={100} className="lg:col-span-3">
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#162444] rounded-2xl p-8 md:p-10 border border-white/10"
                >
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-poppins font-semibold text-white text-sm mb-2"
                      >
                        Your Name <span className="text-[#D4A94A]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="First and last name"
                        className="w-full bg-[#0F1E3C] border border-white/10 rounded-lg px-4 py-3.5 text-white font-poppins text-sm placeholder-[#8A9BB5]/60 focus:outline-none focus:border-[#D4A94A]/50 focus:ring-1 focus:ring-[#D4A94A]/30 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="businessName"
                        className="block font-poppins font-semibold text-white text-sm mb-2"
                      >
                        Business Name <span className="text-[#D4A94A]">*</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full bg-[#0F1E3C] border border-white/10 rounded-lg px-4 py-3.5 text-white font-poppins text-sm placeholder-[#8A9BB5]/60 focus:outline-none focus:border-[#D4A94A]/50 focus:ring-1 focus:ring-[#D4A94A]/30 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="website"
                        className="block font-poppins font-semibold text-white text-sm mb-2"
                      >
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://yourbusiness.com"
                        className="w-full bg-[#0F1E3C] border border-white/10 rounded-lg px-4 py-3.5 text-white font-poppins text-sm placeholder-[#8A9BB5]/60 focus:outline-none focus:border-[#D4A94A]/50 focus:ring-1 focus:ring-[#D4A94A]/30 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="challenge"
                        className="block font-poppins font-semibold text-white text-sm mb-2"
                      >
                        What&apos;s your biggest marketing challenge?{' '}
                        <span className="text-[#D4A94A]">*</span>
                      </label>
                      <textarea
                        id="challenge"
                        name="challenge"
                        required
                        rows={5}
                        value={formData.challenge}
                        onChange={handleChange}
                        placeholder="Tell us what's not working, what you've tried, and what winning looks like for your business..."
                        className="w-full bg-[#0F1E3C] border border-white/10 rounded-lg px-4 py-3.5 text-white font-poppins text-sm placeholder-[#8A9BB5]/60 focus:outline-none focus:border-[#D4A94A]/50 focus:ring-1 focus:ring-[#D4A94A]/30 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full btn-gold font-bold text-base py-4 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Start the Conversation'
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-[#162444] rounded-2xl p-10 border border-[#D4A94A]/30 text-center">
                  <div className="w-16 h-16 bg-[#D4A94A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[#D4A94A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-poppins font-bold text-2xl text-white mb-3">
                    Message Received
                  </h2>
                  <p className="text-[#8A9BB5] font-poppins leading-relaxed">
                    Thanks for reaching out. We&apos;ll review your message and get back to you
                    within one business day. No automated responses — you&apos;ll hear from a real person.
                  </p>
                </div>
              )}
            </ScrollReveal>

            {/* Contact info sidebar */}
            <ScrollReveal delay={200} className="lg:col-span-2">
              <div className="space-y-6">
                {/* Direct contact */}
                <div className="bg-[#162444] rounded-xl p-6 border border-white/10">
                  <h3 className="font-poppins font-bold text-white mb-4">Direct Contact</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:hello@zeroclickstrategies.com"
                      className="flex items-center gap-3 text-[#8A9BB5] hover:text-[#D4A94A] transition-colors group"
                    >
                      <div className="w-8 h-8 bg-[#D4A94A]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4A94A]/20 transition-colors">
                        <svg className="w-4 h-4 text-[#D4A94A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="font-poppins text-sm">hello@zeroclickstrategies.com</span>
                    </a>
                    <div className="flex items-center gap-3 text-[#8A9BB5]">
                      <div className="w-8 h-8 bg-[#D4A94A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-[#D4A94A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="font-poppins text-sm">Post Falls, Idaho</span>
                    </div>
                  </div>
                </div>

                {/* Response time */}
                <div className="bg-[#162444] rounded-xl p-6 border border-[#D4A94A]/20">
                  <h3 className="font-poppins font-bold text-white mb-3">What Happens Next</h3>
                  <div className="space-y-4">
                    {[
                      { step: '1', text: 'We review your message — usually within a few hours' },
                      { step: '2', text: 'We send a direct, honest response with our assessment' },
                      { step: '3', text: 'If there\'s a fit, we schedule a 30-minute call to plan' },
                      { step: '4', text: 'You get a clear proposal with exact deliverables and price' },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#D4A94A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[#D4A94A] text-xs font-bold font-poppins">{item.step}</span>
                        </div>
                        <p className="text-[#8A9BB5] text-sm font-poppins leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Value reminder */}
                <div className="bg-[#0F1E3C] rounded-xl p-6 border border-white/5">
                  <p className="text-[#8A9BB5] text-sm font-poppins leading-relaxed italic">
                    &ldquo;One closed real estate deal pays for the entire package. One new window
                    treatment project does the same.&rdquo;
                  </p>
                  <p className="text-[#D4A94A] text-xs font-poppins font-semibold mt-3">
                    — Zero Click Strategies
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
