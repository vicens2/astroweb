import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import node from '@astrojs/node';
import path from 'path';
import { fileURLToPath } from 'url';

// https://astro.build/config
export default defineConfig({
	experimental: {
		session: true
	},
	output: 'server',
	server: {
		port: 3000,
		host: true
	},
	// Configuración del adaptador de Node.js
	adapter: node({
		mode: 'standalone',
		serverEntrypoint: '@astrojs/node/server.js',
		// Deshabilitar explícitamente las sesiones
		server: {
			session: false
		}
	}),
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
