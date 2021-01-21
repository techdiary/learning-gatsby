module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
}
