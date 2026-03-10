import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, businessName, website, challenge } = await req.json();

  if (!name || !businessName || !challenge) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'KodeCite.AI Contact <contact@kodesite.com>',
    to: 'mark@kodesite.com',
    subject: `New contact from ${name} — ${businessName}`,
    text: `Name: ${name}\nBusiness: ${businessName}\nWebsite: ${website || 'Not provided'}\n\nChallenge:\n${challenge}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Business:</strong> ${businessName}</p>
      <p><strong>Website:</strong> ${website || 'Not provided'}</p>
      <hr />
      <p><strong>Challenge:</strong></p>
      <p>${challenge.replace(/\n/g, '<br />')}</p>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
