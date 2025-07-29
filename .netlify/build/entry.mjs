import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_wRB6x0Mp.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/checkout.json.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/api/contact.json.astro.mjs');
const _page5 = () => import('./pages/api/test.astro.mjs');
const _page6 = () => import('./pages/author/_author_.astro.mjs');
const _page7 = () => import('./pages/author.astro.mjs');
const _page8 = () => import('./pages/blog.astro.mjs');
const _page9 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page10 = () => import('./pages/catalog.astro.mjs');
const _page11 = () => import('./pages/contact.astro.mjs');
const _page12 = () => import('./pages/it/404.astro.mjs');
const _page13 = () => import('./pages/it/author/_author_.astro.mjs');
const _page14 = () => import('./pages/it/author.astro.mjs');
const _page15 = () => import('./pages/it/blog.astro.mjs');
const _page16 = () => import('./pages/it/blog/_---slug_.astro.mjs');
const _page17 = () => import('./pages/it/contact.astro.mjs');
const _page18 = () => import('./pages/it/privacy.astro.mjs');
const _page19 = () => import('./pages/it/tags/_tag_.astro.mjs');
const _page20 = () => import('./pages/it/tags.astro.mjs');
const _page21 = () => import('./pages/it/terms.astro.mjs');
const _page22 = () => import('./pages/it/thank-you.astro.mjs');
const _page23 = () => import('./pages/it/work/_---slug_.astro.mjs');
const _page24 = () => import('./pages/it.astro.mjs');
const _page25 = () => import('./pages/privacy.astro.mjs');
const _page26 = () => import('./pages/rss.xml.astro.mjs');
const _page27 = () => import('./pages/tags/_tag_.astro.mjs');
const _page28 = () => import('./pages/tags.astro.mjs');
const _page29 = () => import('./pages/terms.astro.mjs');
const _page30 = () => import('./pages/thank-you.astro.mjs');
const _page31 = () => import('./pages/work/_---slug_.astro.mjs');
const _page32 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/checkout.json.ts", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/api/contact.json.ts", _page4],
    ["src/pages/api/test.ts", _page5],
    ["src/pages/author/[author].astro", _page6],
    ["src/pages/author/index.astro", _page7],
    ["src/pages/blog/index.astro", _page8],
    ["src/pages/blog/[...slug].astro", _page9],
    ["src/pages/catalog/index.astro", _page10],
    ["src/pages/contact.astro", _page11],
    ["src/pages/it/404.astro", _page12],
    ["src/pages/it/author/[author].astro", _page13],
    ["src/pages/it/author/index.astro", _page14],
    ["src/pages/it/blog/index.astro", _page15],
    ["src/pages/it/blog/[...slug].astro", _page16],
    ["src/pages/it/contact.astro", _page17],
    ["src/pages/it/privacy.astro", _page18],
    ["src/pages/it/tags/[tag].astro", _page19],
    ["src/pages/it/tags/index.astro", _page20],
    ["src/pages/it/terms.astro", _page21],
    ["src/pages/it/thank-you.astro", _page22],
    ["src/pages/it/work/[...slug].astro", _page23],
    ["src/pages/it/index.astro", _page24],
    ["src/pages/privacy.astro", _page25],
    ["src/pages/rss.xml.ts", _page26],
    ["src/pages/tags/[tag].astro", _page27],
    ["src/pages/tags/index.astro", _page28],
    ["src/pages/terms.astro", _page29],
    ["src/pages/thank-you.astro", _page30],
    ["src/pages/work/[...slug].astro", _page31],
    ["src/pages/index.astro", _page32]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2597e017-ce50-4180-a2aa-d5cff030ca90"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
{
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
