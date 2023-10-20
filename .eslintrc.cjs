module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'sanity/typescript',
    'plugin:svelte/recommended'
  ],
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['*.cjs'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'no-console': 'off',
        'no-undef': 'off',
        'no-negated-condition': 'off'
      }
    }
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
    extraFileExtensions: ['.svelte']
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  rules: {
    indent: 'off',
    'max-len': 'off',
    'implicit-arrow-linebreak': 'off',
    '@typescript-eslint/no-explicit-any': 'warn'
  }
}
