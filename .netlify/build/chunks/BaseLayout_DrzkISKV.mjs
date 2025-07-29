import { a as createComponent, m as maybeRenderHead, d as renderScript, b as renderTemplate, c as createAstro, r as renderComponent, F as Fragment, u as unescapeHTML, e as addAttribute, w as renderHead, x as renderSlot } from './astro/server_Ca8J_k7k.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { escape } from 'html-escaper';

const $$BlobCursorFollower = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="cursor-follower" data-xdata="{ isTouchDevice: 'ontouchstart' in window }" data-xshow="!isTouchDevice" data-astro-cid-axj5jbug> <div id="blob" class="blob" data-astro-cid-axj5jbug></div> </div> ${renderScript($$result, "C:/Users/vicens.juan/astroweb/src/components/global/BlobCursorFollower.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/vicens.juan/astroweb/src/components/global/BlobCursorFollower.astro", void 0);

const createMetaTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<meta ${attrs}>`;
};
const createLinkTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<link ${attrs}>`;
};
const createOpenGraphTag = (property, content) => {
  return createMetaTag({ property: `og:${property}`, content });
};
const buildOpenGraphMediaTags = (mediaType, media) => {
  let tags = "";
  const addTag = (tag) => {
    tags += tag + "\n";
  };
  media.forEach((medium) => {
    addTag(createOpenGraphTag(mediaType, medium.url));
    if (medium.alt) {
      addTag(createOpenGraphTag(`${mediaType}:alt`, medium.alt));
    }
    if (medium.secureUrl) {
      addTag(createOpenGraphTag(`${mediaType}:secure_url`, medium.secureUrl));
    }
    if (medium.type) {
      addTag(createOpenGraphTag(`${mediaType}:type`, medium.type));
    }
    if (medium.width) {
      addTag(createOpenGraphTag(`${mediaType}:width`, medium.width.toString()));
    }
    if (medium.height) {
      addTag(
        createOpenGraphTag(`${mediaType}:height`, medium.height.toString())
      );
    }
  });
  return tags;
};
const buildTags = (config) => {
  let tagsToRender = "";
  const addTag = (tag) => {
    tagsToRender += tag + "\n";
  };
  if (config.title) {
    const formattedTitle = config.titleTemplate ? config.titleTemplate.replace("%s", config.title) : config.title;
    addTag(`<title>${escape(formattedTitle)}</title>`);
  }
  if (config.description) {
    addTag(createMetaTag({ name: "description", content: config.description }));
  }
  let robotsContent = [];
  if (typeof config.noindex !== "undefined") {
    robotsContent.push(config.noindex ? "noindex" : "index");
  }
  if (typeof config.nofollow !== "undefined") {
    robotsContent.push(config.nofollow ? "nofollow" : "follow");
  }
  if (config.robotsProps) {
    const {
      nosnippet,
      maxSnippet,
      maxImagePreview,
      noarchive,
      unavailableAfter,
      noimageindex,
      notranslate
    } = config.robotsProps;
    if (nosnippet) robotsContent.push("nosnippet");
    if (typeof maxSnippet === "number") robotsContent.push(`max-snippet:${maxSnippet}`);
    if (maxImagePreview)
      robotsContent.push(`max-image-preview:${maxImagePreview}`);
    if (noarchive) robotsContent.push("noarchive");
    if (unavailableAfter)
      robotsContent.push(`unavailable_after:${unavailableAfter}`);
    if (noimageindex) robotsContent.push("noimageindex");
    if (notranslate) robotsContent.push("notranslate");
  }
  if (robotsContent.length > 0) {
    addTag(createMetaTag({ name: "robots", content: robotsContent.join(",") }));
  }
  if (config.canonical) {
    addTag(createLinkTag({ rel: "canonical", href: config.canonical }));
  }
  if (config.mobileAlternate) {
    addTag(
      createLinkTag({
        rel: "alternate",
        media: config.mobileAlternate.media,
        href: config.mobileAlternate.href
      })
    );
  }
  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach((languageAlternate) => {
      addTag(
        createLinkTag({
          rel: "alternate",
          hreflang: languageAlternate.hreflang,
          href: languageAlternate.href
        })
      );
    });
  }
  if (config.openGraph) {
    const title = config.openGraph?.title || config.title;
    if (title) {
      addTag(createOpenGraphTag("title", title));
    }
    const description = config.openGraph?.description || config.description;
    if (description) {
      addTag(createOpenGraphTag("description", description));
    }
    if (config.openGraph.url) {
      addTag(createOpenGraphTag("url", config.openGraph.url));
    }
    if (config.openGraph.type) {
      addTag(createOpenGraphTag("type", config.openGraph.type));
    }
    if (config.openGraph.images && config.openGraph.images.length) {
      addTag(buildOpenGraphMediaTags("image", config.openGraph.images));
    }
    if (config.openGraph.videos && config.openGraph.videos.length) {
      addTag(buildOpenGraphMediaTags("video", config.openGraph.videos));
    }
    if (config.openGraph.locale) {
      addTag(createOpenGraphTag("locale", config.openGraph.locale));
    }
    if (config.openGraph.site_name) {
      addTag(createOpenGraphTag("site_name", config.openGraph.site_name));
    }
    if (config.openGraph.profile) {
      if (config.openGraph.profile.firstName) {
        addTag(
          createOpenGraphTag(
            "profile:first_name",
            config.openGraph.profile.firstName
          )
        );
      }
      if (config.openGraph.profile.lastName) {
        addTag(
          createOpenGraphTag(
            "profile:last_name",
            config.openGraph.profile.lastName
          )
        );
      }
      if (config.openGraph.profile.username) {
        addTag(
          createOpenGraphTag(
            "profile:username",
            config.openGraph.profile.username
          )
        );
      }
      if (config.openGraph.profile.gender) {
        addTag(
          createOpenGraphTag("profile:gender", config.openGraph.profile.gender)
        );
      }
    }
    if (config.openGraph.book) {
      if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
        config.openGraph.book.authors.forEach((author) => {
          addTag(createOpenGraphTag("book:author", author));
        });
      }
      if (config.openGraph.book.isbn) {
        addTag(createOpenGraphTag("book:isbn", config.openGraph.book.isbn));
      }
      if (config.openGraph.book.releaseDate) {
        addTag(
          createOpenGraphTag(
            "book:release_date",
            config.openGraph.book.releaseDate
          )
        );
      }
      if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
        config.openGraph.book.tags.forEach((tag) => {
          addTag(createOpenGraphTag("book:tag", tag));
        });
      }
    }
    if (config.openGraph.article) {
      if (config.openGraph.article.publishedTime) {
        addTag(
          createOpenGraphTag(
            "article:published_time",
            config.openGraph.article.publishedTime
          )
        );
      }
      if (config.openGraph.article.modifiedTime) {
        addTag(
          createOpenGraphTag(
            "article:modified_time",
            config.openGraph.article.modifiedTime
          )
        );
      }
      if (config.openGraph.article.expirationTime) {
        addTag(
          createOpenGraphTag(
            "article:expiration_time",
            config.openGraph.article.expirationTime
          )
        );
      }
      if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
        config.openGraph.article.authors.forEach((author) => {
          addTag(createOpenGraphTag("article:author", author));
        });
      }
      if (config.openGraph.article.section) {
        addTag(
          createOpenGraphTag(
            "article:section",
            config.openGraph.article.section
          )
        );
      }
      if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
        config.openGraph.article.tags.forEach((tag) => {
          addTag(createOpenGraphTag("article:tag", tag));
        });
      }
    }
    if (config.openGraph.video) {
      if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
        config.openGraph.video.actors.forEach((actor) => {
          addTag(createOpenGraphTag("video:actor", actor.profile));
          if (actor.role) {
            addTag(createOpenGraphTag("video:actor:role", actor.role));
          }
        });
      }
      if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
        config.openGraph.video.directors.forEach((director) => {
          addTag(createOpenGraphTag("video:director", director));
        });
      }
      if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
        config.openGraph.video.writers.forEach((writer) => {
          addTag(createOpenGraphTag("video:writer", writer));
        });
      }
      if (config.openGraph.video.duration) {
        addTag(
          createOpenGraphTag(
            "video:duration",
            config.openGraph.video.duration.toString()
          )
        );
      }
      if (config.openGraph.video.releaseDate) {
        addTag(
          createOpenGraphTag(
            "video:release_date",
            config.openGraph.video.releaseDate
          )
        );
      }
      if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
        config.openGraph.video.tags.forEach((tag) => {
          addTag(createOpenGraphTag("video:tag", tag));
        });
      }
      if (config.openGraph.video.series) {
        addTag(
          createOpenGraphTag("video:series", config.openGraph.video.series)
        );
      }
    }
  }
  if (config.facebook && config.facebook.appId) {
    addTag(
      createMetaTag({ property: "fb:app_id", content: config.facebook.appId })
    );
  }
  if (config.twitter) {
    if (config.twitter.cardType) {
      addTag(
        createMetaTag({
          name: "twitter:card",
          content: config.twitter.cardType
        })
      );
    }
    if (config.twitter.site) {
      addTag(
        createMetaTag({ name: "twitter:site", content: config.twitter.site })
      );
    }
    if (config.twitter.handle) {
      addTag(
        createMetaTag({
          name: "twitter:creator",
          content: config.twitter.handle
        })
      );
    }
  }
  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach((metaTag) => {
      const attributes = {
        content: metaTag.content
      };
      if ("name" in metaTag && metaTag.name) {
        attributes.name = metaTag.name;
      } else if ("property" in metaTag && metaTag.property) {
        attributes.property = metaTag.property;
      } else if ("httpEquiv" in metaTag && metaTag.httpEquiv) {
        attributes["http-equiv"] = metaTag.httpEquiv;
      }
      addTag(createMetaTag(attributes));
    });
  }
  if (config.additionalLinkTags && config.additionalLinkTags.length > 0) {
    config.additionalLinkTags.forEach((linkTag) => {
      const attributes = {
        rel: linkTag.rel,
        href: linkTag.href
      };
      if (linkTag.sizes) {
        attributes.sizes = linkTag.sizes;
      }
      if (linkTag.media) {
        attributes.media = linkTag.media;
      }
      if (linkTag.type) {
        attributes.type = linkTag.type;
      }
      if (linkTag.color) {
        attributes.color = linkTag.color;
      }
      if (linkTag.as) {
        attributes.as = linkTag.as;
      }
      if (linkTag.crossOrigin) {
        attributes.crossorigin = linkTag.crossOrigin;
      }
      addTag(createLinkTag(attributes));
    });
  }
  return tagsToRender.trim();
};

