import { c as createAstro, a as createComponent, m as maybeRenderHead, d as renderScript, e as addAttribute, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, u as useTranslations, a as useTranslatedPath, $ as $$BaseLayout } from '../chunks/BaseLayout_DrzkISKV.mjs';
import { $ as $$Hero, b as $$Tagline, a as $$WorkPreview } from '../chunks/WorkPreview_C6eTX97C.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://mintaka.co");
const $$Catalog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Catalog;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const catalogItems = [
    {
      id: "fotomatones",
      title: t("catalog.items.photobooth.title"),
      description: t("catalog.items.photobooth.description"),
      image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=800&auto=format&fit=crop",
      price: "Desde 299"
    },
    {
      id: "plataformas360",
      title: t("catalog.items.platform360.title"),
      description: t("catalog.items.platform360.description"),
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215a4c?w=800&auto=format&fit=crop",
      price: "Desde 499"
    },
    {
      id: "video",
      title: t("catalog.items.video.title"),
      description: t("catalog.items.video.description"),
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop",
      price: "Desde 799"
    },
    {
      id: "photography",
      title: t("catalog.items.photography.title"),
      description: t("catalog.items.photography.description"),
      image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&auto=format&fit=crop",
      price: "Desde 599"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="catalog" class="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white lg:py-28" data-astro-cid-325pafqb> <!-- Background pattern --> <div class="absolute inset-0 -z-10" data-astro-cid-325pafqb> <div class="absolute inset-0 bg-[url('/images/patterns/grid.svg')] bg-[length:40px_40px] opacity-10" data-astro-cid-325pafqb></div> <div class="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80" data-astro-cid-325pafqb></div> </div> <!-- Decorative elements --> <div class="absolute -top-24 -right-24 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" data-astro-cid-325pafqb></div> <div class="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" data-astro-cid-325pafqb></div> <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" data-astro-cid-325pafqb> <!-- Section header --> <div class="max-w-3xl mx-auto text-center mb-16" data-astro-cid-325pafqb> <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl" data-astro-cid-325pafqb> <span class="block" data-astro-cid-325pafqb>${t("catalog.title")}</span> </h2> <p class="max-w-2xl mx-auto mt-4 text-xl text-gray-600" data-astro-cid-325pafqb> ${t("catalog.subtitle")} </p> <div class="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-blue-500 to-purple-600" data-astro-cid-325pafqb></div> </div> <!-- Catalog grid --> <div class="grid max-w-6xl grid-cols-1 gap-8 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-2 lg:gap-12" data-astro-cid-325pafqb> ${catalogItems.map((item, index) => renderTemplate`<div class="group relative flex flex-col h-full overflow-hidden transition-all duration-300 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:-translate-y-1" data-cursor-hover data-cursor-parallax data-astro-cid-325pafqb>  <div class="relative h-64 overflow-hidden" data-astro-cid-325pafqb> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" loading="lazy" data-astro-cid-325pafqb>  <div class="absolute top-4 right-4" data-astro-cid-325pafqb> <span class="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg" data-astro-cid-325pafqb> ${item.price}€
</span> </div> </div>  <div class="flex flex-col flex-1 p-6" data-astro-cid-325pafqb> <div class="flex-1" data-astro-cid-325pafqb> <h3 class="text-2xl font-bold text-gray-900" data-astro-cid-325pafqb>${item.title}</h3> <div class="w-12 h-1 my-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" data-astro-cid-325pafqb></div> <p class="mt-2 text-gray-600" data-astro-cid-325pafqb>${item.description}</p> </div> <div class="mt-6" data-astro-cid-325pafqb> <a${addAttribute(`/catalog?category=${item.id}`, "href")} class="inline-flex items-center text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-800" data-astro-cid-325pafqb>
Accede al catálogo
<svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-325pafqb> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-astro-cid-325pafqb></path> </svg> </a> </div> </div> </div>`)} </div>  <div class="mt-16 text-center" data-astro-cid-325pafqb> <a href="/catalog" class="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all bg-blue-600 border border-transparent rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-astro-cid-325pafqb>
Ver catálogo completo
<svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-325pafqb> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-325pafqb></path> </svg> </a> </div> </div> </section> <!-- Cargar GSAP desde CDN --> ${renderScript($$result, "C:/Users/vicens.juan/astroweb/src/components/landing/Catalog.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/vicens.juan/astroweb/src/components/landing/Catalog.astro", void 0);

const $$Astro$2 = createAstro("https://mintaka.co");
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const { class: className } = Astro2.props;
  return renderTemplate`<!-- Popup de notificación -->${maybeRenderHead()}<div id="notificationPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden"> <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4"> <div id="notificationIcon" class="text-4xl mb-4 text-center"> <!-- Ícono de éxito (se mostrará por defecto) --> <div class="success-icon hidden"> <svg class="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <!-- Ícono de error --> <div class="error-icon hidden"> <svg class="w-16 h-16 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </div> </div> <h3 id="notificationTitle" class="text-xl font-bold text-gray-900 mb-2 text-center">¡Éxito!</h3> <p id="notificationMessage" class="text-gray-700 mb-6 text-center">Tu mensaje ha sido enviado correctamente.</p> <button id="closeNotification" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
Aceptar
</button> </div> </div> <div id="contact" class="w-full bg-zinc-900 py-20" style="position: relative; z-index: 10;"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <div class="text-center max-w-4xl mx-auto"> <h2 class="text-4xl font-bold text-white mb-4">Contáctanos</h2> <p class="text-lg text-zinc-300 mb-12">
¿Tienes alguna pregunta? Envíanos un mensaje y te responderemos lo antes posible.
</p> </div> <div style="max-width: 42rem; margin: 0 auto;"> <form id="contactForm"> <div style="margin-bottom: 1.5rem;"> <label for="fullname" style="display: block; margin-bottom: 0.5rem; color: #e5e7eb;">Nombre completo *</label> <input type="text" id="fullname" name="fullname" required style="width: 100%; padding: 0.75rem; background-color: rgba(255, 255, 255, 0.05); border: 1px solid #374151; border-radius: 0.5rem; color: white;"> </div> <div style="margin-bottom: 1.5rem;"> <label for="email" style="display: block; margin-bottom: 0.5rem; color: #e5e7eb;">Email *</label> <input type="email" id="email" name="email" required style="width: 100%; padding: 0.75rem; background-color: rgba(255, 255, 255, 0.05); border: 1px solid #374151; border-radius: 0.5rem; color: white;"> </div> <div style="margin-bottom: 1.5rem;"> <label for="phone" style="display: block; margin-bottom: 0.5rem; color: #e5e7eb;">Teléfono *</label> <input type="tel" id="phone" name="phone" required placeholder="+34 123 456 789" style="width: 100%; padding: 0.75rem; background-color: rgba(255, 255, 255, 0.05); border: 1px solid #374151; border-radius: 0.5rem; color: white;"> </div> <div style="margin-bottom: 1.5rem;"> <label for="message" style="display: block; margin-bottom: 0.5rem; color: #e5e7eb;">Mensaje *</label> <textarea id="message" name="message" rows="5" required style="width: 100%; padding: 0.75rem; background-color: rgba(255, 255, 255, 0.05); border: 1px solid #374151; border-radius: 0.5rem; color: white;"></textarea> </div> <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1rem;"> <p style="font-size: 0.875rem; color: #9ca3af;">* Campos obligatorios</p> <button type="submit" id="submitButton" style="padding: 0.75rem 1.5rem; background-color: #ffffff; color: #1f2937; font-weight: 500; border-radius: 0.5rem; border: none; cursor: pointer;" class="hover:bg-gray-100 transition-colors">
Enviar mensaje
</button> </div> </form> </div> </div> ${renderScript($$result, "C:/Users/vicens.juan/astroweb/src/components/landing/ContactForm.astro?astro&type=script&index=0&lang.ts")} </div>`;
}, "C:/Users/vicens.juan/astroweb/src/components/landing/ContactForm.astro", void 0);

const $$Astro$1 = createAstro("https://mintaka.co");
const $$ServicioCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServicioCard;
  const lang = getLangFromUrl(Astro2.url);
  const translatePath = useTranslatedPath(lang);
  const { image, title, description, link, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["flex flex-col", className], "class:list")}> <a${addAttribute(translatePath(link), "href")} class="group block overflow-hidden"${addAttribute(`Servicio ${title}`, "aria-label")}> <div class="relative h-[25rem] overflow-hidden rounded-md lg:rounded-lg"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"${addAttribute(800, "width")}${addAttribute(600, "height")} loading="lazy"> <div class="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div> </div> </a> <div class="px-2 py-8"> <a${addAttribute(translatePath(link), "href")} class="flex items-center justify-between text-base font-medium lg:gap-x-8 group-hover:text-primary-600 transition-colors"> <h3 class="font-mono text-lg font-medium uppercase tracking-wide md:mt-0 lg:text-xl"> ${title} </h3> <span class="text-right text-base text-slate-500 group-hover:text-primary-600 transition-colors"> <span class="hidden lg:inline-block">Ver más</span> <span class="sr-only">${title}</span> &nbsp; &rarr;
