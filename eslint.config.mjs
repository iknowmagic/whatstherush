import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
// Import Next.js plugin directly
import nextPlugin from "@next/eslint-plugin-next";

// Handle ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  // Don't use compat for Next.js rules since we're loading them directly
  recommendedConfig: {
    extends: ["eslint:recommended"],
  },
});

export default [
  // Base configuration
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    // Add .vscode directory and JSON files to ignores
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "dist/**",
      ".vercel/**",
      ".vscode/**",
      "**/*.json",
    ],
  },

  // Add Next.js plugin rules directly
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      // Include specific Next.js rules you need
      "@next/next/no-html-link-for-pages": ["error", "src/app"],
      "@next/next/no-img-element": "error",
      // Add more Next.js rules as needed
    },
  },

  // TypeScript files
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    // Define the TypeScript plugin explicitly
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      // Standard style rules without the problematic ones
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/no-floating-promises": "off",

      // Modern rules for better code quality
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": [
        "warn",
        {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": "allow-with-description",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
        },
      ],
    },
  },

  // React files
  {
    files: ["**/*.{jsx,tsx}"],
    // Define React plugins explicitly
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // Modern React rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/self-closing-comp": ["warn", { component: true, html: true }],
      "react/no-array-index-key": "warn",
      "jsx-a11y/alt-text": ["warn", { elements: ["img"] }],
      "jsx-a11y/aria-props": "error",
    },
  },

  // Next.js specific rules
  {
    files: ["**/app/**/*.{ts,tsx}", "**/pages/**/*.{ts,tsx}"],
    rules: {
      "import/no-default-export": "off",
    },
  },

  // Prettier integration
  {
    files: ["**/*.{js,jsx,ts,tsx,json,css,scss,md}"],
    rules: {
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
    },
  },

  // Tests
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    rules: {
      "no-undef": "off", // Jest globals
      "react/display-name": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
];
