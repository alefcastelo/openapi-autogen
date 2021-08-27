module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ['@typescript-eslint/eslint-plugin', "prettier"],
  ignorePatterns: [
    ".eslintrc.js"
  ],
  parserOptions: {
    sourceType: "module",
    project: "tsconfig.spec.json",
    tsconfigRootDir: __dirname,
  },
  extends: [
    "eslint:recommended",
    'plugin:@typescript-eslint/eslint-recommended',
    "plugin:@typescript-eslint/recommended",
    'prettier',
  ],
  rules: {
    semi: ["error", "never"],
  }
}
