import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@components": path.resolve(__dirname, "src/components"),
      "@layout": path.resolve(__dirname, "src/components/layout"),
      "@forms": path.resolve(__dirname, "src/components/forms"),
      "@ui": path.resolve(__dirname, "src/components/ui"),
      "@data": path.resolve(__dirname, "src/data"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@buttons": path.resolve(__dirname, "src/components/ui/buttons"),
    },

    plugins: [svgr()],
  },
});
