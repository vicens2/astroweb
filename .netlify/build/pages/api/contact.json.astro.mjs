import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({ message: "Método no permitido" }),
      { status: 405, headers: { "Content-Type": "application/json" } }
    );
  }
  if (request.headers.get("Content-Type") !== "application/json") {
    return new Response(
      JSON.stringify({ message: "Content-Type debe ser application/json" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "JSON inválido" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  const { name, email, phone, message } = body;
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: "Por favor, complete todos los campos requeridos" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ message: "Por favor, ingrese un email válido" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  try {
    const apiKey = "re_LN8wSRJH_6pxa6T4CigMdF7DXwWDjUfZ4";
    const contactEmail = "flashmephotocall@gmail.com";
    console.log("Resend API Key:", apiKey ? "*** (presente)" : "No encontrada");
    console.log("Contact Email:", contactEmail);
    if (!apiKey) ;
    const resend = new Resend(apiKey);
    console.log("Enviando email a:", contactEmail);
    const emailData = {
      from: "Formulario de Contacto <onboarding@resend.dev>",
      to: contactEmail,
      subject: `Nuevo mensaje de ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone || "No proporcionado"}
        Mensaje: ${message}
      `,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
    };
    console.log("Datos del email preparados:", JSON.stringify(emailData, null, 2));
    const data = await resend.emails.send(emailData);
    console.log("Respuesta de Resend:", JSON.stringify(data, null, 2));
    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado correctamente",
        data
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      }
    );
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
    let errorMessage = "Error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.";
    let statusCode = 500;
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        errorMessage = "Error de configuración: La clave de API de Resend no es válida o no está configurada correctamente.";
        statusCode = 500;
      } else if (error.message.includes("from")) {
        errorMessage = "Error de configuración: La dirección de correo electrónico del remitente no está configurada correctamente.";
        statusCode = 500;
      } else if (error.message.includes("to")) {
        errorMessage = "Error de configuración: La dirección de correo electrónico del destinatario no está configurada correctamente.";
        statusCode = 500;
      } else {
        errorMessage = `Error: ${error.message}`;
      }
    }
    return new Response(
      JSON.stringify({
        success: false,
        message: errorMessage,
        error: error instanceof Error ? error.message : "Error desconocido"
      }),
      {
        status: statusCode,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      }
    );
  }
};
const OPTIONS = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  OPTIONS,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
