<script lang="ts">
  import type {MarkComponentProps} from '$lib/rendererTypes'

  interface Props {
    portableText: MarkComponentProps<{
    href: string
  }>;
    children?: import('svelte').Snippet;
  }

  let { portableText, children }: Props = $props();
</script>

<a href={portableText.value.href} target="_blank">
  {@render children?.()}
</a>
