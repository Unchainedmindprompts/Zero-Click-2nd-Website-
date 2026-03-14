import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#1c1814',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 72px 52px',
          position: 'relative',
          fontFamily: 'sans-serif',
          overflow: 'hidden',
        }}
      >
        {/* Wood band top */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '8px',
          background: 'linear-gradient(90deg, #3e1f08 0%, #7a5228 10%, #a0723a 22%, #c8945a 34%, #ddb888 46%, #a0723a 58%, #7a5228 70%, #c8945a 82%, #3e1f08 100%)',
        }} />

        {/* Blue/wood accent bar right */}
        <div style={{
          position: 'absolute', top: '8px', right: 0, bottom: 0, width: '5px',
          background: 'linear-gradient(180deg, #1a56db 0%, #1a56db 40%, #a0723a 60%, #c8945a 80%, #ddb888 100%)',
        }} />

        {/* Warm glow */}
        <div style={{
          position: 'absolute', top: '-100px', left: '-100px',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(160,114,58,0.12) 0%, transparent 65%)',
        }} />

        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{
            fontSize: '28px', letterSpacing: '4px', color: '#f8f5f0',
            fontWeight: 700, textTransform: 'uppercase',
          }}>
            <span style={{ color: '#1a56db' }}>K</span>ODE<span style={{ color: '#1a56db' }}>C</span>ITE<span style={{ color: '#c8945a' }}>.</span>AI
          </div>
          <div style={{
            fontSize: '11px', fontWeight: 600, letterSpacing: '2.5px',
            textTransform: 'uppercase', color: 'rgba(221,184,136,0.6)',
            padding: '7px 16px',
            border: '1px solid rgba(221,184,136,0.2)',
            borderRadius: '100px',
          }}>
            AI Search Optimization
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{
            fontSize: '12px', fontWeight: 600, letterSpacing: '3px',
            textTransform: 'uppercase', color: '#a0723a',
            display: 'flex', alignItems: 'center', gap: '14px',
            marginBottom: '20px',
          }}>
            The Great Decoupling · 2026
          </div>
          <div style={{
            fontSize: '96px', lineHeight: 0.9, letterSpacing: '2px',
            color: '#f8f5f0', fontWeight: 700, textTransform: 'uppercase',
          }}>
            YOUR SEO IS WORKING.
          </div>
          <div style={{
            fontSize: '96px', lineHeight: 0.9, letterSpacing: '2px',
            color: '#1a56db', fontWeight: 700, textTransform: 'uppercase',
            marginTop: '8px',
          }}>
            YOUR BUSINESS IS STILL INVISIBLE.
          </div>
          <div style={{
            fontSize: '18px', color: 'rgba(248,245,240,0.45)',
            marginTop: '28px', maxWidth: '620px', lineHeight: 1.6,
          }}>
            We make sure AI models choose your business — not your competitor&apos;s.
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '48px' }}>
            {[
              { num: '100/100', color: '#1a56db', label: 'PageSpeed Score' },
              { num: '5×', color: '#1a56db', label: 'AI Traffic Conversion Lift' },
              { num: '0.8s', color: '#c8945a', label: 'Machine Priority Load Time' },
            ].map((s) => (
              <div key={s.num} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '36px', color: s.color, fontWeight: 700, lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '11px', color: 'rgba(248,245,240,0.3)', marginTop: '5px' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{
            fontSize: '14px', fontWeight: 500, letterSpacing: '2px',
            color: 'rgba(248,245,240,0.25)', textTransform: 'uppercase',
          }}>
            kodecite.ai
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
