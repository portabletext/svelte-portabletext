import adapter from '@sveltejs/adapter-auto'
import {sveltekit} from '@sveltejs/kit/vite'
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte'
import {svelteTesting} from '@testing-library/svelte/vite'
import {defineConfig} from 'vitest/config'

export default defineConfig({
  plugins: [
    sveltekit({
      preprocess: vitePreprocess(),
      adapter: adapter(),
      compilerOptions: {
        runes: true
      }
    }),
    svelteTesting()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/**/*.{test,spec}.{js,ts}']
  }
})
