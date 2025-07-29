import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { $ as $$Terms$1 } from '../../chunks/Terms_CkVM5Rro.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DrzkISKV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://mintaka.co");
const $$Terms = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Terms;
  const seo = {
    title: "Terms of Service - Majestico Studio: Understand Our Terms",
    description: "Read the Terms of Service for Majestico Studio. Learn about our guidelines and your responsibilities when using our web design and SEO services.",
    canonical: "https://mintaka.co/it/terms/"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TermsPage", $$Terms$1, {})} ` })}`;
}, "C:/Users/vicens.juan/astroweb/src/pages/it/terms.astro", void 0);

const $$file = "C:/Users/vicens.juan/astroweb/src/pages/it/terms.astro";
const $$url = "/it/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Terms,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
