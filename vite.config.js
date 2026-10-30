import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

function asyncCssPlugin() {
  return {
    name: 'async-css',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
        '<link rel="stylesheet" crossorigin href="$1" media="print" onload="this.media=\'all\'">\n    <noscript><link rel="stylesheet" crossorigin href="$1"></noscript>'
      );
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), asyncCssPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react/')) {
              return 'vendor-react';
            }
            if (id.includes('react-router-dom') || id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            return 'vendor';
          }
        }
      }
    }
  }
})
