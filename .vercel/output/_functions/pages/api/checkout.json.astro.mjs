import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resend = new Resend("re_LN8wSRJH_6pxa6T4CigMdF7DXwWDjUfZ4");
const POST = async ({ request }) => {
  console.log("POST /api/checkout received");
  try {
    console.log("Starting to process checkout request");
    console.log("Request URL:", request.url);
    console.log("Request method:", request.method);
    console.log("Request headers:", Object.fromEntries(request.headers.entries()));
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const errorMsg = `Invalid content type: ${contentType}`;
      console.error(errorMsg);
      return new Response(
        JSON.stringify({ success: false, error: "Content-Type must be application/json" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    let data;
    try {
      data = await request.json();
      console.log("Request body parsed successfully:", JSON.stringify(data, null, 2));
    } catch (parseError) {
      const errorMsg = `Error parsing request body: ${parseError.message}`;
      console.error(errorMsg);
      return new Response(
        JSON.stringify({ success: false, error: "Invalid JSON in request body" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const requiredFields = ["name", "email", "phone", "eventDate", "timeSlot", "startTime", "location"];
    const missingFields = requiredFields.filter((field) => !data[field]);
    if (missingFields.length > 0) {
      return new Response(
        JSON.stringify({
          error: `Faltan campos obligatorios: ${missingFields.join(", ")}`
        }),
        { status: 400 }
      );
    }
    const cartItemsHtml = data.cart.map((item) => {
      const price = String(item.price);
      let itemDetails = `
        <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
          <h3 style="margin: 0 0 5px 0; color: #1a365d;">${item.name}</h3>
          <p style="margin: 5px 0; color: #4a5568;">Precio: ${price}€</p>
      `;
      if (item.customization) {
        itemDetails += `
          <div style="margin-top: 10px; padding-left: 10px; border-left: 3px solid #4299e1;">
            <p style="margin: 5px 0; color: #4a5568;"><strong>Personalización:</strong></p>
        `;
        if (item.customization.color) {
          itemDetails += `<p style="margin: 5px 0; color: #4a5568;">Color: ${item.customization.color}</p>`;
        }
        if (item.customization.text) {
          itemDetails += `<p style="margin: 5px 0; color: #4a5568;">Texto: ${item.customization.text}</p>`;
        }
        if (item.customization.date) {
          itemDetails += `<p style="margin: 5px 0; color: #4a5568;">Fecha: ${item.customization.date}</p>`;
        }
        itemDetails += `</div>`;
      }
      itemDetails += `</div>`;
      return itemDetails;
    }).join("");
    const totalPrice = data.cart.reduce((sum, item) => {
      return sum + (parseFloat(item.price) || 0);
    }, 0);
    const formattedDate = new Date(data.eventDate).toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    console.log("Resend API Key:", "re_LN8wSRJH_6pxa6T4CigMdF7DXwWDjUfZ4" ? "***" : "NOT FOUND");
    console.log("Contact Email:", "flashmephotocall@gmail.com");
    const serviceHours = {};
    data.cart.forEach((item) => {
      if (item.name.toLowerCase().includes("fotomatón") || item.name.toLowerCase().includes("fotomaton")) {
        serviceHours["fotomatones"] = (serviceHours["fotomatones"] || 0) + (parseInt(item.hours) || 0);
      } else if (item.name.toLowerCase().includes("360") || item.name.toLowerCase().includes("plataforma")) {
        serviceHours["plataformas360"] = (serviceHours["plataformas360"] || 0) + (parseInt(item.hours) || 0);
      }
    });
    const emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a202c;">
          <h1 style="color: #2d3748; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Nueva solicitud de presupuesto</h1>
          
          <h2 style="color: #2d3748; margin-top: 25px; margin-bottom: 15px;">Información del contacto</h2>
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Teléfono:</strong> ${data.phone}</p>
          
          <h2 style="color: #2d3748; margin-top: 25px; margin-bottom: 15px;">Detalles del evento</h2>
          <p><strong>Fecha del evento:</strong> ${formattedDate} (${data.timeSlot})</p>
          <p><strong>Hora de inicio:</strong> ${data.startTime}</p>
          <p><strong>Lugar del evento:</strong> ${data.location}</p>
          
          ${serviceHours["fotomatones"] ? `<p><strong>Horas de fotomatón:</strong> ${serviceHours["fotomatones"]} horas</p>` : ""}
          ${serviceHours["plataformas360"] ? `<p><strong>Horas de plataforma 360°:</strong> ${serviceHours["plataformas360"]} horas</p>` : ""}
          
          ${data.notes ? `<p><strong>Notas adicionales:</strong> ${data.notes}</p>` : ""}
          
          <h2 style="color: #2d3748; margin-top: 25px; margin-bottom: 15px;">Resumen del pedido</h2>
          ${cartItemsHtml}
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 4px; border-left: 4px solid #4299e1;">
            <h3 style="margin: 0 0 10px 0; color: #2d3748;">Resumen de personalizaciones</h3>
            ${data.cart.some((item) => item.customization) ? data.cart.filter((item) => item.customization).map((item) => `
                  <div style="margin-bottom: 10px; padding: 10px; background: white; border-radius: 4px; border: 1px solid #e2e8f0;">
                    <strong>${item.name}:</strong><br>
                    ${item.customization?.color ? `<span style="display: inline-block; width: 15px; height: 15px; background-color: ${item.customization.color}; border: 1px solid #ddd; margin-right: 5px; vertical-align: middle;"></span> ${item.customization.color}<br>` : ""}
                    ${item.customization?.text ? `<strong>Texto:</strong> ${item.customization.text}<br>` : ""}
                    ${item.customization?.date ? `<strong>Fecha para el álbum:</strong> ${item.customization.date}` : ""}
                  </div>
                `).join("") : "<p>No se han especificado personalizaciones adicionales.</p>"}
          </div>
          
          <div style="margin-top: 20px; padding-top: 15px; border-top: 2px solid #e2e8f0; font-weight: bold; font-size: 1.1em; text-align: right;">
            Total: ${totalPrice.toFixed(2)}€
          </div>
          
          <p style="margin-top: 30px; color: #718096; font-size: 0.9em; border-top: 1px solid #e2e8f0; padding-top: 15px;">
            Este correo ha sido generado automáticamente desde el formulario de contacto de Vaya Panorama.
          </p>
        </div>
      `;
    console.log("Sending email with Resend...");
    const { data: emailData, error } = await resend.emails.send({
      from: "Vaya Panorama <onboarding@resend.dev>",
      to: "flashmephotocall@gmail.com",
      subject: `Nueva solicitud de presupuesto de ${data.name}`,
      html: emailContent,
      reply_to: data.email
    });
    if (error) {
      console.error("Error sending email:", error);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Error al enviar el correo. Por favor, inténtalo de nuevo más tarde."
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    console.log("Email sent successfully:", emailData);
    return new Response(
      JSON.stringify({
        success: true,
        message: "¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto."
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    const errorMsg = error instanceof Error ? `${error.message}
${error.stack || "No stack trace"}` : String(error);
    console.error("Error processing checkout:", errorMsg);
    if (error instanceof Error && "response" in error) {
      console.error("Error response:", error.response);
    }
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.",
        details: process.env.NODE_ENV === "development" ? errorMsg : void 0
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
