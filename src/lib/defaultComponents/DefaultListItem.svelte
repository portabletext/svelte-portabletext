<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet
  }

  let {children}: Props = $props()
</script>

<li>{@render children?.()}</li>
