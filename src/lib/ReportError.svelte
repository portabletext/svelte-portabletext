<script lang="ts">
  // This exists as a component instead of a function to allow for simpler handling in BlockRenderer, PortableText & BlockWrapper without rendering an "undefined" to the HTML
  export let message: string = 'error'
  export let ignoreUnknownTypes = true

  $: if (ignoreUnknownTypes) {
    console.info(`[PortableText] ${message}`)
  } else {
    throw `[PortableText] ${message}`
  }
</script>
