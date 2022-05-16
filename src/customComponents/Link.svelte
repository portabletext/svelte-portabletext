<script lang="ts">
  import type {MarkComponentProps} from '$lib/rendererTypes'

  export let portableText: MarkComponentProps<{
    href: string
  }>
</script>

<a href={portableText.value.href} target="_blank">
  <slot />
</a>
