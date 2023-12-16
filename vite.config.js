import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Rick-and-Morty-WiKi/characters",
  optimizeDeps: { exclude: ["fsevents"] },
})
