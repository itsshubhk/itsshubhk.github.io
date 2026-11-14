import { fileURLToPath, URL } from 'node:url'
import { existsSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

const resumeFile = fileURLToPath(new URL('./public/resume.pdf', import.meta.url))

// Base path:
// - "/"          -> user site (shuhbamkhare.github.io), Vercel, Cloudflare Pages (default)
// - "/repo-name/" -> GitHub project pages. Set VITE_BASE=/repo-name/ at build time.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [vue(), tailwindcss()],
  define: {
    // True when public/resume.pdf exists at build/dev-server start (restart `npm run dev` after adding it).
    __RESUME_AVAILABLE__: JSON.stringify(existsSync(resumeFile)),
  },
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 600,
  },
})
