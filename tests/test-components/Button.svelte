<!-- Used by 026 -->
<script lang="ts">
  import type {CustomBlockComponentProps} from '../../src/lib/rendererTypes'

  type Props = {
    portableText: CustomBlockComponentProps<{text?: string}>
  }

  let {portableText}: Props = $props()

  let {text} = $derived(portableText.value || {})
</script>

<button>
  {text}
</button>
