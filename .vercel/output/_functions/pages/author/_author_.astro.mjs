import { b as createAstro, c as createComponent, d as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CjInFqaA.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_C4Uzchnq.mjs';
import { $ as $$Author } from '../../chunks/Author_DrCW6DCy.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_u9md5EvE.mjs';
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
