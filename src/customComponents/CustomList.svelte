<script lang="ts">
  import type {ListProps} from '$lib/rendererTypes'

  export let portableText: ListProps

  $: ({list} = portableText)
</script>

<ul style="list-style-type: a">
  I'm a list with {list.children.length} direct children.
  <slot />
</ul>
