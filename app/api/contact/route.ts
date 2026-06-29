import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, businessName, website, challenge } = await req.json();

  if (!name || !businessName || !challenge) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'KodeCite Contact <onboarding@resend.dev>',
    to: 'mark@luxewindowworks.com',
    replyTo: email || undefined,
    subject: `New inquiry from ${name} — ${businessName}`,
    text: `Name: ${name}\nEmail: ${email || 'Not provided'}\nBusiness: ${businessName}\nWebsite: ${website || 'Not provided'}\n\nWhat they're trying to build or solve:\n${challenge}`,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
