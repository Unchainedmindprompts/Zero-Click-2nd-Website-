import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export async function GET() {
  return new ImageResponse(<div style={{ width: '100%', height: '100%', padding: '62px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#f4f3e9', color: '#172c25', fontFamily: 'sans-serif' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: 34, fontWeight: 700, letterSpacing: -2 }}>kodecite.</span><span style={{ fontSize: 14, letterSpacing: 2 }}>YOUR BUSINESS. YOUR CUSTOMER’S AI.</span></div>
    <div style={{ display: 'flex', flexDirection: 'column', fontSize: 63, fontWeight: 600, letterSpacing: -3, lineHeight: 1.1 }}><span>Make your business easy</span><span>for your customer’s AI assistant</span><span style={{ color: '#547344' }}>to understand, trust and</span><span style={{ color: '#547344' }}>do business with.</span></div>
    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #becbb2', paddingTop: 22, fontSize: 16 }}><span>Business-owned websites & connected business information</span><span>kodecite.ai</span></div>
  </div>, { width: 1200, height: 630 });
}
