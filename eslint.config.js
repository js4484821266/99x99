export default [
  {
    files: ["js.js"],
    languageOptions: {
      ecmaVersion: 2015,
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly",
        Math: "readonly",
        Date: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        commence: "writable",
        pause: "writable",
        submit: "writable"
      }
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "double", { "avoidEscape": true }]
    }
  }
];
