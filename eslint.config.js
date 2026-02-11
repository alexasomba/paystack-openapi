import tseslint from "typescript-eslint";
import importXPlugin from "eslint-plugin-import-x";
import promisePlugin from "eslint-plugin-promise";
import unicornPlugin from "eslint-plugin-unicorn";
import js from "@eslint/js";
import { fixupPluginRules } from "@eslint/compat";

export default [
  {
    ignores: [
      "**/*.js",
      "**/*.cjs",
      "**/*.mjs",
      "**/node_modules/**",
      "**/dist/**",
      "**/coverage/**",
      "**/build/**",
      "**/.next/**",
      "**/.turbo/**",
      "**/.cache/**",
      "docs/**",
      "scripts/**",
      "**/*.d.ts",
      "**/*.d.ts.map",
      "**/*.map",
      "**/*.tsbuildinfo",
      "**/openapi-types.ts",
      "**/operations.ts",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      import: importXPlugin,
      promise: fixupPluginRules(promisePlugin),
      unicorn: unicornPlugin,
    },
    rules: {
      indent: ["error", "tab"],
      "prefer-const": "error",
      "no-debugger": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: false,
        },
      ],
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/strict-boolean-expressions": "warn",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        { "ts-ignore": "allow-with-description" },
      ],
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/consistent-generic-constructors": "off",

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],

      "unicorn/prefer-node-protocol": "error",

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      "no-console": "warn",
      "import/order": ["error", { "newlines-between": "always" }],
      "promise/always-return": "warn",
      "promise/catch-or-return": "warn",
    },
  },
  {
    files: ["**/*.test.*", "**/*.spec.*", "**/test/**", "**/__tests__/**"],
    rules: {
      "no-restricted-globals": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-restricted-types": "off",
    },
  },
];
