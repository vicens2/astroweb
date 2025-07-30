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
        '@': path.resolve(fileURLToPath(import.meta.url), 'src'),
      },
    },
  },

  // Build configuration
  build: {
    // Ensure static assets are properly handled
    assets: '_astro',
  },

  // Enable experimental features if needed
  experimental: {
    viewTransitions: true,
    clientPrerender: true,
  },

  // Site configuration
  site: 'https://your-site-url.netlify.app', // Replace with your actual site URL
  base: '/',
  trailingSlash: 'always',
  output: 'server',
});