import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_V5qA8L8X.mjs';
import { $ as $$Authors } from '../chunks/Authors_CUBsJIUb.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqqEIV9L.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://mintaka.co");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  await getCollection("authors");
  const seo = {
    title: "Authors - Majestico Studio: Meet Our Expert Team",
    description: "Discover the creative minds behind Majestico Studio. Our authors are industry experts in web design, SEO, and digital marketing, sharing valuable insights.",
    canonical: "https://mintaka.co/author/"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Authors", $$Authors, {})} ` })}`;
}, "C:/Users/vicens.juan/astroweb/src/pages/author/index.astro", void 0);

const $$file = "C:/Users/vicens.juan/astroweb/src/pages/author/index.astro";
const $$url = "/author";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
