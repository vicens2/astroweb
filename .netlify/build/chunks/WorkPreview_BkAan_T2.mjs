import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, x as renderSlot, b as renderTemplate, r as renderComponent, d as renderScript } from './astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
import { g as getLangFromUrl, u as useTranslations, a as useTranslatedPath } from './BaseLayout_DrzkISKV.mjs';
import { g as getCollection } from './_astro_content_k-3_lzHx.mjs';
import { Image as $$Image } from './_astro_assets_FfDA6mQs.mjs';

const $$Astro$4 = createAstro("https://mintaka.co");
const $$LinkBlend = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LinkBlend;
  const { class: className, isButton, ...rest } = Astro2.props;
  return renderTemplate`${isButton ? renderTemplate`${maybeRenderHead()}<button${addAttribute([className], "class:list")}${spreadAttributes(rest)} data-astro-cid-taal3sjr>${renderSlot($$result, $$slots["default"])}</button>` : renderTemplate`<a${addAttribute([className], "class:list")}${spreadAttributes(rest)} data-astro-cid-taal3sjr>${renderSlot($$result, $$slots["default"])}</a>`}`;
}, "C:/Users/vicens.juan/astroweb/src/components/global/LinkBlend.astro", void 0);

const $$Astro$3 = createAstro("https://mintaka.co");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="section home-dark-section hero min-h-screen" data-astro-cid-7vszemnk> <div class="mx-auto flex h-full flex-col py-4 lg:py-10" data-astro-cid-7vszemnk> <div class="relative flex flex-1 flex-col justify-around rounded-lg pb-10 pt-20 lg:rounded-2xl" data-astro-cid-7vszemnk> <div class="flex justify-center" data-astro-cid-7vszemnk> <h1 class="text-center font-display text-5xl font-extrabold uppercase sm:text-7xl md:text-8xl lg:text-9xl" data-astro-cid-7vszemnk> <span data-astro-cid-7vszemnk>${t("hero.title.main")}</span> <span class="rotator relative inline-flex h-16 w-full justify-center text-2xl font-bold md:h-20 md:text-5xl lg:h-24 lg:text-6xl" data-astro-cid-7vszemnk> <span data-astro-cid-7vszemnk>${t("hero.title.1")}</span><span data-astro-cid-7vszemnk>${t("hero.title.2")}</span><span data-astro-cid-7vszemnk>${t("hero.title.3")}</span><span data-astro-cid-7vszemnk>${t("hero.title.4")}</span><span data-astro-cid-7vszemnk>${t("hero.title.1")}</span> </span> </h1> </div> <div class="flex flex-col items-center gap-5 text-center lg:gap-10" data-astro-cid-7vszemnk> <p class="mt-8 max-w-3xl font-mono lg:text-lg" data-astro-cid-7vszemnk> ${t("hero.subtitle")} </p> <div class="flex flex-col items-center justify-center gap-3 lg:col-start-1" data-astro-cid-7vszemnk> <div class="squircle-bg rounded-lg bg-zinc-900" data-cursor-hover data-cursor-parallax data-astro-cid-7vszemnk> <a class="flex h-10 w-full max-w-52 flex-1 items-center justify-center px-4 py-2 text-xl text-slate-200 transition-all hover:text-white sm:w-auto md:font-bold lg:h-10" aria-label="Contact Page"${addAttribute(translatePath("/contact/"), "href")} data-astro-cid-7vszemnk> ${t("contact")} </a> </div> <small data-astro-cid-7vszemnk> ${t("or")} ${renderComponent($$result, "LinkBlend", $$LinkBlend, { "id": "go-projects-button", "isButton": true, "data-astro-cid-7vszemnk": true }, { "default": ($$result2) => renderTemplate`${t("hero.scroll")}` })} </small> </div> </div> </div> </div> </section>  ${renderScript($$result, "C:/Users/vicens.juan/astroweb/src/components/landing/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/vicens.juan/astroweb/src/components/landing/Hero.astro", void 0);

const $$Astro$2 = createAstro("https://mintaka.co");
const $$Tagline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Tagline;
  const { class: className } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`<!-- The best thing? It's all in one -->${maybeRenderHead()}<div id="smooth-wrapper"${addAttribute(["section tagline-section relative bg-zinc-900 text-white", className], "class:list")} data-astro-cid-ehofvdlp> <div class="tagline-arrows" data-astro-cid-ehofvdlp> <svg stroke-linecap="round" class="h-[15rem] w-[15rem] rotate-45 md:w-[20rem] md:rotate-0 lg:w-[25rem]" stroke-linejoin="round" viewBox="0 0 550 330" data-astro-cid-ehofvdlp> <path id="tagline-arrow-path" fill="none" stroke="#fff" stroke-width="10" d="M8.5,7.8C46.3,67,121.7,185.5,265.5,185.9c42.8,0.1,120.5-55.9-25.2-120.3
	C79-5.8,177.6,164.1,222.3,207.7c59.1,49.9,83.8,62.1,162.6,96.8" data-astro-cid-ehofvdlp></path> <path class="opacity-0" id="tagline-arrow" stroke="white" stroke-width="12" d="M465.7 172.9l47.1 6-29.8 33.3-17.3-39.3z" data-astro-cid-ehofvdlp></path> </svg> </div> <div class="text col-span-12 flex justify-center font-light" data-astro-cid-ehofvdlp> <p id="services-tagline" class="max-w-5xl text-center text-4xl md:text-5xl lg:text-7xl" data-astro-cid-ehofvdlp> ${t("tagline")} </p> </div> </div>  ${renderScript($$result, "C:/Users/vicens.juan/astroweb/src/components/landing/Tagline.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/vicens.juan/astroweb/src/components/landing/Tagline.astro", void 0);

const $$Astro$1 = createAstro("https://mintaka.co");
const $$WokCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WokCard;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  const { image, project, link, description, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["flex flex-col", className], "class:list")}> <a${addAttribute(translatePath(link), "href")}${addAttribute(`Project ${project}`, "aria-label")}> ${renderComponent($$result, "Image", $$Image, { "class": "h-[25rem] rounded-md object-cover lg:rounded-lg", "src": image, "alt": project })} </a> <div class="px-2 py-8"> <a${addAttribute(translatePath(link), "href")} class="flex items-center justify-between text-base font-medium lg:gap-x-8"> <h3 class="font-mono text-lg font-medium uppercase tracking-wide md:mt-0 lg:text-xl"> ${project} </h3> <span class="text-right text-base hover:text-primary-700"> <span class="hidden lg:inline-block">${t("projects.see")}</span> <span class="sr-only">${project}</span> &nbsp; &rarr;
</span> </a> ${description && renderTemplate`<p class="mt-8 line-clamp-2 text-sm text-slate-500">${description}</p>`} </div> </li>`;
}, "C:/Users/vicens.juan/astroweb/src/components/work/WokCard.astro", void 0);

