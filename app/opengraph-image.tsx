import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'KodeCite.AI — AI Search Optimization';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
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
          display: 'flex',
        }} />

        {/* Accent bar right */}
        <div style={{
          position: 'absolute', top: '8px', right: 0, bottom: 0, width: '5px',
          background: 'linear-gradient(180deg, #1a56db 0%, #1a56db 40%, #a0723a 60%, #c8945a 80%, #ddb888 100%)',
          display: 'flex',
        }} />

        {/* Top row: logo + badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0px' }}>
            <span style={{ fontSize: '28px', letterSpacing: '4px', fontWeight: 700, color: '#1a56db' }}>K</span>
            <span style={{ fontSize: '28px', letterSpacing: '4px', fontWeight: 700, color: '#f8f5f0' }}>ODE</span>
            <span style={{ fontSize: '28px', letterSpacing: '4px', fontWeight: 700, color: '#1a56db' }}>C</span>
            <span style={{ fontSize: '28px', letterSpacing: '4px', fontWeight: 700, color: '#f8f5f0' }}>ITE</span>
            <span style={{ fontSize: '28px', letterSpacing: '4px', fontWeight: 700, color: '#c8945a' }}>.</span>
            <span style={{ fontSize: '28px', letterSpacing: '4px', fontWeight: 700, color: '#f8f5f0' }}>AI</span>
          </div>
          {/* Badge */}
          <div style={{
            display: 'flex',
            fontSize: '11px', fontWeight: 600, letterSpacing: '2.5px',
            textTransform: 'uppercase', color: 'rgba(221,184,136,0.6)',
            padding: '7px 16px',
            border: '1px solid rgba(221,184,136,0.2)',
            borderRadius: '100px',
          }}>
            <span>AI Search Optimization</span>
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <span style={{
              fontSize: '12px', fontWeight: 600, letterSpacing: '3px',
              textTransform: 'uppercase', color: '#a0723a',
            }}>
              The Great Decoupling · 2026
            </span>
          </div>
          <div style={{ display: 'flex' }}>
            <span style={{
              fontSize: '88px', lineHeight: 0.9, letterSpacing: '2px',
              color: '#f8f5f0', fontWeight: 700, textTransform: 'uppercase',
            }}>
              YOUR SEO IS WORKING.
            </span>
          </div>
          <div style={{ display: 'flex', marginTop: '8px' }}>
            <span style={{
              fontSize: '88px', lineHeight: 0.9, letterSpacing: '2px',
              color: '#1a56db', fontWeight: 700, textTransform: 'uppercase',
            }}>
              YOUR BUSINESS IS STILL INVISIBLE.
            </span>
          </div>
          <div style={{ display: 'flex', marginTop: '28px' }}>
            <span style={{
              fontSize: '18px', color: 'rgba(248,245,240,0.45)', maxWidth: '620px', lineHeight: 1.6,
            }}>
              We make sure AI models choose your business — not your competitor&apos;s.
            </span>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '48px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '36px', color: '#1a56db', fontWeight: 700, lineHeight: 1 }}>100/100</span>
              <span style={{ fontSize: '11px', color: 'rgba(248,245,240,0.3)', marginTop: '5px' }}>PageSpeed Score</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '36px', color: '#1a56db', fontWeight: 700, lineHeight: 1 }}>5×</span>
              <span style={{ fontSize: '11px', color: 'rgba(248,245,240,0.3)', marginTop: '5px' }}>AI Traffic Conversion Lift</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '36px', color: '#c8945a', fontWeight: 700, lineHeight: 1 }}>0.8s</span>
              <span style={{ fontSize: '11px', color: 'rgba(248,245,240,0.3)', marginTop: '5px' }}>Machine Priority Load Time</span>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <span style={{
              fontSize: '14px', fontWeight: 500, letterSpacing: '2px',
              color: 'rgba(248,245,240,0.25)', textTransform: 'uppercase',
            }}>
              kodecite.ai
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
