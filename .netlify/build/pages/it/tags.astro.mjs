import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { $ as $$Tags } from '../../chunks/Tags_CpW0y90M.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DrzkISKV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://mintaka.co");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const seo = {
    title: "Tags - Explore Topics at Majestico Studio",
    description: "Browse through the diverse range of tags at Majestico Studio to find articles and insights tailored to your interests in web design and SEO.",
    canonical: "https://mintaka.co/it/tags/"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Tags", $$Tags, {})} ` })}`;
}, "C:/Users/vicens.juan/astroweb/src/pages/it/tags/index.astro", void 0);

const $$file = "C:/Users/vicens.juan/astroweb/src/pages/it/tags/index.astro";
const $$url = "/it/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
