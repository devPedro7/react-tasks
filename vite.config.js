import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // Definindo o nome do arquivo JS
        entryFileNames: "script.js",
        // Definindo o nome do arquivo CSS
        chunkFileNames: "style.css",
        assetFileNames: "[name].[ext]", // Essa linha é para outros arquivos estáticos como imagens, fontes, etc.
      },
    },
  },
});
