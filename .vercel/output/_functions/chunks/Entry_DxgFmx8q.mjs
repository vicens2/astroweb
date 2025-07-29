import { b as createAstro, c as createComponent, m as maybeRenderHead, a as addAttribute, d as renderComponent, r as renderTemplate } from './astro/server_CjInFqaA.mjs';
import 'kleur/colors';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_Bx69P9VZ.mjs';
import { g as getLangFromUrl, u as useTranslatedPath } from './BaseLayout_u9md5EvE.mjs';
/* empty css                         */

const $$Astro = createAstro("https://mintaka.co");
const $$Entry = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Entry;
  const lang = getLangFromUrl(Astro2.url);
  const translatePath = useTranslatedPath(lang);
  const { title, url, author, pubDate, description, image, titleInside = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(translatePath(url), "href")}${addAttribute(title, "title")} class="group" data-astro-cid-lxd3lqjs> <article class="relative flex h-full flex-1 flex-col overflow-hidden rounded-lg" data-astro-cid-lxd3lqjs> <div${addAttribute([
    "article-overlay relative block w-full overflow-hidden lg:col-span-2",
    titleInside ? "article-gradient-overlay-bottom" : "article-gradient-overlay"
  ], "class:list")} data-astro-cid-lxd3lqjs> ${renderComponent($$result, "Image", $$Image, { "class": "relative aspect-[384/246] h-full w-full bg-center object-cover", "src": image, "alt": title, "data-astro-cid-lxd3lqjs": true })} </div> <div${addAttribute(`flex w-full flex-1 flex-col items-start justify-between  ${titleInside ? "absolute bottom-0 text-white p-12" : "text-black pt-4 md:p-2 md:pt-6"}`, "class")} data-astro-cid-lxd3lqjs> <div class="w-full" data-astro-cid-lxd3lqjs> <div data-astro-cid-lxd3lqjs> <p class="font-mono text-lg font-medium uppercase tracking-wide lg:text-xl" data-astro-cid-lxd3lqjs> ${title} </p> </div> <p${addAttribute(`mt-2 line-clamp-3 text-base  ${titleInside ? "text-slate-200" : "text-slate-600"}`, "class")} data-astro-cid-lxd3lqjs> ${description} </p> </div> <footer data-astro-cid-lxd3lqjs> <div class="mt-6 inline-flex items-center space-x-1" data-astro-cid-lxd3lqjs> <p${addAttribute(`text-xs font-medium ${titleInside ? "text-slate-200" : "text-slate-900"}`, "class")} data-astro-cid-lxd3lqjs> ${author.name} </p> <span aria-hidden="true" data-astro-cid-lxd3lqjs>&middot;</span> <div${addAttribute(`flex text-xs ${titleInside ? "text-slate-300" : "text-slate-500"}`, "class")} data-astro-cid-lxd3lqjs> <time datetime="2020-03-16" data-astro-cid-lxd3lqjs>${pubDate}</time> </div> </div> </footer> </div> </article> </a> `;
}, "C:/Users/vicens.juan/astroweb/src/components/blog/Entry.astro", void 0);

export { $$Entry as $ };
