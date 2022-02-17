<script lang="ts">
  import EntriesRenderer from './EntriesRenderer.svelte'
  import ListWrapper from './ListWrapper.svelte'
  import type {ListProps} from './rendererTypes'

  export let portableText: ListProps
</script>

<ListWrapper {portableText}>
  <EntriesRenderer {...portableText} blocks={portableText.list.children} />
</ListWrapper>
