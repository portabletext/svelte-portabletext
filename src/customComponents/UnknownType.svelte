<script lang="ts">
  import type {BlockComponentProps} from '$lib/rendererTypes'

  export let portableText: BlockComponentProps
</script>

<div style="font-size: 0.8em;">
  <h2>I'm an unkown block type! (<code>{portableText.value._type}</code>)</h2>

  <pre>
    <code>
      {JSON.stringify(
        {
          value: portableText.value,
          index: portableText.index
        },
        null,
        2
      )}
    </code>
  </pre>
</div>
