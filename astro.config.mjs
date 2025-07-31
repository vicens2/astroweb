import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuración base
const config = {
  output: 'static',
  adapter: netlify({
    edgeMiddleware: false,
    functionPerRoute: false,
  }),

  // Configuración para asegurar que los estilos se generen correctamente
  build: {
    format: 'file',
    inlineStylesheets: 'always',  // Force inline styles
    assets: '_assets',
    cssCodeSplit: false,
    sourcemap: true,
    minify: true,
  },

  // Configuración del servidor
  server: {
    port: 3000,
    host: true,
    headers: {
      'Cache-Control': 'public, max-age=0',
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com https://cdnjs.cloudflare.com",
        "style-src 'self' 'unsafe-inline' 'unsafe-hashes' https://rsms.me https://fonts.googleapis.com",
        "img-src 'self' data: https: blob:",
        "font-src 'self' https: data:",
        "connect-src 'self' https://rsms.me https://fonts.googleapis.com https://fonts.gstatic.com",
        "worker-src 'self' blob:",
        "frame-src 'self'"
      ].join('; ')
    },
  },

  // Integraciones
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

  // Configuración de Vite
  vite: {
    appType: 'spa',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      assetsInlineLimit: 0,  // Force all assets to be emitted as files
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        }
      }
    },
    server: {
      fs: {
        strict: false
      }
    }
  },

  // Configuración del sitio
  site: 'https://mintaka.co',
  base: '/',
};

export default defineConfig(config);