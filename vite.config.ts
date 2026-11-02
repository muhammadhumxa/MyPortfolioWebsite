
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { copyFileSync, existsSync, mkdirSync, renameSync } from 'node:fs';

function copyGoogleVerification() {
  return {
    name: 'copy-google-verification',
    writeBundle() {
      const verificationFile = path.resolve(import.meta.dirname, 'google62eb0be091f5aea1.html');
      const outputDirectory = path.resolve(import.meta.dirname, 'dist');
      const appEntry = path.resolve(outputDirectory, 'app.html');
      const indexEntry = path.resolve(outputDirectory, 'index.html');
      if (existsSync(appEntry)) {
        renameSync(appEntry, indexEntry);
      }
      if (existsSync(verificationFile)) {
        mkdirSync(outputDirectory, { recursive: true });
        copyFileSync(
          verificationFile,
          path.resolve(outputDirectory, 'google62eb0be091f5aea1.html'),
        );
      }
    },
  };
}

export default defineConfig(() => {
  return {
    base: '/MyPortfolioWebsite/',
    plugins: [react(), tailwindcss(), copyGoogleVerification()],
    build: {
      rollupOptions: {
        input: {
          index: path.resolve(import.meta.dirname, 'app.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
