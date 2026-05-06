import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'KodeCite.ai — AI Visibility Engineering';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0a0c1f',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 72px 52px',
          fontFamily: 'sans-serif',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
          background: 'linear-gradient(90deg, transparent 0%, #5dd5ff 25%, #5dd5ff 75%, transparent 100%)',
          display: 'flex',
        }} />

        {/* Top row: logo + pill */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '20px', color: '#5dd5ff', lineHeight: 1 }}>▸</span>
            <span style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.5px', color: '#ffffff' }}>KODECITE</span>
            <span style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.5px', color: 'rgba(255,255,255,0.3)' }}>.AI</span>
          </div>
          <div style={{
            display: 'flex',
            fontSize: '11px', fontWeight: 600, letterSpacing: '2.5px',
            color: 'rgba(93,213,255,0.7)',
            padding: '7px 18px',
            border: '1px solid rgba(93,213,255,0.2)',
            borderRadius: '100px',
          }}>
            <span>AI VISIBILITY ENGINEERING</span>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', marginBottom: '18px' }}>
            <span style={{
              fontSize: '11px', fontWeight: 600, letterSpacing: '3px',
              color: '#5dd5ff', opacity: 0.55,
            }}>
              FOUNDATION · SCHEMA · ENTITY ARCHITECTURE
            </span>
          </div>
          <div style={{ display: 'flex' }}>
            <span style={{ fontSize: '82px', lineHeight: 0.93, letterSpacing: '-2px', color: '#ffffff', fontWeight: 700 }}>
              Built once.
            </span>
          </div>
          <div style={{ display: 'flex' }}>
            <span style={{ fontSize: '82px', lineHeight: 0.93, letterSpacing: '-2px', color: '#ffffff', fontWeight: 700 }}>
              Owned forever.
            </span>
          </div>
          <div style={{ display: 'flex' }}>
            <span style={{ fontSize: '82px', lineHeight: 0.93, letterSpacing: '-2px', color: '#5dd5ff', fontWeight: 700 }}>
              Found by AI.
            </span>
          </div>
          <div style={{ display: 'flex', marginTop: '26px' }}>
            <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.42)', lineHeight: 1.55, maxWidth: '600px' }}>
              We rebuild your digital foundation on Next.js — engineered for AI readability, structured for machine clarity, owned by you forever.
            </span>
          </div>
        </div>

        {/* Bottom row: stats + domain */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '52px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '34px', color: '#5dd5ff', fontWeight: 700, lineHeight: 1 }}>60%</span>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.28)', marginTop: '6px', letterSpacing: '1.2px' }}>OF SEARCHES END ZERO-CLICK</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '34px', color: '#7af0c2', fontWeight: 700, lineHeight: 1 }}>24–48H</span>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.28)', marginTop: '6px', letterSpacing: '1.2px' }}>MACHINE READ TURNAROUND</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '34px', color: '#b89bff', fontWeight: 700, lineHeight: 1 }}>100+</span>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.28)', marginTop: '6px', letterSpacing: '1.2px' }}>PAGES SCHEMA-VALIDATED</span>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <span style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '2px', color: 'rgba(255,255,255,0.18)' }}>
              kodecite.ai
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
