<script lang="ts">
  import type {CustomBlockComponentProps} from '$lib/rendererTypes'

  export let portableText: CustomBlockComponentProps<{
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
