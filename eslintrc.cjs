module.exports = {
  root: true,
  plugins: ["wdio"],
  extends: ["eslint:recommended", "plugin:wdio/recommended"],
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  globals: {
    browser: true,
    driver: true,
    $: true,
    $$: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    indent: [2, 4],
    "no-multiple-empty-lines": [2, { max: 1, maxEOF: 1 }],
    "array-bracket-spacing": ["error", "never"],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    camelcase: ["error", { properties: "never" }],
    "comma-spacing": ["error", { before: false, after: true }],
    "no-lonely-if": "error",
    "no-else-return": "error",
    "no-tabs": "error",
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    quotes: ["error", "single", { avoidEscape: true }],
    "unicode-bom": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "keyword-spacing": ["error"],
    "require-atomic-updates": 0,
    "no-unexpected-multiline": 0,
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "no-unused-vars": "error",
        "no-undef": "off",
        "no-redeclare": "off",
      },
    },
  ],
};
