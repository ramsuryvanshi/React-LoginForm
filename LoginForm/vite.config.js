import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // <- add this
// import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),         // <- React plugin first
    // tailwindcss(),   // <- Tailwind plugin
  ],
})