const $$Astro = createAstro("https://mintaka.co");
const $$WorkPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorkPreview;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const { class: className } = Astro2.props;
  const allProjects = (await getCollection("projects")).filter((prj) => {
    const [postLang, ...slug] = prj.slug.split("/");
    return postLang === lang;
  }).map((prj) => {
    const [postLang, slug] = prj.slug.split("/");
    return {
      ...prj,
      slug
    };
  }).sort((a, b) => Number(b.data.pubDate) - Number(a.data.pubDate));
  return renderTemplate`${maybeRenderHead()}<section id="projects"${addAttribute(["section work-preview-section home-dark-section py-12", className], "class:list")}> <div class="col-span-12 col-start-1 mx-auto max-w-7xl"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">${t("work_preview.title")}</h2> <p class="text-xl text-white/90 max-w-2xl mx-auto">${t("work_preview.subtitle")}</p> </div> <ol class="grid grid-cols-1 gap-24 md:grid-cols-2 lg:gap-44"> ${allProjects.map((project, index) => renderTemplate`${renderComponent($$result, "WokCard", $$WokCard, { "image": project.data.image.source, "project": project.data.title, "link": `/work/${project.slug}`, "class": index % 2 === 0 ? `md:col-start-1 md:row-start-${Math.floor(index / 2) * 2 + 1} md:row-span-2` : `md:col-start-2 md:row-start-${Math.floor(index / 2) * 2 + 2} md:row-span-2` })}`)} </ol> </div> </section>  ${renderScript($$result, "C:/Users/vicens.juan/astroweb/src/components/landing/WorkPreview.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/vicens.juan/astroweb/src/components/landing/WorkPreview.astro", void 0);

export { $$Hero as $, $$WorkPreview as a, $$Tagline as b };
