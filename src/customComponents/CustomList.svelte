<script lang="ts">
  import type {ListComponentProps} from '$lib/rendererTypes'

  export let portableText: ListComponentProps

  $: ({value} = portableText)
</script>

<ul style="list-style-type: a">
  I'm a list with {value.children.length} direct children.
  <slot />
</ul>
