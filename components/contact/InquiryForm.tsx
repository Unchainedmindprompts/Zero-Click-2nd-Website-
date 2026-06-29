'use client';

import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  businessName: string;
  website: string;
  challenge: string;
}

export default function InquiryForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    businessName: '',
    website: '',
    challenge: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!form.name || !form.email || !form.businessName || !form.challenge) {
      setErrorMsg('Name, email, business name, and your message are required.');
      setStatus('error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    let website = form.website.trim();
    if (website && !website.startsWith('http')) website = `https://${website}`;
    if (website) {
      try {
        new URL(website);
      } catch {
        setErrorMsg('Please enter a valid website URL (e.g. yourbusiness.com).');
        setStatus('error');
        return;
      }
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website }),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
    } catch {
      setErrorMsg(
        'Something went wrong. Please try again or email mark@kodecite.ai directly.',
      );
      setStatus('error');
    }
  };

  // ── Success state ───────────────────────────────────────
  if (status === 'success') {
    return (
      <div
        style={{
          background: 'var(--d-bg-2)',
          border: '1px solid var(--d-line)',
          borderRadius: '16px',
          padding: '56px 48px',
          textAlign: 'center',
        }}
      >
        <div className="flex justify-center mb-6">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="28" r="26" stroke="var(--d-accent)" strokeWidth="1" opacity="0.4" />
            <circle cx="28" cy="28" r="20" stroke="var(--d-accent)" strokeWidth="1" opacity="0.7" />
            <path
              d="M19 28L25 34L37 22"
              stroke="var(--d-accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p
          className="font-mono mb-3"
          style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--d-accent)' }}
        >
          MESSAGE · SENT
        </p>

        <h2
          className="font-inter font-semibold mb-4"
          style={{
            fontSize: 'clamp(22px, 3vw, 30px)',
            letterSpacing: '-0.02em',
            color: 'var(--d-fg)',
          }}
        >
          Thanks — your message is on its way.
        </h2>

        <p
          className="font-inter"
          style={{
            fontSize: '15px',
            lineHeight: 1.65,
            color: 'var(--d-fg-dim)',
            fontWeight: 300,
            maxWidth: '460px',
            margin: '0 auto',
          }}
        >
          We&apos;ll get back to you, usually within one business day. If it&apos;s
          urgent, email{' '}
          <strong style={{ color: 'var(--d-fg)', fontWeight: 600 }}>mark@kodecite.ai</strong>{' '}
          directly.
        </p>
      </div>
    );
  }

  // ── Form state (idle | submitting | error) ──────────────
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{
        position: 'relative',
        background: 'var(--d-bg-3)',
        border: '1px solid var(--d-line-s)',
        borderRadius: '16px',
        padding: '36px 40px 40px',
        overflow: 'hidden',
      }}
    >
      {/* Form header */}
      <div
        className="mb-8"
        style={{ borderBottom: '1px solid var(--d-line-s)', paddingBottom: '20px' }}
      >
        <span
          className="font-mono"
          style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'var(--d-fg-dim)' }}
        >
          SEND A MESSAGE
        </span>
      </div>

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <label>
          <span
            className="font-mono block mb-2"
            style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--d-fg-dim)' }}
          >
            Your name
          </span>
          <input
            className="d-input"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Mark Abplanalp"
            autoComplete="name"
          />
        </label>
        <label>
          <span
            className="font-mono block mb-2"
            style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--d-fg-dim)' }}
          >
            Email
          </span>
          <input
            className="d-input"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@business.com"
            autoComplete="email"
          />
        </label>
      </div>

      {/* Business name + Website row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <label>
          <span
            className="font-mono block mb-2"
            style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--d-fg-dim)' }}
          >
            Business name
          </span>
          <input
            className="d-input"
            name="businessName"
            type="text"
            value={form.businessName}
            onChange={handleChange}
            placeholder="Cascade Dental"
            autoComplete="organization"
          />
        </label>
        <label>
          <span
            className="font-mono block mb-2"
            style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--d-fg-dim)' }}
          >
            Website URL <span style={{ color: 'var(--d-fg-mute)' }}>(optional)</span>
          </span>
          <input
            className="d-input"
            name="website"
            type="text"
            value={form.website}
            onChange={handleChange}
            placeholder="cascadedental.com"
            autoComplete="url"
          />
        </label>
      </div>

      {/* What are you trying to build or solve? */}
      <label className="block mb-6">
        <span
          className="font-mono block mb-1"
          style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--d-fg-dim)' }}
        >
          How can we help?
        </span>
        <span
          className="font-inter block mb-2"
          style={{ fontSize: '12px', color: 'var(--d-fg-dim)', fontWeight: 300 }}
        >
          A few details about your project, timeline, or question.
        </span>
        <textarea
          className="d-input"
          name="challenge"
          value={form.challenge}
          onChange={handleChange}
          rows={6}
          placeholder="We're planning a rebuild in Q3 and want AI systems to actually understand our services and locations. Where do we start, and what would it take?"
        />
      </label>

      {/* Error message */}
      {(status === 'error') && errorMsg && (
        <div
          role="alert"
          className="flex items-start gap-2 mb-5"
          style={{
            padding: '12px 16px',
            background: 'rgba(255,107,138,0.08)',
            border: '1px solid rgba(255,107,138,0.25)',
            borderRadius: '8px',
          }}
        >
          <span className="font-mono flex-shrink-0" style={{ color: 'var(--d-warn)', fontSize: '12px' }}>!</span>
          <span className="font-inter" style={{ fontSize: '13px', color: 'var(--d-warn)', lineHeight: 1.5 }}>
            {errorMsg}
          </span>
        </div>
      )}

      {/* Footer: trust line + submit */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <span
          className="font-mono"
          style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'var(--d-fg-mute)' }}
        >
          WE REPLY WITHIN ONE BUSINESS DAY
        </span>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="d-btn d-btn-primary flex-shrink-0"
          style={{ opacity: status === 'submitting' ? 0.7 : 1 }}
        >
          {status === 'submitting' ? (
            <>
              <svg
                className="animate-spin"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending...
            </>
          ) : (
            <>Send inquiry →</>
          )}
        </button>
      </div>
    </form>
  );
}
