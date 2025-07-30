/* empty css                                       */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import { $ as $$Articles } from '../../chunks/Articles_C-c8Rd11.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BqqEIV9L.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://mintaka.co");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const seo = {
    title: "Mintaka Studio Blog: Insights and Updates in Web Design, Web dev and SEO",
    description: "Explore the Mintaka Studio Blog for the latest trends, tips, and insights in web design, web dev and SEO. Stay updated with our innovative digital solutions.",
    canonical: "https://mintaka.co/it/blog/",
    openGraph: {
      url: "https://mintaka.co/blog",
      title: "Mintaka Studio Blog: Insights and Updates in Web Design, Web dev and SEO",
      description: "Stay informed with the latest in web design and SEO on the Mintaka Studio Blog. Expert advice, tips, and industry insights await you.",
      images: [
        {
          url: "https://mintaka.co/opengraph/social-og.jpg",
          width: 1200,
          height: 630,
          alt: "Social open graph image of Mintaka Studio Blog",
          type: "image/jpeg"
        },
        {
          url: "https://mintaka.co/opengraph/twitter-og.jpg",
          width: 4096,
          height: 4096,
          alt: "Twitter open graph image of Mintaka Studio Blog",
          type: "image/jpeg"
        },
        { url: "https://mintaka.co/opengraph/social-og.jpg" },
        { url: "https://mintaka.co/opengraph/twitter-og.jpg" }
      ],
      site_name: "Mintaka Studio"
    },
    twitter: {
      handle: "@mintakastudio",
      site: "@mintakastudio",
      cardType: "summary_large_image"
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Articles", $$Articles, {})} ` })}`;
}, "C:/Users/vicens.juan/astroweb/src/pages/it/blog/index.astro", void 0);

const $$file = "C:/Users/vicens.juan/astroweb/src/pages/it/blog/index.astro";
const $$url = "/it/blog/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
