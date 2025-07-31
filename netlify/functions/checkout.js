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
    const { name, email, phone, eventDate, timeSlot, startTime, location, notes, cartItems } = formData;

    // Basic validation
    if (!name || !email || !phone || !eventDate || !timeSlot || !startTime || !location) {
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
            ${item.customization ? `<p>Personalización: ${JSON.stringify(item.customization, null, 2)}</p>` : ''}
          </div>
        `).join('')
      : '<p>No hay artículos en el carrito</p>';

    // Email configuration
    const from = 'onboarding@resend.dev'; // Must be a verified domain in Resend
    const to = 'flashmephotocall@gmail.com'; // Your email
    const subject = `Nueva solicitud de reserva - ${name}`;
    
    const emailContent = `
      <h2>Nueva solicitud de reserva</h2>
      <h3>Información del cliente:</h3>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      
      <h3>Detalles del evento:</h3>
      <p><strong>Fecha:</strong> ${eventDate}</p>
      <p><strong>Franja horaria:</strong> ${timeSlot}</p>
      <p><strong>Hora de inicio:</strong> ${startTime}</p>
      <p><strong>Ubicación:</strong> ${location}</p>
      ${notes ? `<p><strong>Notas adicionales:</strong> ${notes}</p>` : ''}
      
      <h3>Artículos seleccionados:</h3>
      ${cartItemsHtml}
      
      <p style="margin-top: 20px; font-size: 0.9em; color: #666;">
        Este es un mensaje automático. Por favor, no responda a este correo.
      </p>
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
