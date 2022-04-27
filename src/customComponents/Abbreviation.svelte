<script lang="ts">
  import type {MarkComponentProps} from '$lib/rendererTypes'

  export let portableText: MarkComponentProps<{
    full: string
  }>
</script>

<abbr title={portableText.value.full}>
  <slot />
</abbr>
