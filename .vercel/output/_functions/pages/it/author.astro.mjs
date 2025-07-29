import { b as createAstro, c as createComponent, d as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CjInFqaA.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_C4Uzchnq.mjs';
import { $ as $$Authors } from '../../chunks/Authors_BdqjlzvB.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_u9md5EvE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://mintaka.co");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  await getCollection("authors");
  const seo = {
    title: "Authors - Majestico Studio: Meet Our Expert Team",
    description: "Discover the creative minds behind Majestico Studio. Our authors are industry experts in web design, SEO, and digital marketing, sharing valuable insights.",
    canonical: "https://mintaka.co/it/author/"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Authors", $$Authors, {})} ` })}`;
}, "C:/Users/vicens.juan/astroweb/src/pages/it/author/index.astro", void 0);

const $$file = "C:/Users/vicens.juan/astroweb/src/pages/it/author/index.astro";
const $$url = "/it/author";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
