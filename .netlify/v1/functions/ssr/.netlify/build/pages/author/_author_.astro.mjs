import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BNi-NYdj.mjs';
import { $ as $$Author } from '../../chunks/Author_Fbihvznf.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DrzkISKV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://mintaka.co");
async function getStaticPaths() {
  const authors = await getCollection("authors");
  return authors.map((entry) => {
    const [lang, ...slug] = entry.slug.split("/");
    return { params: { lang, author: slug.join("/") || void 0 }, props: entry };
  }).filter((entry) => entry.params.lang === "en");
}
const $$author = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$author;
  const author = Astro2.props;
  const seo = {
    title: author.data.name,
    description: author.data.description,
    canonical: `https://mintaka.co/author/${author.slug}/`
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Author", $$Author, { "author": author })} ` })}`;
}, "C:/Users/vicens.juan/astroweb/src/pages/author/[author].astro", void 0);

const $$file = "C:/Users/vicens.juan/astroweb/src/pages/author/[author].astro";
const $$url = "/author/[author]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$author,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
