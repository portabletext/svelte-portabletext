<script lang="ts">
  import type {MarkComponentProps} from '$lib/rendererTypes'

  type Props = {
    portableText: MarkComponentProps<{
      full: string
    }>
    children?: import('svelte').Snippet
  }

  let {portableText, children}: Props = $props()
</script>

<abbr title={portableText.value.full}>
  {@render children?.()}
</abbr>
