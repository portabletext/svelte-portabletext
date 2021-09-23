<script lang="ts">
  import type {BlockSpan, PTBlock, Serializers} from './ptTypes'
  import ReportError from './ReportError.svelte'

  export let block: PTBlock
  export let span: BlockSpan
  export let serializers: Serializers = undefined

  $: allMarks = span.marks || []

  // Let's start with the first mark
  $: currentMark =
    // If the mark references an entry in markDefs, use that object as the currentMark
    block.markDefs.find((def) => def._key === allMarks[0]) || allMarks[0]

  // If we have more marks, we'll render a nested BlockSpan with remaining marks
  $: nestedSpan = {
    ...span,
    marks: allMarks.slice(1)
  }

  $: customComponent = serializers?.marks
    ? typeof currentMark === 'string'
      ? serializers.marks[currentMark]
      : serializers.marks[currentMark?._type]
    : undefined
</script>

{#if !currentMark}
  <!-- If no current mark, render only the text without wrapping elements -->
  <slot />
{:else if customComponent}
  <svelte:component this={customComponent} {block} {span} mark={currentMark}>
    <!-- Inside the custom component, render BlockSpan with remaining marks -->
    <svelte:self {block} span={nestedSpan} {serializers}>
      <slot />
    </svelte:self>
  </svelte:component>
{:else if currentMark === 'strong'}
  <strong>
    <svelte:self {block} span={nestedSpan} {serializers}>
      <slot />
    </svelte:self>
  </strong>
{:else if currentMark === 'em'}
  <em>
    <svelte:self {block} span={nestedSpan} {serializers}>
      <slot />
    </svelte:self>
  </em>
{:else if currentMark === 'code'}
  <code>
    <svelte:self {block} span={nestedSpan} {serializers}>
      <slot />
    </svelte:self>
  </code>
{:else if currentMark === 'underline'}
  <u>
    <svelte:self {block} span={nestedSpan} {serializers}>
      <slot />
    </svelte:self>
  </u>
{:else if currentMark === 'strike-through'}
  <s>
    <svelte:self {block} span={nestedSpan} {serializers}>
      <slot />
    </svelte:self>
  </s>
{:else}
  <ReportError
    message="Mark of type {typeof currentMark === 'string'
      ? currentMark
      : currentMark._type} has no compatible renderer or is missing markDefs (block {block._key}, child {span._key})"
  />
  <!-- Unsupported mark _type - let's render the plain text -->
  <svelte:self {block} span={nestedSpan} {serializers}>
    <slot />
  </svelte:self>
{/if}
