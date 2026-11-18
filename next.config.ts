import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% estático para o GitHub Pages: `npm run build` gera a pasta out/
  output: "export",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
