import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'ssaurabh@docustack.ai',
        subject: `CredStack Website - Contact Us`,
        html: `<p><strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Subject:</strong> ${subject}<br/><strong>Message:</strong> ${message}</p>`
      }),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.ok ? 200 : 400 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send email', details: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}
