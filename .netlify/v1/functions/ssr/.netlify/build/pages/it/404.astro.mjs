import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { $ as $$Error404 } from '../../chunks/Error404_BNL0MGDx.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BqqEIV9L.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://mintaka.co");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const seo = {
    title: "404 Error: Page Not Found - Majestico Studio",
    description: "Oops! The page you're looking for doesn't exist. Navigate back to Majestico Studio's homepage for our full range of web design and SEO services.",
    canonical: "https://mintaka.co/it/404/"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Error404", $$Error404, {})} ` })}`;
}, "C:/Users/vicens.juan/astroweb/src/pages/it/404.astro", void 0);

const $$file = "C:/Users/vicens.juan/astroweb/src/pages/it/404.astro";
const $$url = "/it/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
