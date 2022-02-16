<script lang="ts">
  import type {SpanProps} from './rendererTypes'
  import ReportError from './ReportError.svelte'

  export let portableText: SpanProps
  $: span = portableText.span
  $: block = portableText.block
  $: components = portableText.components

  $: allMarks = span.marks || []

  // Let's start with the first mark
  $: currentMark =
    // If the mark references an entry in markDefs, use that object as the currentMark
    (block?.markDefs || []).find((def) => def._key === allMarks[0]) || allMarks[0]

  // If we have more marks, we'll render a nested BlockSpan with remaining marks
  $: nestedSpan = {
    ...span,
    marks: allMarks.slice(1)
  }
  $: nestedProps = {
    ...portableText,
    span: nestedSpan
  }

  $: component = components?.marks
    ? typeof currentMark === 'string'
      ? components.marks[currentMark]
      : components.marks[currentMark?._type]
    : undefined
</script>

{#if !currentMark}
  <!-- If no current mark, render only the text without wrapping elements -->
  <slot />
{:else if component}
  <svelte:component this={component} portableText={{...portableText, mark: currentMark}}>
    <!-- Inside the custom component, render BlockSpan with remaining marks -->
    <svelte:self portableText={nestedProps}>
      <slot />
    </svelte:self>
  </svelte:component>
{:else}
  <ReportError
    message="Mark of type {typeof currentMark === 'string'
      ? currentMark
      : currentMark._type} has no compatible renderer or is missing markDefs (block {block._key}, child {span._key})"
    ignoreUnknownTypes={portableText.ignoreUnknownTypes || !!components?.unknownMark}
  />
  {#if components?.unknownMark}
    <svelte:component
      this={components.unknownMark}
      portableText={{...portableText, mark: currentMark}}
    >
      <slot />
    </svelte:component>
  {:else}
    <!-- Unsupported mark _type - let's render the plain text -->
    <svelte:self portableText={nestedProps}>
      <slot />
    </svelte:self>
  {/if}
{/if}
