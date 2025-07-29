import { b as createAstro, c as createComponent, d as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CjInFqaA.mjs';
import 'kleur/colors';
import { $ as $$Privacy$1 } from '../../chunks/Privacy_DwdUJ4o2.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_u9md5EvE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://mintaka.co");
const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Privacy;
  const seo = {
    title: "Privacy Policy - Majestico Studio: Your Privacy Matters",
    description: "Our Privacy Policy outlines how Majestico Studio protects your personal information. Discover our commitment to your privacy and data security.",
    canonical: "https://mintaka.co/it/privacy/"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PrivacyPage", $$Privacy$1, {})} ` })}`;
}, "C:/Users/vicens.juan/astroweb/src/pages/it/privacy.astro", void 0);

const $$file = "C:/Users/vicens.juan/astroweb/src/pages/it/privacy.astro";
const $$url = "/it/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Privacy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
