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
    css: 'auto',
    inlineStylesheets: 'auto',
    sourcemap: true,
    minify: true,
  },

  server: {
    port: 3000,
    host: true,
    headers: {
      'Cache-Control': 'public, max-age=0',
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com https://cdnjs.cloudflare.com",
        "style-src 'self' 'unsafe-inline' https://rsms.me https://fonts.googleapis.com",
        "img-src 'self' data: https: blob:",
        "font-src 'self' https: data:",
        "connect-src 'self' https://rsms.me https://fonts.googleapis.com https://fonts.gstatic.com",
        "worker-src 'self' blob:",
        "frame-src 'self'"
      ].join('; ')
    },
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
    appType: 'spa',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    optimizeDeps: {
      include: [
        '@astrojs/mdx',
        '@astrojs/markdown-remark',
        'alpinejs',
        'gsap',
      ],
      exclude: ['@resend/resend']
    },
    build: {
      minify: 'terser',
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
          entryFileNames: 'assets/entry.[hash].js',
          chunkFileNames: 'assets/chunk.[hash].js',
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (ext === 'css') return `assets/style.[hash].${ext}`;
            if (ext === 'js') return `assets/script.[hash].${ext}`;
            return `assets/asset.[hash].${ext}`;
          },
        },
      },
      assetsInlineLimit: 0,
    },
    server: {
      fs: {
        strict: false,
      },
      headers: {
        'Cross-Origin-Embedder-Policy': 'require-corp',
        'Cross-Origin-Opener-Policy': 'same-origin',
      },
    },
  },

  site: 'https://mintaka.co',
  base: '/',
};

export default defineConfig(config);