const $$Astro$3 = createAstro("https://mintaka.co");
const $$AstroSeo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AstroSeo;
  const {
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(buildTags({
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  }))}` })}`;
}, "C:/Users/vicens.juan/astroweb/node_modules/@astrolib/seo/src/AstroSeo.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<meta name="viewport" content="width=device-width"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="author" content="Mintaka Studio"><meta name="keywords" content="mintaka"><!-- Favicon guidelines generated with https://favicon.io/ --><link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"><link rel="icon" type="image/ico" sizes="64x64" href="/favicon.ico"><link rel="icon" type="image/png" sizes="64x64" href="/pwa-64x64.png"><link rel="icon" type="image/png" sizes="192x192" href="/pwa-192x192.png"><link rel="icon" type="image/png" sizes="512x512" href="/pwa-512x512.png"><link rel="manifest" href="/manifest.webmanifest"><link rel="mask-icon" href="/maskable-icon.png" color="#000000"><meta name="msapplication-TileColor" content="#000000"><meta name="theme-color" content="#000000"><!-- HTML in your document's head --><link rel="preconnect" href="https://rsms.me/"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://rsms.me/inter/inter.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"><!-- Scripts --><script defer src="https://unpkg.com/alpinejs@3.13.3/dist/cdn.min.js"><\/script><script>
	const startingWith =
		(subject, replacement) =>
		({ name, value }) => {
			if (name.startsWith(subject)) {
				name = name.replace(subject, replacement);
			}
			return { name, value };
		};

	document.addEventListener("alpine:init", () => {
		Alpine.prefix("data-x");
		Alpine.mapAttributes(startingWith("data-xon.", Alpine.prefixed("on:")));
		Alpine.mapAttributes(startingWith("data-xbind.", Alpine.prefixed("bind:")));
	});
