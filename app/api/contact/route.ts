import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, businessName, website, challenge } = await req.json();

  if (!name || !businessName || !challenge) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: 'KodeCite Contact <onboarding@resend.dev>',
    to: 'mark@luxewindowworks.com',
    subject: `New contact from ${name} — ${businessName}`,
    text: `Name: ${name}\nBusiness: ${businessName}\nWebsite: ${website || 'Not provided'}\n\nChallenge:\n${challenge}`,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
