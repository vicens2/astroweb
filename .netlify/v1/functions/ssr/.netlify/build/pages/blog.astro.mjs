/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqqEIV9L.mjs';
import { $ as $$Articles } from '../chunks/Articles_C-c8Rd11.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://mintaka.co");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const seo = {
    title: "Majestico Studio Blog: Insights and Updates in Web Design, Web dev and SEO",
    description: "Explore the Majestico Studio Blog for the latest trends, tips, and insights in web design, web dev and SEO. Stay updated with our innovative digital solutions.",
    canonical: "https://mintaka.co/blog/",
    openGraph: {
      url: "https://mintaka.co/blog",
      title: "Majestico Studio Blog: Insights and Updates in Web Design, Web dev and SEO",
      description: "Stay informed with the latest in web design and SEO on the Majestico Studio Blog. Expert advice, tips, and industry insights await you.",
      images: [
        {
          url: "https://mintaka.co/opengraph/social-og.jpg",
          width: 1200,
          height: 630,
          alt: "Social open graph image of Majestico Studio Blog",
          type: "image/jpeg"
        },
        {
          url: "https://mintaka.co/opengraph/twitter-og.jpg",
          width: 4096,
          height: 4096,
          alt: "Twitter open graph image of Majestico Studio Blog",
          type: "image/jpeg"
        },
        { url: "https://mintaka.co/opengraph/social-og.jpg" },
        { url: "https://mintaka.co/opengraph/twitter-og.jpg" }
      ],
      site_name: "Majestico Studio"
    },
    twitter: {
      handle: "@majesticostudio",
      site: "@majesticostudio",
      cardType: "summary_large_image"
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Articles", $$Articles, {})} ` })}`;
}, "C:/Users/vicens.juan/astroweb/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/vicens.juan/astroweb/src/pages/blog/index.astro";
const $$url = "/blog/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
