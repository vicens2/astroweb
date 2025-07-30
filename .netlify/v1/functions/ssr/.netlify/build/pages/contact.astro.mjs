/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { $ as $$Contact$1 } from '../chunks/Contact_8UMkMnzO.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqqEIV9L.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://mintaka.co");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const seo = {
    title: "Contact Majestico Studio: Get in Touch for Innovative Web Solutions",
    description: "Reach out to Majestico Studio for expert web design and SEO services. Connect with us to discuss your project and explore cutting-edge web solutions.",
    canonical: "https://mintaka.co/contact/"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Contact", $$Contact$1, {})} ` })}`;
}, "C:/Users/vicens.juan/astroweb/src/pages/contact.astro", void 0);

const $$file = "C:/Users/vicens.juan/astroweb/src/pages/contact.astro";
const $$url = "/contact/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
