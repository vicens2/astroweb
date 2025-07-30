import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify';
import path from 'path';
import { fileURLToPath } from 'url';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true,
    build: {
      server: './src/pages/api',
    },
  }),

  server: {
    port: 3000,
    host: true
  },

  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    icon({
      include: {
        'mdi': ['*'],
      },
    }),
  ],

  vite: {
    resolve: {
      alias: {
        '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
      },
    },
  },

  // Site configuration
  site: 'https://mintaka.co',
  base: '/',
  trailingSlash: 'always',
});