// This data was written by hand.
// In a real-world scenario it'd be generated from the PortableText Editor.
// https://github.com/sanity-io/sanity/tree/next/packages/%40sanity/portable-text-editor
const blocks = [
  {
    _key: 'block-0',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'Custom components'
      }
    ],
    markDefs: [],
    style: 'h1'
  },
  {
    _key: 'image',
    _type: 'image',
    caption: 'Portable text opens cross-platform possibilities',
    image: {
      _id: 'image-3bbe6243a592a32b61819e72a80d3ba86cb9d4c0-176x150-png',
      extension: 'png',
      aspectRatio: 1.1733333333333333,
      url: 'https://cdn.sanity.io/images/3do82whm/next/3bbe6243a592a32b61819e72a80d3ba86cb9d4c0-176x150.png'
    }
  },
  {
    _key: 'code',
    _type: 'code',
    language: 'groq',
    code: `
// The GROQ query to get the image value for the block above
*[_type == "sanity.imageAsset"] {
  _id,
  url,
  extension,
  "aspectRatio": metadata.dimensions.aspectRatio,
}`
  },
  {
    _key: 'hero',
    _type: 'hero',
    title: 'An impactful section',
    subtitle: [
      {
        _key: 'block-0',
        _type: 'block',
        children: [
          {
            _key: 'span-1',
            _type: 'span',
            marks: [],
            text: 'To wow readers with '
          },
          {
            _type: 'span',
            marks: ['strong', 'link-1'],
            text: 'nested Portable Text'
          }
        ],
        markDefs: [
          {
            _type: 'link',
            _key: 'link-1',
            href: 'https://sanity.io/docs'
          }
        ]
      }
    ],
    image: {
      _id: 'image-3bbe6243a592a32b61819e72a80d3ba86cb9d4c0-176x150-png',
      extension: 'png',
      aspectRatio: 1.1733333333333333,
      url: 'https://cdn.sanity.io/images/3do82whm/next/3bbe6243a592a32b61819e72a80d3ba86cb9d4c0-176x150.png'
    }
  },
  {
    _key: 'block-2',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'Blocks can also come inline: '
      },
      {
        _key: 'span-3',
        _type: 'greeter'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'block-3',
    _type: 'block',
    children: [
      {
        _type: 'span',
        marks: [],
        text: 'And custom annotations & marks let you do '
      },
      {
        _type: 'span',
        marks: ['abbr-1'],
        text: 'ALL'
      },
      {
        _type: 'span',
        marks: [],
        text: ' sorts of '
      },
      {
        _type: 'span',
        marks: ['strong', 'fun'],
        text: ' fun stuff!'
      },
      {
        _type: 'span',
        marks: [],
        text: ' Or '
      },
      {
        _type: 'span',
        marks: ['strike-through'],
        text: 'boring'
      },
      {
        _type: 'span',
        marks: [],
        text: ' useful & rich extensions, like '
      },
      {
        _type: 'span',
        marks: ['link-1'],
        text: 'links'
      },
      {
        _type: 'span',
        marks: [],
        text: ' and '
      },
      {
        _type: 'span',
        marks: ['footnote-1'],
        text: ' footnotes'
      },
      {
        _type: 'span',
        marks: [],
        text: ' .'
      }
    ],
    markDefs: [
      {
        _type: 'abbreviation',
        _key: 'abbr-1',
        full: 'Anything Anyone Loves'
      },
      {
        _type: 'link',
        _key: 'link-1',
        href: 'https://sanity.io/docs'
      },
      {
        _type: 'footnote',
        _key: 'footnote-1',
        note: [
          {
            _key: 'block-1',
            _type: 'block',
            children: [
              {
                _type: 'span',
                marks: [],
                text: 'Which could have their own PortableText 🤯. See '
              },
              {
                _type: 'span',
                marks: ['link-1'],
                text: 'this guide'
              },
              {
                _type: 'span',
                marks: [],
                text: ' for how to implement footnotes.'
              }
            ],
            markDefs: [
              {
                _type: 'link',
                _key: 'link-1',
                href: 'https://www.sanity.io/blog/why-structured-text-is-awesome-and-you-totally-want-it-in-your-cms'
              }
            ]
          }
        ]
      }
    ],
    style: 'normal'
  },
  {
    _key: 'block-5',
    _type: 'block',
    children: [
      {
        _type: 'span',
        marks: [],
        text: 'Doing it yourself'
      }
    ],
    style: 'h2'
  },
  {
    _key: 'block-4',
    _type: 'block',
    children: [
      {
        _type: 'span',
        marks: [],
        text: 'These examples are '
      },
      {
        _type: 'span',
        marks: ['link-1'],
        text: 'available here'
      },
      {
        _type: 'span',
        marks: [],
        text: '. You should also '
      },
      {
        _type: 'span',
        marks: ['link-2'],
        text: 'read the docs'
      },
      {
        _type: 'span',
        marks: [],
        text: ' and reach out in the '
      },
      {
        _type: 'span',
        marks: ['link-3'],
        text: 'Sanity community Slack'
      },
      {
        _type: 'span',
        marks: [],
        text: ' (we have a #svelte channel) in case you have any questions 😉'
      }
    ],
    markDefs: [
      {
        _type: 'link',
        _key: 'link-1',
        href: 'https://github.com/portabletext/svelte-portabletext/blob/main/src/routes/custom.svelte'
      },
      {
        _type: 'link',
        _key: 'link-2',
        href: 'https://github.com/portabletext/svelte-portabletext'
      },
      {
        _type: 'link',
        _key: 'link-2',
        href: 'https://slack.sanity.io'
      }
    ]
  }
]

export default blocks
