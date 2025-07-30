// This file is the entry point for Netlify Functions
// It handles all incoming requests and renders the appropriate page

import { createRequestHandler } from '@astrojs/netlify/functions';
import * as _entry from '../dist/entry.mjs';

export const handler = createRequestHandler({
  entrypoint: _entry,
  // Enable streaming responses for better performance
  responseMode: 'stream',
});

// For development
if (process.env.NETLIFY_DEV) {
  const { createServer } = await import('node:http');
  const { URL } = await import('node:url');
  const { fileURLToPath } = await import('node:url');
  const { dirname, join } = await import('node:path');
  const { default: sirv } = await import('sirv');
  const { createRequestHandler: createViteHandler } = await import('@astrojs/vite/dev');

  const clientRoot = new URL('../../', import.meta.url);
  const clientAssets = join(fileURLToPath(clientRoot), 'dist/client');
  const serverEntry = join(fileURLToPath(clientRoot), 'dist/entry.mjs');

  const client = sirv(clientAssets, {
    etag: true,
    maxAge: 0,
  });

  const vite = await createViteHandler({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  const server = createServer((req, res) => {
    const url = new URL(req.url || '/', 'http://localhost:3000');

    // Handle static assets
    if (url.pathname.startsWith('/_astro/')) {
      return client(req, res);
    }

    // Handle API routes
    if (url.pathname.startsWith('/api/')) {
      return vite(req, res, () => {
        res.statusCode = 404;
        res.end('Not found');
      });
    }

    // Handle all other routes with Astro's middleware
    vite(req, res, async () => {
      try {
        const mod = await import(serverEntry);
        const handler = createRequestHandler({
          entrypoint: mod,
          responseMode: 'stream',
        });
        return await handler(req, res);
      } catch (error) {
        console.error('Error rendering route:', error);
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    });
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
