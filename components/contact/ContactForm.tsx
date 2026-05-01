'use client';

import { useState } from 'react';

interface FormState {
  name: string;
  businessName: string;
  website: string;
  challenge: string;
}

interface SubmittedData {
  website: string;
  businessName: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    businessName: '',
    website: '',
    challenge: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState<SubmittedData>({ website: '', businessName: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!form.name || !form.businessName || !form.website || !form.challenge) {
      setErrorMsg('All fields are required.');
      setStatus('error');
      return;
    }

    const fullWebsite = form.website.startsWith('http') ? form.website : `https://${form.website}`;
    try {
      new URL(fullWebsite);
    } catch {
      setErrorMsg('Please enter a valid website URL (e.g. yourbusiness.com).');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/machine-read', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website: fullWebsite }),
      });
      if (!res.ok) throw new Error('Server error');
      setSubmitted({ website: fullWebsite, businessName: form.businessName });
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
          READ.v1 · QUEUED
        </p>

        <h2
          className="font-inter font-semibold mb-4"
          style={{
            fontSize: 'clamp(22px, 3vw, 30px)',
            letterSpacing: '-0.02em',
            color: 'var(--d-fg)',
          }}
        >
          Your read is in the queue.
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
          We&apos;ve received your request to read{' '}
          <strong style={{ color: 'var(--d-fg)', fontWeight: 600 }}>{submitted.website}</strong>.
          You&apos;ll hear back at the email tied to{' '}
          <strong style={{ color: 'var(--d-fg)', fontWeight: 600 }}>{submitted.businessName}</strong>{' '}
          within 24–48 hours with a plain-language report.
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
              'We personally read your site against the four-layer scaffold.',
              'You receive a written report — what’s there, what isn’t, what it means.',
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
        className="flex items-center justify-between mb-8"
        style={{ borderBottom: '1px solid var(--d-line-s)', paddingBottom: '20px' }}
      >
        <span
          className="font-mono"
          style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'var(--d-fg-dim)' }}
        >
          READ.v1 / NEW REQUEST
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

      {/* Website URL */}
      <label className="block mb-4">
        <span
          className="font-mono block mb-2"
          style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--d-fg-dim)' }}
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
          style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--d-fg-dim)' }}
        >
          What made you look us up?
        </span>
        <span
          className="font-inter block mb-2"
          style={{ fontSize: '12px', color: 'var(--d-fg-dim)', fontWeight: 300 }}
        >
          A few sentences. The more specific, the more useful the read.
        </span>
        <textarea
          className="d-input"
          name="challenge"
          value={form.challenge}
          onChange={handleChange}
          rows={6}
          placeholder="We rank okay on Google but I keep hearing about AI search — when people ask ChatGPT for a dentist in our area, we never come up. Is that fixable?"
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
          NO SALES PITCH · 24–48H · YOUR REPORT IS YOURS
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
            <>Run my site →</>
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
        READ.v1
      </span>
    </form>
  );
}
