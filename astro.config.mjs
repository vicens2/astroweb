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
	output: 'static', // Using static output for Netlify

	server: {
		port: 3000,
		host: true
	},

	adapter: netlify(),

	vite: {
		resolve: {
			alias: {
				'site': path.resolve('./src/site.ts'),
			},
		},
		server: {
			watch: {
				usePolling: true,
			},
		},
	},

	site: "https://mintaka.co",

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
});
