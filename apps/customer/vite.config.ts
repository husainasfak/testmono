import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import { fileURLToPath } from 'node:url'



const dir = path.dirname(fileURLToPath(import.meta.url))
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // follow symlinks so pnpm's linked dependencies are resolved correctly
    preserveSymlinks: false,
    alias: {
      '@univdiam/ui': path.resolve(dir, '../../packages/ui/src'),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
