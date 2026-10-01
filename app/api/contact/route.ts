import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { validateInquiry } from '@/lib/inquiry-validation';

export async function POST(req: NextRequest) {
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }
  const checked = validateInquiry(body, false);
  if (!checked.ok) return NextResponse.json({ error: checked.error }, { status: 400 });
  if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: 'Delivery is temporarily unavailable. Please email mark@kodecite.ai.' }, { status: 503 });
  const { name, email, businessName, website, challenge } = checked.value;
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: 'KodeCite Contact <onboarding@resend.dev>',
      to: 'mark@luxewindowworks.com',
      replyTo: email,
      subject: `New inquiry from ${name} — ${businessName}`,
      text: `Name: ${name}\nEmail: ${email}\nBusiness: ${businessName}\nWebsite: ${website || 'Not provided'}\n\nWhat they are trying to build or solve:\n${challenge}`,
    });
    if (error) throw new Error('Email provider did not accept the request');
    return NextResponse.json({ success: true });
  } catch {
    console.error('Contact delivery failed');
    return NextResponse.json({ error: 'Failed to send the request. Please try again or email mark@kodecite.ai.' }, { status: 502 });
  }
}
