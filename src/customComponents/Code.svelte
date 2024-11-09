<script lang="ts">
  import type {CustomBlockComponentProps} from '$lib/rendererTypes'

  type Props = {
    portableText: CustomBlockComponentProps<{
      code: string
      language: string
    }>
  }

  let {portableText}: Props = $props()

  let {value} = $derived(portableText)
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
