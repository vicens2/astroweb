import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Definir tipo para los datos del formulario
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const post: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') !== 'application/json') {
    return new Response(
      JSON.stringify({ message: 'Content-Type must be application/json' }),
      { status: 400 }
    );
  }

  try {
    const body = await request.json() as ContactFormData;
    const { name, email, phone, message } = body;

    // Validar campos requeridos
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Por favor, complete todos los campos requeridos' }),
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ message: 'Por favor, ingrese un email válido' }),
        { status: 400 }
      );
    }

    // Inicializar Resend con la clave de API
    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    // Enviar email usando Resend
    const data = await resend.emails.send({
      from: 'Formulario de Contacto <onboarding@resend.dev>',
      to: import.meta.env.PUBLIC_CONTACT_EMAIL || 'flashmephotocall@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone || 'No proporcionado'}
        Mensaje: ${message}
      `,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Mensaje enviado correctamente',
        data 
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.' 
      }),
      { status: 500 }
    );
  }
};