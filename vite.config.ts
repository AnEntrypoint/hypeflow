import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  optimizeDeps: {
    exclude: [
    "codemirror",
    "@codemirror/language-javascript",
    "@codemirror/autocomplete",
    "@codemirror/commands",
    "@codemirror/lang-javascript",
    "@codemirror/language",
    "@codemirror/state",
    "@codemirror/view"]
  }
})
