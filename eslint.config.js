import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'

export default [
  {
    ignores: [
      '.DS_Store',
      'node_modules',
      'build',
      '.svelte-kit',
      'package',
      'dist',
      '.env',
      '.env.*',
      'pnpm-lock.yaml',
      'package-lock.json',
      'yarn.lock',
      'tests/render-tests/050-custom-block-type.svelte'
    ]
  },
  js.configs.recommended,
  ...tsPlugin.configs['flat/recommended'],
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    languageOptions: {
      globals: {...globals.browser, ...globals.node}
    }
  },
  {
    rules: {
      // Hrefs come from Portable Text content, not SvelteKit routes
      'svelte/no-navigation-without-resolve': 'off',
      // Portable Text blocks and spans are not guaranteed to have unique keys
      'svelte/require-each-key': 'off'
    }
  },
  {
    files: ['**/*.svelte', '**/*.svelte.ts'],
    languageOptions: {
      parserOptions: {
        parser: tsParser
      }
    }
  }
]
