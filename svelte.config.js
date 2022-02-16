import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    package: {
      // Only include index.ts to the package.json definitions
      exports: (filePath) => {
        if (filePath.includes('index')) {
          return true
        }
        return false
      }
    }
  }
}

export default config
