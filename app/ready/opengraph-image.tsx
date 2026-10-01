import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const alt = 'Your real estate expertise. Clearly understood. | Kodecite';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
 return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '65px 75px', background: '#172c25', color: '#f4f3e9', fontFamily: 'sans-serif' }}><span style={{ fontSize: 32, letterSpacing: -1, fontWeight: 700 }}>kodecite.</span><div style={{ display: 'flex', flexDirection: 'column', fontSize: 80, lineHeight: 1.1, letterSpacing: -3 }}><span>Your real estate expertise.</span><span style={{ color: '#c8eea0' }}>Clearly understood.</span></div><span style={{ fontSize: 23, color: '#b3c6a5' }}>For customers and their AI assistants.</span></div>,size);
}
