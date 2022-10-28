import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path';

const isDev = process.env.ENV === 'development';

export default defineConfig({
  plugins: [
    solidPlugin(),
    VitePWA({
      manifest: {
        name: 'Huu Clothing',
        short_name: 'huuclothing',
        description: 'Huu Clothing Netlify Web App',
        theme_color: '#000000',
        icons: [
          {
            type: 'image/png',
            src: '/pwa-192.png',
            sizes: '192x192'
          },
          {
            type: 'image/png',
            src: '/pwa-512.png',
            sizes: '512x512'
          },
          {
            type: 'image/png',
            src: '/pwa-512.png',
            sizes: '512x512',
            purpose: 'any maskable'
          },
          {
            type: 'image/png',
            src: '/apple-touch-icon.png',
            sizes: '180x180',
            rel: 'apple-touch-icon'
          }
        ],
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: isDev
      }
    })
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
});
