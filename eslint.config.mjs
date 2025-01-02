import js from "@eslint/js";
import * as typescriptParser from "@typescript-eslint/parser";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import * as svelteParser from "svelte-eslint-parser";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist/*"] },
  js.configs.recommended,
  svelte.configs["flat/recommended"],
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: typescriptParser,
        extraFileExtensions: [".svelte"],
      },
      globals: {
        ...globals.browser,
      },
    },
  }
);
