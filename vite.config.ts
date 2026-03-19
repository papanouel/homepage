import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

const metadataPlugin = () => ({
  name: 'metadata-plugin',
  transformIndexHtml(html: string) {
    try {
      const metadata = JSON.parse(fs.readFileSync('./metadata.json', 'utf-8'));
      return html
        .replace(/<title>.*?<\/title>/g, `<title>${metadata.name}</title>`)
        .replace(/<meta name="description" content=".*?"\s*\/?>/g, `<meta name="description" content="${metadata.description}" />`)
        .replace(/property="og:title"\s+content=".*?"/g, `property="og:title" content="${metadata.name}"`)
        .replace(/property="og:description"\s+content=".*?"/gs, `property="og:description" content="${metadata.description}"`)
        .replace(/property="twitter:title"\s+content=".*?"/g, `property="twitter:title" content="${metadata.name}"`)
        .replace(/property="twitter:description"\s+content=".*?"/gs, `property="twitter:description" content="${metadata.description}"`);
    } catch (e) {
      console.warn('Failed to parse metadata.json:', e);
      return html;
    }
  },
  configureServer(server: any) {
    server.watcher.add(path.resolve(__dirname, 'metadata.json'));
    server.watcher.on('change', (file: string) => {
      if (file.endsWith('metadata.json')) {
        server.ws.send({ type: 'full-reload' });
      }
    });
  }
});

export default defineConfig({
  base: '/homepage/',
  plugins: [react(), tailwindcss(), metadataPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});
