<!-- Used by 052, 018 -->
<script lang="ts">
  import type {MarkComponentProps} from '../../src/lib/rendererTypes'

  type Props = {
    portableText: MarkComponentProps<{thickness: number}>
    children?: import('svelte').Snippet
  }

  let {portableText, children}: Props = $props()

  let {thickness} = $derived(portableText.value)
</script>

<span style="border:{thickness}px solid;">
  {@render children?.()}
</span>
