<script lang="ts">
  import type {BlockProps} from '$lib/rendererTypes'

  export let portableText: BlockProps<{
    code: string
    language: string
  }>

  $: ({block} = portableText)
</script>

<pre>
  <p>{block.language}</p>
  <code>{block.code}</code>
</pre>

<style>
  p {
    text-transform: uppercase;
    background-color: #444;
    color: white;
    display: inline-block;
    padding: 0.25em;
    margin: 0;
  }
</style>
