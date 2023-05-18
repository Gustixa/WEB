const path = require('path')

module.exports = {
  settings:{
    'import/resolver':{
      alias:{
        map:[
          ['@components', path.resolve(__dirname,'./src/components')],
          ['@logic', path.resolve(__dirname,'./src/logic')]
        ]
      }
    }
  },
  globals:{
    describe: 'readonly',
    it: 'readonly',
    vi: 'readonly',
    expect: 'readonly'
  },
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
    "semi": ["error", "never"],// Disable the semicolons,
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
    }],
  },
};
