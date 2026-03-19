import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, from_page = 'default' } = await request.json();
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
        from: 'onboarding@credstack.ai',
        to: 'ssaurabh@credstack.ai',
        subject: `CredStack Website - ${from_page}`,
        html: `<p><strong>From Page:</strong> ${from_page}<br/><p><strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Subject:</strong> ${subject}<br/><strong>Message:</strong> ${message}</p>`
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API error details:', {
        status: response.status,
        statusText: response.statusText,
        data,
      });
    }

    return NextResponse.json(data, { status: response.ok ? 200 : 400 });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Failed to send email', details: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}
