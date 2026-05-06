import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, businessName, website, challenge } = await req.json();

  if (!name || !businessName || !website || !challenge) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  const { error } = await resend.emails.send({
    from: 'KodeCite Contact <onboarding@resend.dev>',
    to: 'mark@luxewindowworks.com',
    subject: `Machine Read request: ${website}`,
    text: [
      'MACHINE READ REQUEST',
      '─────────────────────────────',
      `Name:     ${name}`,
      `Business: ${businessName}`,
      `Website:  ${website}`,
      '',
      'What made you look us up:',
      challenge,
      '',
      '─────────────────────────────',
      `Submitted: ${timestamp} PT`,
    ].join('\n'),
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
