import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { $ as $$Entry } from './Entry_C6t4LrBV.mjs';
import { $ as $$Title } from './Title_Bcn2RFpG.mjs';

const $$Astro = createAstro("https://mintaka.co");
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tag, posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <div class="mx-auto px-8 py-24 md:px-12 lg:pt-32 2xl:max-w-7xl"> <div class="py-10"> ${renderComponent($$result, "Title", $$Title, { "title": tag, "subtitle": "tag", "class": "pb-10 pt-20 uppercase" })} </div> <ul class="mt-12 grid grid-cols-1 gap-x-3 gap-y-24 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-x-6"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "EntriesOne", $$Entry, { "url": "/blog/" + post.slug, "title": post.data.title, "description": post.data.description, "alt": post.data.title, "pubDate": post.data.pubDate.toString().slice(0, 10), "author": post.data.author, "image": post.data.image.source })}`)} </ul> </div> </section>`;
}, "C:/Users/vicens.juan/astroweb/src/components/blog/Tag.astro", void 0);

export { $$Tag as $ };
