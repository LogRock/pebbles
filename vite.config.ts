/* eslint-disable @typescript-eslint/ban-ts-comment */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import typescript from "@rollup/plugin-typescript";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // @ts-ignore
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./lib/test/setup.ts",
    coverage: {
      reporter: ["text", "lcov"],
    },
  },
  build: {
    lib: {
      entry: "./lib/main.ts",
      name: "@logrock/pebbles",
      fileName: (format) => `logrock-pebbles.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "react",
        "styled-components",
        "styled-breakpoints",
        "react-icons",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "styled-components": "styled",
          "styled-breakpoints": "styled-breakpoints",
          "react-icons": "react-icons",
        },
      },
      plugins: [
        typescript({
          target: "es2020",
          rootDir: "./lib",
          declaration: true,
          declarationDir: "./dist",
          exclude: "./node_modules/**",
          allowSyntheticDefaultImports: true,
          tsconfig: "./tsconfig.json",
        }),
      ],
    },
  },
});
