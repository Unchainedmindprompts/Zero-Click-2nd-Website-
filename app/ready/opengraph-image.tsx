import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'A Private Engagement for Real Estate Agents | KodeCite.AI';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0a0806',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Gold top bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#b8935a', display: 'flex' }} />

        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <span style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '4px', color: '#f8f5f0' }}>KODE</span>
            <span style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '4px', color: '#b8935a' }}>CITE</span>
            <span style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '4px', color: '#f8f5f0' }}>.AI</span>
          </div>
          <div style={{ display: 'flex', border: '1px solid rgba(184,147,90,0.4)', padding: '10px 20px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '3px', color: '#b8935a' }}>
              3–5 CLIENTS PER MONTH
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', marginBottom: '16px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '3px', color: '#b8935a' }}>
              FOR REAL ESTATE AGENTS · 2026
            </span>
          </div>
          <div style={{ display: 'flex' }}>
            <span style={{ fontSize: '62px', fontWeight: 400, lineHeight: 1.1, color: '#f8f5f0' }}>
              You&apos;ve built a career.
            </span>
          </div>
          <div style={{ display: 'flex' }}>
            <span style={{ fontSize: '62px', fontWeight: 400, lineHeight: 1.1, color: '#b8935a' }}>
              Now build a presence
            </span>
          </div>
          <div style={{ display: 'flex' }}>
            <span style={{ fontSize: '62px', fontWeight: 400, lineHeight: 1.1, color: '#f8f5f0' }}>
              that works as hard as you do.
            </span>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '12px', letterSpacing: '3px', color: 'rgba(248,245,240,0.35)', marginBottom: '12px' }}>
              WHAT&apos;S INCLUDED
            </span>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ width: '16px', height: '1px', background: '#b8935a', display: 'flex', marginRight: '10px' }} />
              <span style={{ fontSize: '14px', color: 'rgba(248,245,240,0.6)' }}>Custom Next.js site</span>
              <div style={{ width: '16px', height: '1px', background: '#b8935a', display: 'flex', marginLeft: '24px', marginRight: '10px' }} />
              <span style={{ fontSize: '14px', color: 'rgba(248,245,240,0.6)' }}>3–5 core pages</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '16px', height: '1px', background: '#b8935a', display: 'flex', marginRight: '10px' }} />
              <span style={{ fontSize: '14px', color: 'rgba(248,245,240,0.6)' }}>Full schema markup</span>
              <div style={{ width: '16px', height: '1px', background: '#b8935a', display: 'flex', marginLeft: '24px', marginRight: '10px' }} />
              <span style={{ fontSize: '14px', color: 'rgba(248,245,240,0.6)' }}>7 directories verified</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <span style={{ fontSize: '52px', fontWeight: 400, color: '#f8f5f0', lineHeight: 1 }}>$3,000</span>
            <span style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(248,245,240,0.3)', marginTop: '6px' }}>ONE-TIME · YOU OWN EVERYTHING</span>
          </div>
        </div>

        {/* Gold bottom bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'rgba(184,147,90,0.25)', display: 'flex' }} />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
