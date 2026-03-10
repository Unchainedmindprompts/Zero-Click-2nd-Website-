import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, businessName, website, challenge } = await req.json();

  if (!name || !businessName || !challenge) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'mark@kodecite.ai',
      subject: `New contact from ${name} — ${businessName}`,
      text: `Name: ${name}\nBusiness: ${businessName}\nWebsite: ${website || 'Not provided'}\n\nChallenge:\n${challenge}`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
