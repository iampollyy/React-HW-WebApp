import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "node:path";

// ESM-compatible __dirname

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@providers": path.resolve(__dirname, "src/app/providers"),
      "@context": path.resolve(__dirname, "src/app/providers/context"),
      "@styles": path.resolve(__dirname, "src/styles"),

      "@assets": path.resolve(__dirname, "src/assets"),
      "@images": path.resolve(__dirname, "src/assets/images"),

      "@pages": path.resolve(__dirname, "src/pages"),
      "@features": path.resolve(__dirname, "src/features"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@shared": path.resolve(__dirname, "src/shared"),

      "@ui": path.resolve(__dirname, "src/shared/ui"),
      "@widgets": path.resolve(__dirname, "src/shared/widgets"),
      "@config": path.resolve(__dirname, "src/shared/config"),
      "@api": path.resolve(__dirname, "src/shared/api"),
      "@types": path.resolve(__dirname, "src/shared/types"),
      "@hooks": path.resolve(__dirname, "src/shared/hooks"),
    },
  },
});
