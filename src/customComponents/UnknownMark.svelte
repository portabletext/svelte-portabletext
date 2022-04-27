<script lang="ts">
  import type {MarkComponentProps} from '$lib/rendererTypes'

  export let portableText: MarkComponentProps
  $: console.log('Unkown mark: ', {
    mark: portableText.value,
    parentBlock: portableText.parentBlock
  })
</script>

<span>
  I'm an unknown mark! Here's my content:
  <code><slot /></code> (see console for my values)
</span>
