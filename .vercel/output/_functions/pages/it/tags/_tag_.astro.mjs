import { b as createAstro, c as createComponent, d as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_CjInFqaA.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_C4Uzchnq.mjs';
import { $ as $$Tag } from '../../../chunks/Tag_Ct_k01ln.mjs';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_u9md5EvE.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://mintaka.co");
async function getStaticPaths() {
  const allPosts = (await getCollection("posts")).filter((post) => {
    const [postLang, ...slug] = post.slug.split("/");
    return postLang === "it";
  });
  const uniqueTags = [...new Set(allPosts.flatMap((post) => post.data.tags))];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) => post.data.tags.includes(tag)).map((post) => {
      const [postLang, ...slugParts] = post.slug.split("/");
      return {
        ...post,
        slug: slugParts.join("/")
      };
    });
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  const seo = {
    title: `${tag} | Majestico Studio`,
    description: `Explore articles and insights on '${tag}' at Majestico Studio. Dive into a wealth of knowledge covering the latest trends and tips in web design and SEO.`,
    canonical: `https://mintaka.co/it/tags/${tag}/`
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Tag", $$Tag, { "tag": tag, "posts": posts })} ` })}`;
}, "C:/Users/vicens.juan/astroweb/src/pages/it/tags/[tag].astro", void 0);

const $$file = "C:/Users/vicens.juan/astroweb/src/pages/it/tags/[tag].astro";
const $$url = "/it/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$tag,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
