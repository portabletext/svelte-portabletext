import {sveltekit} from '@sveltejs/kit/vite'
import {defineConfig} from 'vitest/config'
import {svelteTesting} from '@testing-library/svelte/vite'

export default defineConfig({
  plugins: [sveltekit(), svelteTesting()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/**/*.{test,spec}.{js,ts}']
  }
})