</span> </a> ${description && renderTemplate`<p class="mt-4 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">${description}</p>`} </div> </li>  ${renderScript($$result, "C:/Users/vicens.juan/astroweb/src/components/work/ServicioCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/vicens.juan/astroweb/src/components/work/ServicioCard.astro", void 0);

const $$Astro = createAstro("https://mintaka.co");
const $$ServiciosPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiciosPreview;
  getLangFromUrl(Astro2.url);
  const { class: className } = Astro2.props;
  const services = [
    {
      title: "Celebraciones Familiares",
      description: "Bodas, bautizos, comuniones y aniversarios: inmortaliza los momentos m\xE1s \xEDntimos y emotivos junto a tu familia.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/servicios/bodas"
    },
    {
      title: "Eventos corporativos",
      description: "Fiestas de empresa, lanzamientos de producto, congresos y jornadas de team building: aporta un toque profesional y din\xE1mico a cualquier encuentro de negocios.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/servicios/empresarial"
    },
    {
      title: "Reuniones y Fiestas Sociales",
      description: "Cumplea\xF1os, despedidas de soltero/a, graduaciones y reuniones de amigos: diversi\xF3n garantizada con recuerdos inmediatos para compartir al instante.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/servicios/eventos"
    },
    {
      title: "Eventos Culturales y Comunitarios",
      description: "Festivales, conciertos, ferias y galas ben\xE9ficas: crea experiencias interactivas y memorables que conecten con el p\xFAblico y amplifiquen tu mensaje.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      link: "/servicios/sesiones"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="servicios"${addAttribute(["section servicios-preview-section home-dark-section py-12", className], "class:list")}> <div class="col-span-12 col-start-1 mx-auto max-w-7xl"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-bold mb-4 text-black">Servicios y tipos de eventos</h2> <p class="text-xl text-black max-w-2xl mx-auto">Abarcamos todo tipo de eventos. Nos adaptamos a tus necesidades para que no te tegas que preocupar de nada, solo de disfrutar de tu evento.</p> </div> <ol class="grid grid-cols-1 gap-24 md:grid-cols-2 lg:gap-44"> ${services.map((service, index) => renderTemplate`${renderComponent($$result, "ServicioCard", $$ServicioCard, { "image": service.image, "title": service.title, "description": service.description, "link": service.link, "class": index % 2 === 0 ? `md:col-start-1 md:row-start-${Math.floor(index / 2) * 2 + 1} md:row-span-2` : `md:col-start-2 md:row-start-${Math.floor(index / 2) * 2 + 2} md:row-span-2` })}`)} </ol> </div> </section>  ${renderScript($$result, "C:/Users/vicens.juan/astroweb/src/components/landing/ServiciosPreview.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/vicens.juan/astroweb/src/components/landing/ServiciosPreview.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "showCart": false }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "ServiciosPreview", $$ServiciosPreview, { "class": "py-20" })} ${renderComponent($$result2, "Tagline", $$Tagline, {})}  ${renderComponent($$result2, "Catalog", $$Catalog, { "class": "py-20" })} ${renderComponent($$result2, "WorkPreview", $$WorkPreview, { "class": "!pt-20 pb-20 lg:!pt-36 lg:pb-40" })} ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} ` })}`;
}, "C:/Users/vicens.juan/astroweb/src/pages/index.astro", void 0);

const $$file = "C:/Users/vicens.juan/astroweb/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
