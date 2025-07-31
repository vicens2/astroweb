const { Resend } = require('resend');

// Initialize Resend with API key from environment variables
const resendApiKey = process.env.RESEND_API_KEY || process.env.RESEND_API_KEY_DEV;

if (!resendApiKey) {
  console.error('ERROR: RESEND_API_KEY is not set in environment variables');
}

const resend = new Resend(resendApiKey);

// Log function start
console.log('Checkout function initialized');

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
    const formData = JSON.parse(event.body);
    const { name, email, phone, eventDate, startTime, location, notes, cartItems } = formData;

    // Basic validation
    if (!name || !email || !phone || !eventDate || !startTime || !location) {
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

    // Format cart items for email
    const cartItemsHtml = cartItems && cartItems.length > 0 
      ? cartItems.map(item => `
          <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
            <p><strong>${item.name}</strong></p>
            <p>Cantidad: ${item.quantity || 1}</p>
            <p>Precio: ${item.price ? `${item.price}€` : 'Consultar'}</p>
            ${item.hours ? `<p>Horas de contratación: ${item.hours}</p>` : ''}
            ${item.customization ? `<p>Personalización: ${JSON.stringify(item.customization, null, 2)}</p>` : ''}
          </div>
        `).join('')
      : '<p>No hay artículos en el carrito</p>';

    // Email configuration
    const from = 'onboarding@resend.dev'; // Must be a verified domain in Resend
    const to = 'flashmephotocall@gmail.com'; // Your email
    const subject = `Nueva solicitud de reserva - ${name}`;
    
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #1a365d; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Nueva solicitud de reserva</h2>
        
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <h3 style="color: #2d3748; margin-top: 0;">Información del cliente:</h3>
          <p style="margin: 5px 0;"><strong>Nombre:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 5px 0 15px 0;"><strong>Teléfono:</strong> ${phone}</p>
          
          <h3 style="color: #2d3748; margin: 20px 0 10px 0;">Detalles del evento:</h3>
          <p style="margin: 5px 0;"><strong>Fecha:</strong> ${eventDate}</p>
          <p style="margin: 5px 0 15px 0;"><strong>Hora de inicio:</strong> ${startTime}</p>
          <p style="margin: 5px 0 5px 0;"><strong>Ubicación:</strong> ${location}</p>
          
          ${notes ? `
            <div style="margin: 15px 0 15px 0; background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #4299e1;">
              <p style="margin: 0 0 5px 0; font-weight: bold;">Notas adicionales:</p>
              <div style="white-space: pre-wrap; word-wrap: break-word; line-height: 1.5;">${notes.replace(/\n/g, '<br>')}</div>
            </div>
          ` : ''}
        </div>
        
        <div style="margin-top: 20px;">
          <h3 style="color: #2d3748; margin-bottom: 10px;">Artículos seleccionados:</h3>
          ${cartItemsHtml}
        </div>
        
        <p style="margin-top: 30px; font-size: 0.9em; color: #718096; border-top: 1px solid #e2e8f0; padding-top: 15px;">
          Este es un mensaje automático. Por favor, no responda a este correo.
        </p>
      </div>
    `;

    console.log('Attempting to send checkout email...');
    
    // Send email using Resend
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

    console.log('Checkout email sent successfully:', data);

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: '¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.' 
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };

  } catch (error) {
    console.error('Error processing checkout form:', error);
    
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
