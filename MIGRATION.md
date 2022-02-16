# Migrating to @portabletext/svelte v1

## `serializers` renamed to `components`

## `blockStyles` renamed to `block`

## `blocks` renamed to `input`

## SpanProps['block'] renamed to SpanProps['parentBlock']

To align with `BlockProps`

## `PortableText` is now a named import

```svelte
<script>
  // Before
  import PortableText from '@portabletext/svelte'

  // After (`^1.0.0`)
  import {PortableText} from '@portabletext/svelte'
</script>
```

## Access to `toPlainText`
