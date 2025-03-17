import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.{tsx, ts}"
  }), tailwindcss()],
  server: {
    port: 3000,
    watch: {
      usePolling: true
    }
  }
})
