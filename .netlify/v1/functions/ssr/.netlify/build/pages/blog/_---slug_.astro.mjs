import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_V5qA8L8X.mjs';
import { $ as $$MarkdownPostLayout } from '../../chunks/MarkdownPostLayout_CaHA7W2t.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://mintaka.co");
async function getStaticPaths() {
  const blogEntries = await getCollection("posts");
  return blogEntries.map((entry) => {
    const [lang, ...slug] = entry.slug.split("/");
    return { params: { lang, slug: slug.join("/") || void 0 }, props: entry };
  }).filter((entry) => entry.params.lang === "en");
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const entry = Astro2.props;
  const { Content } = await entry.render();
  const seo = {
    title: entry.data.title,
    description: entry.data.description,
    canonical: `https://mintaka.co/blog/${entry.slug}/`,
    openGraph: {
      url: entry.slug,
      title: entry.data.title,
      description: "{frontmatter.description}",
      images: [
        {
          url: "https://mintaka.co/opengraph/social-og.jpg",
          width: 1200,
          height: 630,
          alt: "Social open graph",
          type: "image/jpeg"
        },
        {
          url: "https://mintaka.co/opengraph/twitter-og.jpg",
          width: 4096,
          height: 4096,
          alt: "Twitter open graph",
          type: "image/jpeg"
        },
        { url: "https://mintaka.co/opengraph/social-og.jpg" },
        { url: "https://mintaka.co/opengraph/twitter-og.jpg" }
      ],
      site_name: "YourSitesName"
    },
    twitter: {
      handle: "@TwitterHandle",
      site: "@site",
      cardType: "summary_large_image"
    }
  };
  return renderTemplate`${renderComponent($$result, "MarkdownPostLayout", $$MarkdownPostLayout, { "frontmatter": entry.data, "body": entry.body, "seo": seo }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/vicens.juan/astroweb/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/vicens.juan/astroweb/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
