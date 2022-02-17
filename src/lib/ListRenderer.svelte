<script lang="ts">
  import EntriesRenderer from './EntriesRenderer.svelte'
  import ListWrapper from './ListWrapper.svelte'
  import type {ListComponentProps} from './rendererTypes'

  export let portableText: ListComponentProps
</script>

<ListWrapper {portableText}>
  <EntriesRenderer {...portableText} blocks={portableText.value.children} />
</ListWrapper>
