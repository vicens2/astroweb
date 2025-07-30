import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function post({ request }) {
  try {
    const { to, subject, html } = await request.json();
    
    const { data, error } = await resend.emails.send({
      from: 'Your Name <your-email@your-domain.com>',
      to,
      subject,
      html,
    });
    
    if (error) {
      return new Response(JSON.stringify({ error }), { status: 400 });
    }
    
    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}