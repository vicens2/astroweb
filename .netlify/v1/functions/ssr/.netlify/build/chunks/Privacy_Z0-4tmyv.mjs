import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { $ as $$Title } from './Title_Bcn2RFpG.mjs';
import { g as getLangFromUrl, u as useTranslations } from './BaseLayout_DrzkISKV.mjs';

const $$Astro = createAstro("https://mintaka.co");
const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Privacy;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section> <div class="mx-auto max-w-7xl px-8 py-12 md:px-12 lg:px-32 lg:py-32"> <div> ${renderComponent($$result, "Title", $$Title, { "title": "Privacy", "subtitle": "Last updated 01. Jan 2024", "class": "pb-10 pt-20 uppercase" })} </div> <div class="prose-styles mt-12 lg:mt-24"> <h2 id="shine-the-light-disclosure">${t("privacy.wip")}</h2> <p>${t("privacy.wip.content")}</p> </div> </div> </section>`;
}, "C:/Users/vicens.juan/astroweb/src/components/infopages/Privacy.astro", void 0);

export { $$Privacy as $ };
