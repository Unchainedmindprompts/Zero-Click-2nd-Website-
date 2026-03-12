import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'A Private Engagement for Real Estate Agents | KodeCite.AI';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Gold top bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#b8935a', display: 'flex' }} />

        {/* Top row: logo + availability badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <span style={{ fontSize: '18px', fontFamily: 'Arial, sans-serif', fontWeight: 700, letterSpacing: '0.22em', color: '#f8f5f0' }}>
              KODE<span style={{ color: '#b8935a' }}>CITE</span>.AI
            </span>
          </div>
          <div style={{
            display: 'flex',
            border: '1px solid rgba(184,147,90,0.4)',
            padding: '10px 20px',
          }}>
            <span style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif', fontWeight: 500, letterSpacing: '0.18em', color: '#b8935a' }}>
              3–5 CLIENTS PER MONTH
            </span>
          </div>
        </div>

        {/* Center: main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span style={{ fontSize: '13px', fontFamily: 'Arial, sans-serif', fontWeight: 500, letterSpacing: '0.2em', color: '#b8935a' }}>
            FOR REAL ESTATE AGENTS · 2026
          </span>
          <div style={{ fontSize: '58px', fontWeight: 400, lineHeight: 1.1, color: '#f8f5f0', display: 'flex', flexDirection: 'column' }}>
            <span>You've built a career.</span>
            <span style={{ color: '#b8935a', fontStyle: 'italic' }}>Now build a presence</span>
            <span>that works as hard as you do.</span>
          </div>
        </div>

        {/* Bottom row: offer + CTA */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '13px', fontFamily: 'Arial, sans-serif', letterSpacing: '0.14em', color: 'rgba(248,245,240,0.4)' }}>
              WHAT'S INCLUDED
            </span>
            <div style={{ display: 'flex', gap: '28px' }}>
              {['Custom Next.js site', '3–5 core pages', 'Schema markup', '7 directories'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '16px', height: '1px', background: '#b8935a', display: 'flex' }} />
                  <span style={{ fontSize: '13px', fontFamily: 'Arial, sans-serif', color: 'rgba(248,245,240,0.6)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <span style={{ fontSize: '48px', fontWeight: 400, color: '#f8f5f0' }}>$3,000</span>
            <span style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif', letterSpacing: '0.1em', color: 'rgba(248,245,240,0.35)' }}>ONE-TIME · YOU OWN EVERYTHING</span>
          </div>
        </div>

        {/* Gold bottom bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'rgba(184,147,90,0.25)', display: 'flex' }} />
      </div>
    ),
    { ...size }
  );
}
