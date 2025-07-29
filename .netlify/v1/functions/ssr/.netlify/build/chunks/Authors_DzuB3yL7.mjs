import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, e as addAttribute, b as renderTemplate } from './astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_BNi-NYdj.mjs';
import { $ as $$Icon } from './Icon_C4rjcPyI.mjs';
import { $ as $$Title } from './Title_Bcn2RFpG.mjs';
import { g as getLangFromUrl, a as useTranslatedPath } from './BaseLayout_DrzkISKV.mjs';

const $$Astro = createAstro("https://mintaka.co");
const $$Authors = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Authors;
  const lang = getLangFromUrl(Astro2.url);
  const translatePath = useTranslatedPath(lang);
  const allAuthors = (await getCollection("authors")).filter((author) => {
    const [authorLang, ...slug] = author.slug.split("/");
    return authorLang === lang;
  }).map((author) => {
    const [authorLang, slug] = author.slug.split("/");
    return {
      ...author,
      slug
    };
  });
  return renderTemplate`${maybeRenderHead()}<section> <div class="mx-auto px-8 py-24 md:px-12 lg:pt-32 2xl:max-w-7xl"> <div> ${renderComponent($$result, "Title", $$Title, { "class": "pb-10 pt-20 uppercase", "title": "Authors", "subtitle": "lorem ipsum" })} </div> <div> <ol class="mt-12 flex flex-col divide-y divide-zinc-800 py-8"> ${allAuthors.map((author) => renderTemplate`<li class="w-full py-8 font-mono text-xl font-semibold text-zinc-800 hover:text-black md:text-2xl "> <a${addAttribute(translatePath(`/author/${author.slug}`), "href")} class="flex w-full items-center justify-between"> ${author.data.name}${" "} <span class="ml-auto"> ${renderComponent($$result, "Icon", $$Icon, { "name": "ic:baseline-arrow-right", "width": "30" })} </span> </a> </li>`)} </ol> </div> </div> </section>`;
}, "C:/Users/vicens.juan/astroweb/src/components/blog/Authors.astro", void 0);

export { $$Authors as $ };
