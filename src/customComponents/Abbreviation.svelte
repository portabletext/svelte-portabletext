<script lang="ts">
  import type {MarkProps} from '$lib/rendererTypes'

  export let portableText: MarkProps<{
    full: string
  }>
</script>

<abbr title={portableText.mark.full}>
  <slot />
</abbr>
