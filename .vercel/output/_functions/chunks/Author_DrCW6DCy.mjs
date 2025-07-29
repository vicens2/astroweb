import { b as createAstro, c as createComponent, m as maybeRenderHead, d as renderComponent, r as renderTemplate } from './astro/server_CjInFqaA.mjs';
import 'kleur/colors';
import { $ as $$Title } from './Title_DlFibDv4.mjs';

const $$Astro = createAstro("https://mintaka.co");
const $$Author = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Author;
  const { author } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <div class="mx-auto px-8 py-24 md:px-12 lg:pt-32 2xl:max-w-7xl"> <div class="py-10"> ${renderComponent($$result, "Title", $$Title, { "title": author.data.name, "subtitle": "author", "class": "pb-10 pt-20 uppercase" })} </div> </div> </section>`;
}, "C:/Users/vicens.juan/astroweb/src/components/blog/Author.astro", void 0);

export { $$Author as $ };
