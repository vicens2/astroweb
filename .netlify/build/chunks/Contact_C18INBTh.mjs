import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { $ as $$Title } from './Title_Bcn2RFpG.mjs';
import { g as getLangFromUrl, u as useTranslations } from './BaseLayout_DrzkISKV.mjs';
/* empty css                           */

const $$Astro = createAstro("https://mintaka.co");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="isolate px-6 py-24 sm:py-32 lg:px-8" data-astro-cid-zlruecd3> <div class="absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true" data-astro-cid-zlruecd3> <div class="gradient-element" data-astro-cid-zlruecd3></div> </div> <div class="mx-auto" data-astro-cid-zlruecd3> ${renderComponent($$result, "Title", $$Title, { "class": "pb-10 pt-20 uppercase", "title": t("contact.title"), "subtitle": t("contact.subtitle"), "data-astro-cid-zlruecd3": true })} <form data-static-form-name="contact" class="mx-auto max-w-2xl pt-12 lg:pt-20" data-astro-cid-zlruecd3> <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2" data-astro-cid-zlruecd3> <div class="form-field sm:col-span-2" data-astro-cid-zlruecd3> <label for="name" class="form-label" data-astro-cid-zlruecd3>${t("contact.name")}*</label> <input type="text" name="name" id="name" autocomplete="given-name" required data-astro-cid-zlruecd3> </div> <div class="form-field sm:col-span-2" data-astro-cid-zlruecd3> <label for="email" class="form-label" data-astro-cid-zlruecd3>${t("contact.email")}*</label> <input type="email" name="email" id="email" autocomplete="email" required data-astro-cid-zlruecd3> </div> <div class="form-field sm:col-span-2" data-astro-cid-zlruecd3> <label for="company" class="form-label" data-astro-cid-zlruecd3>${t("contact.company")}</label> <input type="text" name="company" id="company" autocomplete="organization" data-astro-cid-zlruecd3> </div> <div class="form-field sm:col-span-2" data-astro-cid-zlruecd3> <label for="message" class="form-label" data-astro-cid-zlruecd3>${t("contact.message")}*</label> <textarea name="message" id="message" rows="4" required data-astro-cid-zlruecd3></textarea> </div> <div class="flex gap-x-4 sm:col-span-2" data-astro-cid-zlruecd3> <label class="text-sm leading-6 text-gray-600" id="switch-1-label" data-astro-cid-zlruecd3> ${t("contact.agree")} <a href="/privacy" class="font-semibold text-slate-800" data-astro-cid-zlruecd3>privacy policy</a>.
</label> </div> </div> <div class="flex pt-10" data-astro-cid-zlruecd3> <div class="squircle-bg rounded-lg bg-zinc-900" data-astro-cid-zlruecd3> <button type="submit" class="flex h-10 w-full max-w-52 flex-1 items-center justify-center px-4 py-2 text-xl text-slate-200 transition-all hover:text-white sm:w-auto md:font-bold lg:h-10" data-astro-cid-zlruecd3> ${t("contact.send")} </button> </div> </div> </form> </div> </section> `;
}, "C:/Users/vicens.juan/astroweb/src/components/forms/Contact.astro", void 0);

export { $$Contact as $ };
