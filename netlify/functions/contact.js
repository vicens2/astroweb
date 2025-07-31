const { Resend } = require('resend');

// Initialize Resend with API key from environment variables
const resendApiKey = process.env.RESEND_API_KEY || process.env.RESEND_API_KEY_DEV;

if (!resendApiKey) {
  console.error('ERROR: RESEND_API_KEY is not set in environment variables');
}

const resend = new Resend(resendApiKey);

// Log function start
console.log('Contact function initialized');

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
    const from = 'onboarding@resend.dev'; // Must be a verified domain in Resend
    const to = 'flashmephotocall@gmail.com'; // Your email
    const subject = `Nuevo mensaje de contacto de ${name}`;
    
    const emailContent = `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `;

    console.log('Attempting to send email...');
    console.log('From:', from);
    console.log('To:', to);
    console.log('Subject:', subject);
    
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html: emailContent
    });

    if (error) {
      console.error('Resend API Error:', error);
      throw new Error(`Error al enviar el correo: ${error.message}`);
    }

    console.log('Email sent successfully:', data);

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
    
    // Log the full error for debugging
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    }
    
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