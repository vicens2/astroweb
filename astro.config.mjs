import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify/functions';
import path from 'path';
import { fileURLToPath } from 'url';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Enable server-side rendering for API support

  server: {
    port: 3000,
    host: true
  },

  adapter: netlify({
    dist: new URL('./dist/', import.meta.url),
    builders: true,
    edgeMiddleware: true,
  }),

  site: process.env.URL || 'https://mintaka.co',
  
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"],
  },

  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables",
    },
  },

  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon(),
  ],

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src'),
      },
    },
    ssr: {
      // Ensure Resend and other server-side dependencies are properly bundled
      external: ['@resend/resend'],
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});