<script lang="ts">
  import type {ListComponentProps} from '$lib/rendererTypes'

  type Props = {
    portableText: ListComponentProps
    children?: import('svelte').Snippet
  }

  let {portableText, children}: Props = $props()

  let {value} = $derived(portableText)
</script>

<ul style="list-style-type: a">
  I'm a list with {value.children.length} direct children.
  {@render children?.()}
</ul>
