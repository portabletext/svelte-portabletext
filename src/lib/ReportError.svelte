<script lang="ts">
  // This exists as a component instead of a function to allow for simpler handling in BlockRenderer, PortableText & BlockWrapper without rendering an "undefined" to the HTML
  export let message: string = 'error'

  $: console.info(`[PortableText] ${message}`)
</script>
