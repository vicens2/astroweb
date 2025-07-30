/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqqEIV9L.mjs';
import { $ as $$ThankYou$1 } from '../chunks/ThankYou_CPj6Wdu7.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://mintaka.co");
const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThankYou;
  const seo = {
    title: "Thank You - Majestico Studio: Email Successfully Sent",
    description: "Thank you for reaching out to Majestico Studio! Your email has been successfully sent. We appreciate your interest and will respond promptly.",
    canonical: "https://mintaka.co/thank-you/"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Thanks", $$ThankYou$1, {})} ` })}`;
}, "C:/Users/vicens.juan/astroweb/src/pages/thank-you.astro", void 0);

const $$file = "C:/Users/vicens.juan/astroweb/src/pages/thank-you.astro";
const $$url = "/thank-you/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ThankYou,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
