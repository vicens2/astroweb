import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_k-3_lzHx.mjs';
import { $ as $$Entry } from './Entry_C6t4LrBV.mjs';
import { $ as $$Title } from './Title_Bcn2RFpG.mjs';
import { g as getLangFromUrl, u as useTranslations } from './BaseLayout_DrzkISKV.mjs';
/* empty css                         */

const $$Astro = createAstro("https://mintaka.co");
const $$Articles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Articles;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const allPosts = (await getCollection("posts")).filter((post) => {
    const [postLang, ...slug] = post.slug.split("/");
    return postLang === lang;
  }).map((post) => {
    const [postLang, slug] = post.slug.split("/");
    return {
      ...post,
      slug
    };
  }).sort((a, b) => Number(b.data.pubDate) - Number(a.data.pubDate));
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-n2grlgsa> <div class="top-[-10rem]transform-gpu absolute inset-x-0 overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true" data-astro-cid-n2grlgsa> <div class="gradient-element" data-astro-cid-n2grlgsa></div> </div> <div class="mx-auto flex flex-col gap-16 px-8 py-24 md:px-12 lg:pt-32 2xl:max-w-7xl" data-astro-cid-n2grlgsa> <!-- svg: first layer --> <svg class="hidden" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" data-astro-cid-n2grlgsa> <filter id="article-noise-filter" data-astro-cid-n2grlgsa> <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" data-astro-cid-n2grlgsa></feTurbulence> </filter> </svg> ${renderComponent($$result, "Title", $$Title, { "title": t("blog.title"), "subtitle": t("blog.subtitle"), "class": "pb-10 pt-20 uppercase", "data-astro-cid-n2grlgsa": true })} ${allPosts && allPosts[0] && renderTemplate`${renderComponent($$result, "Entry", $$Entry, { "url": "/blog/" + allPosts[0].slug, "title": allPosts[0].data.title, "description": allPosts[0].data.description, "alt": allPosts[0].data.title, "pubDate": allPosts[0].data.pubDate.toString().slice(0, 10), "author": allPosts[0].data.author, "image": allPosts[0].data.image.source, "titleInside": false, "data-astro-cid-n2grlgsa": true })}`} <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3" data-astro-cid-n2grlgsa> ${allPosts.slice(1).map((post) => renderTemplate`${renderComponent($$result, "Entry", $$Entry, { "url": "/blog/" + post.slug, "title": post.data.title, "description": post.data.description, "alt": post.data.title, "pubDate": post.data.pubDate.toString().slice(0, 10), "author": post.data.author, "image": post.data.image.source, "data-astro-cid-n2grlgsa": true })}`)} </div> </div> </section> `;
}, "C:/Users/vicens.juan/astroweb/src/components/blog/Articles.astro", void 0);

export { $$Articles as $ };
