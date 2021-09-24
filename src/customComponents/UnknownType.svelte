<script lang="ts">
  import type {BlockProps} from '$lib/rendererTypes'

  export let portableText: BlockProps
</script>

<div style="font-size: 0.8em;">
  <h2>I'm an unkown block type! (<code>{portableText.block._type}</code>)</h2>

  <pre>
    <code>
      {JSON.stringify({
        block: portableText.block,
        index: portableText.index,
      }, null, 2)}
    </code>
  </pre>
</div>