<\/script><script>
	if ("paintWorklet" in CSS) {
		CSS.paintWorklet.addModule("https://www.unpkg.com/css-houdini-squircle@0.3.0/squircle.min.js");
	}
<\/script>`])));
}, "C:/Users/vicens.juan/astroweb/src/components/BaseHead.astro", void 0);

const $$BackgroundTexture = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="texture-wrap" data-astro-cid-q2i7fl47><div class="texture-image" data-astro-cid-q2i7fl47></div></div> `;
}, "C:/Users/vicens.juan/astroweb/src/components/global/BackgroundTexture.astro", void 0);

const defaultLang = "en";
const ui = {
  en: {
    or: "o",
    contact: "Contactanos",
    contacts: "Contacts",
    contactus: "Contact us",
    projects: "Projects",
    services: "Services",
    homepage: "Homepage",
    tagline: "Transforma tus eventos en recuerdos eternos con nuestro fotomatón y video 360º. Capturamos sonrisas, emociones y detalles únicos para revivir cada instante junto a quienes más quieres.",
    "projects.yours": "Your project",
    "projects.see": "See project",
    "hero.title.main": "VAYA PANORAMA",
    "hero.title.1": "FOTOMATONES",
    "hero.title.2": "PLATAFORMA360",
    "hero.title.3": "DIVERSIÓN",
    "hero.title.4": "PROFESIONALIDAD",
    "hero.subtitle": "Our digital agency specializes in crafting captivating websites that convert and sell. Contact us for a free consultation.",
    "hero.scroll": "haz scroll hacia abajo para conocernos más",
    "catalog.title": "Nuestro Catálogo",
    "catalog.subtitle": "Descubre nuestras opciones para hacer tu evento inolvidable",
    "catalog.items.photobooth.title": "Fotomatón Clásico",
    "catalog.items.photobooth.description": "Fotos divertidas con accesorios y fondos personalizados",
    "catalog.items.platform360.title": "Plataforma 360°",
    "catalog.items.platform360.description": "Vídeos espectaculares en 360 grados",
    "catalog.items.video.title": "Vídeo Profesional",
    "catalog.items.video.description": "Cobertura completa de tu evento en vídeo",
    "catalog.items.photography.title": "Fotografía Profesional",
    "catalog.items.photography.description": "Capturamos los mejores momentos de tu evento",
    "catalog.viewFullCatalog": "Ver catálogo completo",
    "catalog.fullCatalog": "Catálogo Completo",
    "catalog.filterByCategory": "Filtra por categoría para encontrar exactamente lo que necesitas",
    "catalog.allCategories": "Todas las categorías",
    "catalog.viewDetails": "Ver detalles",
    "websites.title": "Websites",
    "apps.title": "Apps",
    "uiux.title": "UI/UX Design",
    "seo.title": "SEO",
    "advertising.title": "Advertising",
    "websites.content": "At Mintaka Studio, we specialize in crafting bespoke websites tailored to your brand's needs. Our approach combines aesthetic design with technical proficiency, ensuring your site is visually stunning, fast, and responsive across all devices.",
    "apps.content": "We deliver top-tier app development services, focusing on creating intuitive, efficient, and engaging mobile applications. Whether for iOS, Android, or cross-platform, our apps are designed to enhance user experience and drive business growth.",
    "uiux.content": "Our UI/UX design services are centered on creating user-centric interfaces that are both visually appealing and easy to navigate. We prioritize user experience, ensuring every design element aligns with the users' needs and enhances overall interaction with your digital products.",
    "seo.content": "Mintaka Studio's SEO services are designed to increase your website's visibility and drive organic traffic. We use a blend of the latest SEO strategies and techniques to improve your search engine rankings, focusing on both on-page and off-page optimization.",
    "advertising.content": "Our advertising services aim to maximize your ROI through targeted and effective ad campaigns. We specialize in creating compelling ad content and strategies that resonate with your audience, utilizing various platforms like Google Ads and social media to enhance your brand's reach and engagement.",
    "nuestros_servicios": "Nuestros Servicios",
    "work_preview.title": "Nuestra Galería",
    "work_preview.subtitle": "Descubre nuestros últimos eventos",
    "privacy.wip": "Work in progress",
    "privacy.wip.content": "This page will be updated soon",
    "faqs.question1": "What's your favorite programming language?",
    "faqs.answer1": "We love TypeScript for its type safety and modern features, but we're also proficient in Python, JavaScript, and Go.",
    "faqs.question2": "Do you have a coffee machine in the office?",
    "faqs.answer2": "Yes, and it's probably the most important piece of equipment we have! We run on caffeine and creativity.",
    "faqs.question3": "What's your approach to rubber duck debugging?",
    "faqs.answer3": "We have a collection of rubber ducks, each specialized in different programming languages. They're surprisingly effective at finding bugs!",
    "faqs.question4": "How do you handle merge conflicts?",
    "faqs.answer4": "With patience, coffee, and sometimes a bit of panic. But mostly with good Git practices and clear communication between team members.",
    "faqs.question5": "What's your stance on tabs vs spaces?",
    "faqs.answer5": "This is a trick question! We use EditorConfig to maintain consistency across the team. But secretly, we're team spaces.",
    "faqs.question6": "How many monitors do your developers use?",
    "faqs.answer6": "The correct answer is n+1, where n is the current number of monitors. There's always room for one more screen!",
    "faqs.question7": "What's your debugging strategy?",
    "faqs.answer7": "First we try console.log, then we try proper debugging tools, finally we stare at the code until it confesses its bugs.",
    "faqs.question8": "How do you celebrate successful deployments?",
    "faqs.answer8": "With a mix of relief, high-fives, and occasionally pizza. Then we immediately start worrying about the next deployment.",
    "faqs.question9": "What's your preferred IDE theme?",
    "faqs.answer9": "Dark theme during the day, darker theme at night. Our developers are like vampires - we avoid bright lights.",
    "faqs.question10": "How do you name your variables?",
    "faqs.answer10": "We follow strict naming conventions, but sometimes end up with classics like 'finalFinalVersionForReal' and 'thisWillDefinitelyWork'.",
    "faq.otherquestions": "Other questions?",
    "thanks.subtitle": "Mail sent successfully",
    "thanks.title": "Thank you",
    "thanks.content": "We will get back to you as soon as possible",
    "contact.title": "Contact",
    "contact.subtitle": "Carrier Pigeons Welcome, but Email is Faster!",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.company": "Company",
    "contact.agree": "By sending this, you agree to our",
    "contact.send": "Send",
    "blog.title": "Blog",
    "blog.subtitle": "Tech, Tips, and Typo's!",
    "blog.gotoproject": "Go to project",
    "footer.newsletter": "Subscribe to",
    "footer.newsletter2": "our newsletter",
    "footer.yourmail": "Your email"
  },
  it: {
    or: "o",
    contact: "Contattaci",
    contacts: "Contatti",
    contactus: "Contattaci",
    projects: "Progetti",
    services: "Servizi",
    homepage: "Homepage",
    tagline: "In nostro obbiettivo è trasformare il tuo sito web in un catalizzatore potente di vendite e conversioni, fondendo un design accattivante con una navigazione intuitiva e un SEO efficace. Puntiamo a catturare l'attenzione dei visitatori e guidarli fluidamente verso l'acquisto, assicurandoci che i tuoi prodotti spicchino. Il tuo successo è il fulcro della nostra missione.",
    "projects.yours": "Il tuo progetto",
    "projects.see": "Visualizza progetto",
    "hero.title.main": "Creiamo",
    "hero.title.1": "siti",
    "hero.title.2": "app",
    "hero.title.3": "design",
    "hero.title.4": "brand",
    "hero.subtitle": "Trasforma la tua visione in realtà con la nostra agenzia digitale. Specializzati in siti web innovativi che catturano l'attenzione e massimizzano le vendite, siamo pronti a elevare il tuo brand. Approfitta della nostra consulenza gratuita per iniziare.",
    "hero.scroll": "scorri per scoprire di più",
    "websites.title": "Siti",
    "apps.title": "App",
    "uiux.title": "Design UI/UX",
    "seo.title": "SEO",
    "advertising.title": "Pubblicità",
    "websites.content": "Da Mintaka Studio, siamo specializzati nella realizzazione di siti web su misura per le esigenze del tuo marchio. Il nostro approccio combina design estetico con competenza tecnica, garantendo che il tuo sito sia visivamente accattivante, veloce e reattivo su tutti i dispositivi.",
    "apps.content": "Offriamo servizi di sviluppo app di alto livello, concentrati sulla creazione di applicazioni mobili intuitive, efficienti e coinvolgenti. Sia per iOS, Android o piattaforme incrociate, le nostre app sono progettate per migliorare l'esperienza utente e favorire la crescita aziendale.",
    "uiux.content": "I nostri servizi di design UI/UX sono incentrati sulla creazione di interfacce centrate sull'utente che sono sia visivamente attraenti che facili da navigare. Diamo priorità all'esperienza utente, assicurando che ogni elemento di design sia in linea con le esigenze degli utenti e migliori l'interazione complessiva con i tuoi prodotti digitali.",
    "seo.content": "I servizi SEO di Mintaka Studio sono progettati per aumentare la visibilità del tuo sito web e generare traffico organico. Utilizziamo una combinazione delle più recenti strategie e tecniche SEO per migliorare il tuo posizionamento sui motori di ricerca, concentrando sia sull'ottimizzazione on-page che off-page.",
    "advertising.content": `I nostri servizi pubblicitari mirano a massimizzare il tuo ROI attraverso campagne pubblicitarie mirate ed efficaci. Siamo specializzati nella creazione di contenuti pubblicitari avvincenti e strategie che risuonano con il tuo pubblico, utilizzando varie piattaforme come Google Ads e i social media per potenziare la portata e l'engagement del tuo marchio.`,
    "privacy.wip": "Lavori in corso",
    "privacy.wip.content": "Questa pagina verrà aggiornata a breve",
    "faqs.question1": "Qual è il vostro linguaggio di programmazione preferito?",
    "faqs.answer1": "Amiamo TypeScript per la sua sicurezza dei tipi e le sue caratteristiche moderne, ma siamo anche esperti in Python, JavaScript e Go.",
    "faqs.question2": "Avete una macchina del caffè in ufficio?",
    "faqs.answer2": "Sì, ed è probabilmente l'attrezzatura più importante che abbiamo! Funzioniamo a base di caffeina e creatività.",
    "faqs.question3": "Qual è il tuo approccio alla risoluzione dei problemi con il cane di gomma?",
    "faqs.answer3": "Abbiamo una collezione di cani di gomma, ciascuno specializzato in linguaggi di programmazione diversi. Sono efficaci sorprendentemente nel trovare i bug!",
    "faqs.question4": "Come gestisci i conflitti di fusione?",
    "faqs.answer4": "Con pazienza, caffè e a volte un po' di panico. Ma per lo più con buone pratiche Git e chiara comunicazione tra i membri del team.",
    "faqs.question5": "Qual è la tua posizione su tabs vs spazi?",
    "faqs.answer5": "Questa è una domanda trappola! Usiamo EditorConfig per mantenere la consistenza nel team. Ma in segreto, siamo team spazi.",
    "faqs.question6": "Quanti monitor usano i tuoi sviluppatori?",
    "faqs.answer6": "La risposta corretta è n+1, dove n è il numero corrente di monitor. Ci sarà sempre spazio per uno schermo in più!",
    "faqs.question7": "Qual è la tua strategia di debug?",
    "faqs.answer7": "Prima proviamo console.log, poi proviamo strumenti di debug appropriati, infine ci fissiamo sul codice fino a quando non confessa i suoi bug.",
    "faqs.question8": "Come festeggiamo i deployment riusciti?",
    "faqs.answer8": "Con una miscela di sollievo, pugni, e occasionalmente pizza. Poi subito iniziamo a preoccuparci del prossimo deployment.",
    "faqs.question9": "Qual è il tema IDE preferito?",
    "faqs.answer9": "Tema scuro durante il giorno, tema più scuro di notte. I nostri sviluppatori sono come vampiri - evitiamo luci forti.",
    "faqs.question10": "Come chiami le tue variabili?",
    "faqs.answer10": "Seguiamo convenzioni di nominazione rigorose, ma a volte ci ritroviamo con classici come 'finalFinalVersionForReal' e 'thisWillDefinitelyWork'.",
    "nuestros_servicios": "Nuestros Servicios",
    "catalog.viewFullCatalog": "Ver catálogo completo",
    "catalog.fullCatalog": "Catálogo Completo",
    "catalog.filterByCategory": "Filtra por categoría para encontrar exactamente lo que necesitas",
    "catalog.allCategories": "Todas las categorías",
    "catalog.viewDetails": "Ver detalles",
    "work_preview.title": "Nostro Lavoro",
    "work_preview.subtitle": "Scopri i nostri ultimi progetti",
    "faq.otherquestions": "Altre domande?",
    "thanks.subtitle": "Mail inviata con successo",
    "thanks.title": "Grazie",
    "thanks.content": "Ti risponderemo il prima possibile",
    "contact.title": "Contatti",
    "contact.subtitle": "I piccioni viaggiatori sono i benvenuti, ma la posta elettronica è più veloce!",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.message": "Messaggio",
    "contact.company": "Azienda",
    "contact.agree": "Cliccando invia accetti la nostra",
    "contact.send": "Invia",
    "blog.title": "Blog",
    "blog.subtitle": "Tecnologia, consigli e refusi!",
    "blog.gotoproject": "Vai al progetto",
    "footer.newsletter": "Iscriviti alla",
    "footer.newsletter2": "newsletter",
    "footer.yourmail": "La tua email"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
function useTranslatedPath(lang) {
  return function translatePath(path, l = lang) {
    return l === defaultLang ? path : `/${l}${path}`;
  };
}

const $$Astro$2 = createAstro("https://mintaka.co");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const lang = getLangFromUrl(Astro2.url);
  const translatePath = useTranslatedPath(lang);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-50 py-12" data-astro-cid-tgc5tww7> <div class="container mx-auto px-4" data-astro-cid-tgc5tww7> <!-- Social Media Icons --> <div class="flex justify-center space-x-8 mb-8" data-astro-cid-tgc5tww7> <!-- WhatsApp --> <a href="https://wa.me/34600000000" target="_blank" class="text-gray-600 hover:text-green-500 transition-colors" data-astro-cid-tgc5tww7> <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-tgc5tww7> <path d="M17.5 14.4l-2-1c-.3-.1-.6-.1-.8.1l-1.2 1c-.1.1-.3.1-.5 0-.5-.2-1.3-.9-1.8-1.4-.3-.3-.4-.4-.1-.7l.4-.5c.1-.1.1-.3.1-.5v-1.5c0-.2-.1-.4-.3-.5l-.4-.2h-1.5c-.2 0-.4.1-.5.3-.4.7-.7 1.6-.7 2.4 0 .8.2 1.6.6 2.3.6 1 1.5 1.8 2.6 2.3.8.3 1.7.5 2.6.5 1 0 1.9-.2 2.8-.6.5-.2.7-.8.5-1.2l-.4-.9z" data-astro-cid-tgc5tww7></path> <path d="M12 2C6.5 2 2 6.5 2 12c0 2.1.6 4.1 1.7 5.8l-1.1 3.3 3.4-1.1c1.6 1 3.5 1.6 5.5 1.6 6 0 10.8-4.9 10.8-10.8C22.8 6.5 18 2 12 2zm5.2 12.4c-.4.8-1.1 1.4-1.9 1.6-.3.1-.7.1-1.4.2-.4 0-.9.1-2.2-.4-1-.4-2.3-1.2-3.3-2.3-1.2-1.3-2-2.9-2.2-3.7-.1-.4-.1-.7.1-1 .2-.3.5-.5.9-.5h.5c.3 0 .6 0 .8.2.3.2.4.5.6.8.2.3.3.7.5.9.1.2.2.3.3.5.1.2.1.4 0 .6-.1.2-.3.5-.5.7-.2.2-.4.5-.3.8.1.3.5 1.2 1.1 1.9.8.9 1.5 1.2 1.8 1.3.3.1.5.1.7 0 .3-.1.5-.3.8-.5.2-.2.5-.4.8-.6.2-.1.4-.1.6-.1.2 0 .5 0 .7.2.3.2 1 .9 1.1 1.1.2.2.3.5.2.7z" data-astro-cid-tgc5tww7></path> </svg> </a> <!-- Instagram --> <a href="https://www.instagram.com/vayapanorama" target="_blank" class="text-gray-600 hover:text-pink-600 transition-colors" data-astro-cid-tgc5tww7> <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-tgc5tww7> <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.7 4.92 4.92.06 1.26.07 1.64.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.25-1.67 4.77-4.92 4.92-1.26.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.25-.15-4.77-1.7-4.92-4.92C2.16 15.58 2.15 15.2 2.15 12s.01-3.58.07-4.85C2.38 3.9 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0-1.6c-3.26 0-3.67.01-4.95.07-4.36.2-6.78 2.62-6.98 6.98C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.36-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.36-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0z" data-astro-cid-tgc5tww7></path> <path d="M12 5.84c-3.4 0-6.16 2.76-6.16 6.16 0 3.4 2.76 6.16 6.16 6.16 3.4 0 6.16-2.76 6.16-6.16 0-3.4-2.76-6.16-6.16-6.16zm0 10.16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" data-astro-cid-tgc5tww7></path> <circle cx="16.5" cy="7.5" r="1.5" data-astro-cid-tgc5tww7></circle> </svg> </a> <!-- Email --> <a href="mailto:info@vayapanorama.com" class="text-gray-600 hover:text-blue-600 transition-colors" data-astro-cid-tgc5tww7> <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-tgc5tww7> <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-astro-cid-tgc5tww7></path> <path d="M0 0h24v24H0z" fill="none" data-astro-cid-tgc5tww7></path> </svg> </a> </div> <!-- Navigation Links --> <div class="flex flex-wrap justify-center gap-6 mb-8" data-astro-cid-tgc5tww7> <a${addAttribute(translatePath("/"), "href")} class="text-gray-600 hover:text-gray-900" data-astro-cid-tgc5tww7>Inicio</a> <a${addAttribute(translatePath("/catalog/"), "href")} class="text-gray-600 hover:text-gray-900" data-astro-cid-tgc5tww7>Servicios</a> <a${addAttribute(translatePath("/gallery/"), "href")} class="text-gray-600 hover:text-gray-900" data-astro-cid-tgc5tww7>Galería</a> <a${addAttribute(translatePath("/about/"), "href")} class="text-gray-600 hover:text-gray-900" data-astro-cid-tgc5tww7>Sobre Nosotros</a> <a${addAttribute(translatePath("/contact/"), "href")} class="text-gray-600 hover:text-gray-900" data-astro-cid-tgc5tww7>Contacto</a> </div> <!-- Copyright --> <div class="text-center text-gray-500 text-sm" data-astro-cid-tgc5tww7>
© ${currentYear} Vaya Panorama. Todos los derechos reservados.
</div> <!-- Back to Top Button --> <button id="go-top-button" aria-label="Volver arriba" class="fixed bottom-8 right-8 bg-white p-3 rounded-full shadow-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300" data-cursor-hover data-cursor-parallax data-astro-cid-tgc5tww7> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-tgc5tww7> <path d="M18 15l-6-6-6 6" data-astro-cid-tgc5tww7></path> </svg> </button> </div> </footer>  ${renderScript($$result, "C:/Users/vicens.juan/astroweb/src/components/global/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/vicens.juan/astroweb/src/components/global/Footer.astro", void 0);

function getLocalizedSettings(locale) {
  const settings = {
    header: {
      logo: {
        imagePath: "/images/logo.svg",
        alt: "Logo",
        width: 120,
        height: 40
      },
      navItems: [
        { label: "Inicio", url: "/" },
        { label: "Servicios", url: "/#servicios" },
        { label: "Nosotros", url: "/#smooth-wrapper" },
        { label: "Catálogo", url: "/catalog/" },
        { label: "Galería", url: "/#projects" },
        { label: "Contacto", url: "/#contact" }
      ]
    },
    contacts: {
      phone: "+1 234 567 890",
      email: "info@example.com",
      address: "123 Main St, City, Country"
    }
  };
  if (locale === "es") {
    settings.header.navItems = [
      { label: "Inicio", url: "/es/" },
      { label: "Nuestros Servicios", url: "#services" },
      { label: "Nosotros", url: "/es/about/" },
      { label: "Servicios", url: "/es/services/" },
      { label: "Contacto", url: "/es/contact/" }
    ];
    settings.contacts = {
      phone: "+34 123 456 789",
      email: "info@ejemplo.com",
      address: "Calle Principal 123, Ciudad, País"
    };
  }
  return settings;
}

const $$Astro$1 = createAstro("https://mintaka.co");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const currentLocale = Astro2.currentLocale;
  const { header, contacts } = getLocalizedSettings(currentLocale);
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full z-30 h-16" data-astro-cid-ieyx6y3k> <div class="header-container items-center auto-cols-fr grid-cols-2 lg:grid-cols-2 grid-rows-[auto] justify-between left-0 py-0 px-4 lg:px-12 right-0 top-0 grid gap-4 h-full" data-astro-cid-ieyx6y3k> <div class="items-center flex-wrap justify-start relative flex text-blue-700 z-20 h-full" data-astro-cid-ieyx6y3k> <a href="/" id="header-logo" class="text-blue-700 justify-self-start lg:justify-self-center underline inline-block max-w-full" data-astro-cid-ieyx6y3k> <svg version="1.1" id="CompanyLogo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" width="32" height="32" class="w-6 h-6 lg:w-8 lg:h-8" xml:space="preserve" data-astro-cid-ieyx6y3k> <style type="text/css">
						.st0 {
							clip-path: url(#PathR_00000030484139693231530050000007202149904154527160_);
							fill: none;
							stroke: #000000;
							stroke-width: 28;
							stroke-miterlimit: 10;
						}

						.st1 {
							clip-path: url(#PathL_00000111906239159643029990000008763162307303549323_);
							fill: none;
							stroke: #000000;
							stroke-width: 28;
							stroke-miterlimit: 10;
						}
					</style> <g data-astro-cid-ieyx6y3k> <defs data-astro-cid-ieyx6y3k> <path id="PathR" d="M286.4,71.8V233c0,3-0.2,6-0.8,8.9c-2.9,16.3-30.6,53.1-61.2,53.4c0,0-40,1.6-60.4-26.3
			c-0.3-0.5-0.3-1.1,0.1-1.5l12.7-12.7c0.5-0.5,1.2-0.4,1.6,0c2.7,2.9,16.5,21.7,40.9,20.2c33.6-2,45.2-34.9,45.2-43.8
			c0,0,0.8-172.4,0.1-175.2c-10-42-63.4-38.8-84.5-14.7l-59.6,60.1c-3,3-4.6,7.1-4.6,11.3c-0.1,1-0.2,2.1-0.2,3.1l-2.6,57.8
			c0,2.6,0.7,5,2.1,7.2c2.1,3.3,20.2,29.4,19.7,29.9c-3.8,3.8-8.5,8.5-12.2,12.2c-0.4,0.4-1.1,0.5-1.5,0.1
			c-3.6-3-15.9-18.9-25.6-38.4c-2.2-4.4-1.5-4.7-1.5-10.1l0.8-59c-0.8-19.3,3.4-22.9,15.9-35.6l51.1-51
			C178,16.3,183.5,1.1,234.8,5.8c22.2,2.1,38.7,17.3,47.5,32.4c2.7,4.7,4.1,10.1,4.1,15.5C286.4,60,286.4,67.3,286.4,71.8z" data-astro-cid-ieyx6y3k></path> </defs> <clipPath id="PathR_00000047739257205995265260000000317677073555739302_" data-astro-cid-ieyx6y3k> <use xlink:href="#PathR" style="overflow:visible;" data-astro-cid-ieyx6y3k></use> </clipPath> <path id="MaskR" style="clip-path:url(#PathR_00000047739257205995265260000000317677073555739302_);fill:none;stroke:#000000;stroke-width:28;stroke-miterlimit:10;" class="logo-path-mask" d="
		M132,218.3l-27-38.3v-77.1c0,0,50.7-57.2,60.4-67.4c9.7-10.2,42.1-22.5,52.3-23.4s31.3,5.1,38.3,12.1s17.9,1.1,20.6,42.7
		s0,163.9,0,163.9s-3.9,24.8-15.2,34.5c-11.3,9.7-22.7,20.3-33.4,19.8s-25.9-3.7-31.3-5.3c-5.4-1.6-28.6-22.1-28.6-22.1" data-astro-cid-ieyx6y3k></path> </g> <g data-astro-cid-ieyx6y3k> <defs data-astro-cid-ieyx6y3k> <path id="PathL" d="M13.6,228.2V67c0-3,0.2-6,0.8-8.9C17.2,41.7,45,5,75.6,4.7c0,0,40-1.6,60.4,26.3c0.3,0.5,0.3,1.1-0.1,1.5
			l-12.7,12.7c-0.5,0.5-1.2,0.4-1.6,0c-2.9-2.8-16.6-21.7-41-20.2C47,27,35.4,59.8,35.4,68.7c0,0-0.8,172.4-0.1,175.2
			c10,42,63.4,38.8,84.5,14.7l59.6-60.1c3-3,4.6-7.1,4.6-11.3c0.1-1,0.2-2.1,0.2-3.1l2.6-57.8c0-2.6-0.7-5-2.1-7.2
			c-2.1-3.3-20.2-29.4-19.7-29.9c3.8-3.8,8.5-8.5,12.2-12.2c0.4-0.4,1.1-0.5,1.5-0.1c3.6,3,15.9,18.9,25.6,38.4
			c2.2,4.4,1.5,4.7,1.5,10.1l-0.8,59c0.8,19.3-3.4,22.9-15.9,35.6L138,271c-15.9,12.6-21.5,27.9-72.8,23.1
			C43,292,26.5,276.8,17.7,261.7c-2.7-4.7-4.1-10.1-4.1-15.5C13.6,240,13.6,232.7,13.6,228.2z" data-astro-cid-ieyx6y3k></path> </defs> <clipPath id="PathL_00000141443442153955986570000000888460909890178439_" data-astro-cid-ieyx6y3k> <use xlink:href="#PathL" style="overflow:visible;" data-astro-cid-ieyx6y3k></use> </clipPath> <path id="MaskL" style="clip-path:url(#PathL_00000141443442153955986570000000888460909890178439_);fill:none;stroke:#000000;stroke-width:28;stroke-miterlimit:10;" class="logo-path-mask" d="
		M132,42c0,0-16.7-31.9-52.3-29.8S24.2,58.7,24.2,58.7v192c0,0,12.4,25.9,28.6,31.3c16.2,5.4,45.8,2.7,53.9,0s65.3-58.8,65.3-58.8
		l21.6-22.7l3.2-78.7L171,78.7" data-astro-cid-ieyx6y3k></path> </g> </svg> </a> </div> <div class="justify-self-end col-span-1 row-span-1 z-[9999] col-start-3 relative" data-astro-cid-ieyx6y3k> <div class="menu-icon-container items-center justify-center relative flex h-full w-12" data-astro-cid-ieyx6y3k> <label class="menu-icon" aria-label="Menú" data-astro-cid-ieyx6y3k> <input id="menu-toggle" class="menu-icon__checkbox" type="checkbox" aria-label="Alternar menú" data-astro-cid-ieyx6y3k> <div class="menu-icon__lines" data-astro-cid-ieyx6y3k> <span class="line line-1" data-astro-cid-ieyx6y3k></span> <span class="line line-2" data-astro-cid-ieyx6y3k></span> <span class="line line-3" data-astro-cid-ieyx6y3k></span> </div> </label> </div> </div> </div> <div id="navigation" class="fixed inset-0 z-40 h-screen w-full overflow-hidden bg-transparent transition-all duration-500 ease-in-out" style="opacity: 0; pointer-events: none;" data-astro-cid-ieyx6y3k> <div id="navigation-background" class="bg-white w-full h-full absolute top-0 left-0 opacity-0" data-astro-cid-ieyx6y3k> <div class="absolute inset-0 bg-black" data-astro-cid-ieyx6y3k></div> </div> <div class="relative z-10 flex h-full w-full items-center justify-center" data-astro-cid-ieyx6y3k> <nav class="relative z-10 w-full max-w-5xl px-6 lg:px-12" data-astro-cid-ieyx6y3k> <ul class="space-y-8" data-astro-cid-ieyx6y3k> ${header.navItems.map((item, index) => renderTemplate`<li${addAttribute(index, "key")} class="overflow-hidden" data-nav-item style="opacity: 0; transform: translateY(20px);" data-astro-cid-ieyx6y3k> <a${addAttribute(item.url, "href")} class="block text-4xl font-bold uppercase tracking-tight text-white transition-colors hover:text-primary-500 md:text-6xl lg:text-7xl" data-cursor="hover" data-cursor-style="border" data-astro-cid-ieyx6y3k> ${item.label} </a> </li>`)} </ul> <div class="mt-16 flex flex-wrap items-center gap-8" data-astro-cid-ieyx6y3k> ${contacts.phone && renderTemplate`<a${addAttribute(`tel:${contacts.phone.replace(/\s/g, "")}`, "href")} class="text-lg font-medium uppercase tracking-wider text-white transition-colors hover:text-primary-500" data-cursor="hover" data-cursor-style="border" data-astro-cid-ieyx6y3k> ${contacts.phone} </a>`} ${contacts.email && renderTemplate`<a${addAttribute(`mailto:${contacts.email}`, "href")} class="text-lg font-medium uppercase tracking-wider text-white transition-colors hover:text-primary-500" data-cursor="hover" data-cursor-style="border" data-astro-cid-ieyx6y3k> ${contacts.email} </a>`} ${contacts.address && renderTemplate`<address class="not-italic text-white" data-astro-cid-ieyx6y3k> <p class="text-lg font-medium uppercase tracking-wider" data-astro-cid-ieyx6y3k> ${contacts.address} </p> </address>`} </div> </nav> </div> </div> </header> ${renderScript($$result, "C:/Users/vicens.juan/astroweb/src/components/global/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/vicens.juan/astroweb/src/components/global/Navigation.astro", void 0);

const $$Cart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Debug message -->${maybeRenderHead()}<div id="cart-debug" style="position: fixed; top: 10px; right: 10px; background: #4CAF50; color: white; padding: 10px; border-radius: 5px; z-index: 9999; display: none;">
Initializing cart...
</div> ${renderScript($$result, "C:/Users/vicens.juan/astroweb/src/components/Cart.astro?astro&type=script&index=0&lang.ts")} <!-- Botón del carrito --> <div class="fixed bottom-4 right-4 z-50"> <button id="cart-button" class="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-600 dark:ring-offset-gray-900" aria-label="Abrir carrito"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> <span id="cart-count" class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white" style="display: none"></span> </button> <!-- Panel del carrito --> <div id="cart-panel" class="fixed inset-0 z-50 hidden h-full w-full overflow-hidden" aria-labelledby="cart-title" role="dialog" aria-modal="true"> <!-- Overlay --> <div id="cart-overlay" class="fixed inset-0 bg-black bg-opacity-50 transition-opacity dark:bg-opacity-70" aria-hidden="true"></div> <!-- Cart panel --> <div id="cart-content" class="fixed inset-y-0 right-0 flex w-full max-w-md transform flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-gray-800 sm:translate-x-0"> <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6"> <div class="flex items-start justify-between"> <h2 id="cart-title" class="text-lg font-medium text-gray-900 dark:text-white">
Carrito de compra
</h2> <button id="close-cart" type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"> <span class="sr-only">Cerrar carrito</span> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <div class="mt-8"> <div class="flow-root"> <ul id="cart-items" class="-my-6 divide-y divide-gray-200 dark:divide-gray-700"> <!-- Cart items will be inserted here by JavaScript --> </ul> </div> </div> </div> <div class="border-t border-gray-200 py-6 px-4 sm:px-6"> <div id="cart-summary" class="space-y-2"> <div class="total-row flex justify-between text-base font-medium text-gray-900"> <p>Total</p> <p id="cart-total">0.00€</p> </div> </div> </div> <div class="mt-6"> <button onclick="openCheckoutForm()" id="checkout-button" class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
Solicitar selección
</button> </div> <div class="mt-6 flex justify-center text-center text-sm text-gray-500 dark:text-gray-400"> <p>
o
<button type="button" id="continue-shopping" class="ml-1 font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
Continuar comprando
<span aria-hidden="true"> &rarr;</span> </button> </p> </div> </div> </div> </div> <!-- Estilos -->  <!-- CheckoutForm component will be added back after debugging -->`;
}, "C:/Users/vicens.juan/astroweb/src/components/Cart.astro", void 0);

const $$Astro = createAstro("https://mintaka.co");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pathname } = Astro2.url;
  const { seo: seoProp, showCart = false } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const shareImage = new URL("/images/meta/mintaka_share.gif", Astro2.site).toString();
  const defaultSeo = {
    title: "Web Agency Leading in Performant Web Design Solutions - Mintaka Studio",
    description: "Mintaka Studio excels in creating fast, user-friendly websites with a focus on aesthetic design and SEO optimization, ensuring a standout online presence",
    canonical: "https://mintaka.co",
    openGraph: {
      url: "https://mintaka.co",
      title: "Web Agency Leading in Performant Web Design Solutions - Mintaka Studio",
      description: "Mintaka Studio excels in creating fast, user-friendly websites with a focus on aesthetic design and SEO optimization, ensuring a standout online presence",
      images: [
        {
          url: shareImage,
          width: 1200,
          height: 630,
          alt: "Social open graph",
          type: "image/gif"
        },
        {
          url: shareImage,
          width: 4096,
          height: 4096,
          alt: "Twitter open graph",
          type: "image/gif"
        }
      ],
      site_name: "Mintaka"
    },
    twitter: {
      handle: "@mintakastudio",
      site: "@mintakastudio",
      cardType: "summary_large_image"
    },
    additionalMetaTags: [
      {
        name: "publisher",
        content: "Mintaka Studio"
      }
    ]
  };
  const seo = {
    ...defaultSeo,
    ...seoProp
  };
  function cursorFollowerActive() {
    const paths = ["", "/", "/it/", "/it"];
    return paths.includes(pathname);
  }
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, {})}${renderComponent($$result, "AstroSeo", $$AstroSeo, { ...seo })}${renderHead()}</head> <body class="bg-slate-50"> ${renderComponent($$result, "BackgroundTexture", $$BackgroundTexture, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} ${cursorFollowerActive() && renderTemplate`${renderComponent($$result, "BlobCursorFollower", $$BlobCursorFollower, {})}`} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${showCart && renderTemplate`${renderComponent($$result, "Cart", $$Cart, {})}`} </body></html>`;
}, "C:/Users/vicens.juan/astroweb/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, useTranslatedPath as a, getLangFromUrl as g, useTranslations as u };
