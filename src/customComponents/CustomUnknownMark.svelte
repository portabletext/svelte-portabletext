<script lang="ts">
  import type {MarkComponentProps} from '$lib/rendererTypes'

  type Props = {
    portableText: MarkComponentProps
    children?: import('svelte').Snippet
  }

  let {portableText, children}: Props = $props()
</script>

<span>
  I'm an unknown mark ({portableText.markType})! Here's my content:
  <code>{@render children?.()}</code> (see console for my values)
</span>
