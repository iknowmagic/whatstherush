import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import quotesPlugin from "./eslint-plugin-quotes.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      quotes: quotesPlugin,
    },
    rules: {
      "quotes/curly-quotes": "error",
    },
  },
];

export default eslintConfig;
