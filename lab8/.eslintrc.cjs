module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/rules/react'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "max-len": ["error", { "code": 120 }], // Tamaño maximo de linea de codigo de 120, para tener codigo legible
    "semi": ["error", "never"] // Disable the semicolons
  },
};
