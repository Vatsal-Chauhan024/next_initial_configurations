import {FlatCompat} from "@eslint/eslintrc"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
import unusedImports from "eslint-plugin-unused-imports"
import {dirname} from "path"
import {fileURLToPath} from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      quotes: ["error", "double"],
      "no-console": ["error"],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": "error",
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "no-unreachable": ["error"],
      "no-alert": "error",
      "unicorn/better-regex": ["error"],
      "react/jsx-curly-brace-presence": [
        "error",
        {props: "never", children: "never"},
      ],
      "padding-line-between-statements": [
        "error",
        {blankLine: "always", prev: "import", next: "*"},
        {blankLine: "any", prev: "import", next: "import"},
        {blankLine: "always", prev: "return", next: "*"},
        {blankLine: "always", prev: "*", next: "export"},
      ],
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxEOF: 1,
          maxBOF: 0,
        },
      ],
    },
    ignorePatterns: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  }),
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      unicorn: eslintPluginUnicorn,
    },
  },
]

export default eslintConfig
