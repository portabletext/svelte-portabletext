<script lang="ts">
  import type {MarkProps} from '$lib/rendererTypes'

  export let portableText: MarkProps<{
    href: string
  }>
</script>

<a href={portableText.mark.href} target="_blank">
  <slot />
</a>
