import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify/static';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: netlify(),

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
        '@': path.resolve(__dirname, './src'),
      },
    },
    optimizeDeps: {
      include: ['@astrojs/mdx', '@astrojs/markdown-remark'],
      exclude: ['@resend/resend']
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },

  // Site configuration
  site: 'https://mintaka.co',
  base: '/',
  trailingSlash: 'always',
});