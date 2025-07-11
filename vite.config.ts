import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

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
      "@router": path.resolve(__dirname, "src/router"),
      "@mixins": path.resolve(__dirname, "src/styles/mixins"),
      "@store": path.resolve(__dirname, "src/app/store"),
      "@utils": path.resolve(__dirname, "src/shared/utils"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
  },
});
