const { Resend } = require('resend');

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    };
  }

  try {
    // Parse the form data
    const { name, email, phone, message } = JSON.parse(event.body);

    // Basic validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          message: 'Por favor, completa todos los campos obligatorios.' 
        }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      };
    }

    // Email configuration
    const from = 'Tu Nombre <onboarding@resend.dev>'; // Update with your verified sender email
    const to = 'tu-email@ejemplo.com'; // Update with your email
    const subject = `Nuevo mensaje de contacto de ${name}`;
    
    const emailContent = `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html: emailContent
    });

    if (error) {
      console.error('Error sending email:', error);
      throw new Error('Error al enviar el correo electrónico');
    }

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.' 
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };

  } catch (error) {
    console.error('Error processing form:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: error.message || 'Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.' 
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
  }
};