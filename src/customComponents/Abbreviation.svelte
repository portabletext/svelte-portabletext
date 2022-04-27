<script lang="ts">
  import type {MarkComponentProps} from '$lib/rendererTypes'

  export let portableText: MarkComponentProps<{
    full: string
  }>
</script>

<abbr title={portableText.markDef.full}>
  <slot />
</abbr>
