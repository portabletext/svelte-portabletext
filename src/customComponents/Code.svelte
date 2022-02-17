<script lang="ts">
  import type {BlockComponentProps} from '$lib/rendererTypes'

  export let portableText: BlockComponentProps<{
    code: string
    language: string
  }>

  $: ({value} = portableText)
</script>

<pre>
  <p>{value.language}</p>
  <code>{value.code}</code>
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
