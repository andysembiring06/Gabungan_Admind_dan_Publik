import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Mengubah output folder menjadi 'build' bukannya 'dist'
  },
});
