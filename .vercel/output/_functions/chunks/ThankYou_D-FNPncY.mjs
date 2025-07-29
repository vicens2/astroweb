import { b as createAstro, c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate } from './astro/server_CjInFqaA.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLangFromUrl, a as useTranslations, u as useTranslatedPath } from './BaseLayout_u9md5EvE.mjs';
/* empty css                             */

const $$Astro = createAstro("https://mintaka.co");
const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThankYou;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  return renderTemplate`${maybeRenderHead()}<section class="isolate px-6 py-24 sm:py-32 lg:px-8" data-astro-cid-6rwwo3au> <div class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8" data-astro-cid-6rwwo3au> <div class="text-center" data-astro-cid-6rwwo3au> <div${addAttribute(["flex justify-center pb-10 pt-20 uppercase"], "class:list")} data-astro-cid-6rwwo3au> <div class="inline-flex flex-col gap-4" data-astro-cid-6rwwo3au> <div class="inline-flex items-center justify-center gap-4" data-astro-cid-6rwwo3au> <span class="font-mono text-xs font-semibold uppercase tracking-wide" data-astro-cid-6rwwo3au>${t("thanks.subtitle")}</span> </div> <h1 class="font-display text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl" data-astro-cid-6rwwo3au>${t("thanks.title")}</h1> </div> </div> <p class="mt-6 text-base leading-7 text-gray-600" data-astro-cid-6rwwo3au>${t("thanks.content")}</p> <div class="mt-10 flex items-center justify-center gap-x-6" data-astro-cid-6rwwo3au> <div class="squircle-bg rounded-lg bg-zinc-900" data-astro-cid-6rwwo3au> <a class="flex h-10 w-full max-w-52 flex-1 items-center justify-center px-4 py-2 text-xl text-slate-200 transition-all hover:text-white sm:w-auto md:font-bold lg:h-10"${addAttribute(translatePath("/"), "href")} data-astro-cid-6rwwo3au> ${t("homepage")} </a> </div> </div> </div> </div> </section> `;
}, "C:/Users/vicens.juan/astroweb/src/components/infopages/ThankYou.astro", void 0);

export { $$ThankYou as $ };
