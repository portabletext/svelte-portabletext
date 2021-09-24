<script lang="ts">
  import type {SpanProps} from './rendererTypes'
  import ReportError from './ReportError.svelte'

  export let portableText: SpanProps
  $: span = portableText.span
  $: block = portableText.block
  $: serializers = portableText.serializers

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
  $: nestedProps = {
    ...portableText,
    span: nestedSpan
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
  <svelte:component this={customComponent} portableText={{...portableText, marks: currentMark}}>
    <!-- Inside the custom component, render BlockSpan with remaining marks -->
    <svelte:self portableText={nestedProps}>
      <slot />
    </svelte:self>
  </svelte:component>
{:else if currentMark === 'strong'}
  <strong>
    <svelte:self portableText={nestedProps}>
      <slot />
    </svelte:self>
  </strong>
{:else if currentMark === 'em'}
  <em>
    <svelte:self portableText={nestedProps}>
      <slot />
    </svelte:self>
  </em>
{:else if currentMark === 'code'}
  <code>
    <svelte:self portableText={nestedProps}>
      <slot />
    </svelte:self>
  </code>
{:else if currentMark === 'underline'}
  <u>
    <svelte:self portableText={nestedProps}>
      <slot />
    </svelte:self>
  </u>
{:else if currentMark === 'strike-through'}
  <s>
    <svelte:self portableText={nestedProps}>
      <slot />
    </svelte:self>
  </s>
{:else}
  <ReportError
    message="Mark of type {typeof currentMark === 'string'
      ? currentMark
      : currentMark._type} has no compatible renderer or is missing markDefs (block {block._key}, child {span._key})"
    ignoreUnknownTypes={portableText.ignoreUnknownTypes}
  />
  <!-- Unsupported mark _type - let's render the plain text -->
  <svelte:self portableText={nestedProps}>
    <slot />
  </svelte:self>
{/if}
