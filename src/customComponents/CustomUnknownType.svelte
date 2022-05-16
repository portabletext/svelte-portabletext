<script lang="ts">
  import type {CustomBlockComponentProps} from '$lib/rendererTypes'

  export let portableText: CustomBlockComponentProps
</script>

<div style="font-size: 0.8em;">
  <h2>I'm an unnown block type! (<code>{portableText.value._type}</code>)</h2>

  <pre>
    <code>
      {JSON.stringify(
        {
          value: portableText.value,
          index: portableText.indexInParent
        },
        null,
        2
      )}
    </code>
  </pre>
</div>
