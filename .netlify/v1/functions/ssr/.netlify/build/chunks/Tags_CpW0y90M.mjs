import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, e as addAttribute, b as renderTemplate } from './astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_BNi-NYdj.mjs';
import { $ as $$Icon } from './Icon_C4rjcPyI.mjs';
import { $ as $$Title } from './Title_Bcn2RFpG.mjs';
import { g as getLangFromUrl, a as useTranslatedPath } from './BaseLayout_DrzkISKV.mjs';

const $$Astro = createAstro("https://mintaka.co");
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const lang = getLangFromUrl(Astro2.url);
  const translatePath = useTranslatedPath(lang);
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
  const tags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
  return renderTemplate`${maybeRenderHead()}<section> <div class="mx-auto px-8 py-24 md:px-12 lg:pt-32 2xl:max-w-7xl"> <div> ${renderComponent($$result, "Title", $$Title, { "class": "pb-10 pt-20 uppercase", "title": "Tags", "subtitle": "lorem ipsum" })} </div> <div> <ol class="mt-12 flex flex-col divide-y divide-zinc-800 py-8"> ${tags.map((tag) => renderTemplate`<li class="w-full py-8 font-mono text-xl font-semibold text-zinc-800 hover:text-black md:text-2xl "> <a${addAttribute(translatePath(`/tags/${tag}`), "href")} class="flex w-full items-center justify-between"> ${tag}${" "} <span class="ml-auto"> ${renderComponent($$result, "Icon", $$Icon, { "name": "ic:baseline-arrow-right", "width": "30" })} </span> </a> </li>`)} </ol> </div> </div> </section>`;
}, "C:/Users/vicens.juan/astroweb/src/components/blog/Tags.astro", void 0);

export { $$Tags as $ };
