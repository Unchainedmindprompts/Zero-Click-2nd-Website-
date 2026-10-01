'use client';

import { useState } from 'react';
import { validateInquiry } from '@/lib/inquiry-validation';

interface FormState {
  name: string;
  email: string;
  businessName: string;
  website: string;
  challenge: string;
}

interface SubmittedData {
  email: string;
  website: string;
  businessName: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    businessName: '',
    website: '',
    challenge: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState<SubmittedData>({ email: '', website: '', businessName: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (status === 'submitting') return;
    const checked = validateInquiry(form, true);
    if (!checked.ok) {
      setErrorMsg(checked.error);
      setStatus('error');
      return;
    }
    const fullWebsite = checked.value.website;

    setStatus('submitting');
    try {
      const res = await fetch('/api/machine-read', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(checked.value),
      });
      if (!res.ok) throw new Error('Server error');
      setSubmitted({ email: checked.value.email, website: fullWebsite, businessName: checked.value.businessName });
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
        role="status"
        style={{
          background: 'var(--d-bg-2)',
          border: '1px solid var(--d-line)',
          borderRadius: '16px',
          padding: '56px 48px',
          textAlign: 'center',
        }}
      >
        {/* Double-ring checkmark */}
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
          REQUEST · RECEIVED
        </p>

        <h2
          className="font-inter font-semibold mb-4"
          style={{
            fontSize: 'clamp(22px, 3vw, 30px)',
            letterSpacing: '-0.02em',
            color: 'var(--d-fg)',
          }}
        >
          Your request has been received.
        </h2>

        <p
          className="font-inter mb-10"
          style={{
            fontSize: '15px',
            lineHeight: 1.65,
            color: 'var(--d-fg-dim)',
            fontWeight: 300,
            maxWidth: '480px',
            margin: '0 auto 40px',
          }}
        >
          We&apos;ve received your Agent Readiness Review for{' '}
          <strong style={{ color: 'var(--d-fg)', fontWeight: 600 }}>{submitted.website}</strong>.
          We’ll send the written review to{' '}
          <strong style={{ color: 'var(--d-fg)', fontWeight: 600 }}>{submitted.email}</strong>{' '}
          within two business days.
        </p>

        <div
          style={{
            textAlign: 'left',
            maxWidth: '420px',
            margin: '0 auto',
            borderTop: '1px solid var(--d-line)',
            paddingTop: '32px',
          }}
        >
          <p
            className="font-mono mb-5"
            style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'var(--d-fg-mute)' }}
          >
            WHAT HAPPENS NEXT
          </p>
          <ol className="flex flex-col gap-4">
            {[
              'We review identity, services, geography, policies, discovery, and action paths.',
              'You receive a written report — what AI can understand, verify, and safely do today.',
              'If we’re a fit, we talk. If not, the report is yours to keep.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="font-mono flex-shrink-0"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.14em',
                    color: 'var(--d-accent)',
                    marginTop: '2px',
                    minWidth: '20px',
                  }}
                >
                  0{i + 1}
                </span>
                <span
                  className="font-inter"
                  style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--d-fg-dim)', fontWeight: 300 }}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  // ── Form state (idle | submitting | error) ──────────────
  return (
    <form
      aria-label="Request an Agent Readiness Review"
      onSubmit={handleSubmit}
      noValidate
      style={{
        position: 'relative',
        background: 'var(--d-bg-3)',
        border: '1px solid var(--d-line-s)',
        borderRadius: '16px',
        padding: 'clamp(22px, 4vw, 40px)',
        overflow: 'hidden',
      }}
    >
      {/* Form header */}
      <div
        className="flex items-center justify-between mb-8"
        style={{ borderBottom: '1px solid var(--d-line-s)', paddingBottom: '20px' }}
      >
        <span
          className="font-mono"
          style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'var(--d-fg-dim)' }}
        >
          REVIEW / NEW REQUEST
        </span>
        <div className="flex items-center gap-2">
          <span
            className="animate-pulse inline-block rounded-full flex-shrink-0"
            style={{ width: '6px', height: '6px', background: 'var(--d-accent)' }}
          />
          <span
            className="font-mono"
            style={{ fontSize: '10px', letterSpacing: '0.16em', color: 'var(--d-accent)' }}
          >
            READY
          </span>
        </div>
      </div>

      {/* Name + Business name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <label>
          <span
            className="font-mono block mb-2"
            style={{ fontSize: '11px', letterSpacing: '0.08em', color: 'var(--d-fg-dim)' }}
          >
            Your name
          </span>
          <input
            className="d-input"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label>
          <span
            className="font-mono block mb-2"
            style={{ fontSize: '11px', letterSpacing: '0.08em', color: 'var(--d-fg-dim)' }}
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
      </div>

      <label className="block mb-4">
        <span className="font-mono block mb-2" style={{ fontSize: '11px', letterSpacing: '0.08em', color: 'var(--d-fg-dim)' }}>Reply email</span>
        <input className="d-input" name="email" type="email" required maxLength={254} value={form.email} onChange={handleChange} placeholder="you@yourbusiness.com" autoComplete="email" />
        <span className="block mt-2" style={{ fontSize: '12px', color: 'var(--d-fg-mute)' }}>Where we’ll send your written review. Used to respond to this request.</span>
      </label>

      {/* Website URL */}
      <label className="block mb-4">
        <span
          className="font-mono block mb-2"
          style={{ fontSize: '11px', letterSpacing: '0.08em', color: 'var(--d-fg-dim)' }}
        >
          Website URL
        </span>
        <div className="d-url-field">
          <span
            className="font-mono flex-shrink-0 flex items-center"
            style={{
              padding: '12px 12px 12px 16px',
              borderRight: '1px solid var(--d-line)',
              color: 'var(--d-fg-mute)',
              fontSize: '13px',
              background: 'rgba(93,213,255,0.04)',
            }}
          >
            https://
          </span>
          <input
            name="website"
            type="text"
            value={form.website}
            onChange={handleChange}
            placeholder="cascadedental.com"
            autoComplete="url"
          />
        </div>
      </label>

      {/* Challenge / what made you look us up */}
      <label className="block mb-6">
        <span
          className="font-mono block mb-1"
          style={{ fontSize: '11px', letterSpacing: '0.08em', color: 'var(--d-fg-dim)' }}
        >
          What should a customer — or their AI agent — be able to accomplish?
        </span>
        <span
          className="font-inter block mb-2"
          style={{ fontSize: '12px', color: 'var(--d-fg-dim)', fontWeight: 300 }}
        >
          A few sentences. The more specific, the more useful the review.
        </span>
        <textarea
          className="d-input"
          name="challenge"
          value={form.challenge}
          onChange={handleChange}
          rows={6}
          placeholder="A homeowner or their AI agent should be able to tell what we install, whether we serve their city, and request an in-home consultation — without booking or pricing the job."
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
          FREE · WRITTEN WITHIN TWO BUSINESS DAYS
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
            <>Request the review →</>
          )}
        </button>
      </div>

      {/* Corner watermark */}
      <span
        className="font-mono"
        style={{
          position: 'absolute',
          bottom: '14px',
          right: '18px',
          fontSize: '9px',
          letterSpacing: '0.18em',
          color: 'rgba(140,160,255,0.2)',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        REVIEW
      </span>
    </form>
  );
}
