module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "import",
    "prettier"
  ],
  ignorePatterns: [
    ".eslintrc.js"
  ],
  parserOptions: {
    sourceType: "module",
    project: [
      "tsconfig.json",
      "tsconfig.spec.json"
    ]
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended"
  ],
  rules: {
  }
}
