
import Rendered from "./009-messy-link-text.svelte"

export default {
  name: "009-messy-link-text",
  rendered: Rendered,
  blocks: [
  {
    "_type": "block",
    "children": [
      {
        "_key": "a1ph4",
        "_type": "span",
        "marks": [
          "zomgLink"
        ],
        "text": "Sanity"
      },
      {
        "_key": "b374",
        "_type": "span",
        "marks": [],
        "text": " can be used to power almost any "
      },
      {
        "_key": "ch4r1i3",
        "_type": "span",
        "marks": [
          "zomgLink",
          "strong",
          "em"
        ],
        "text": "app"
      },
      {
        "_key": "d3174",
        "_type": "span",
        "marks": [
          "em",
          "zomgLink"
        ],
        "text": " or website"
      },
      {
        "_key": "ech0",
        "_type": "span",
        "marks": [],
        "text": "."
      }
    ],
    "markDefs": [
      {
        "_key": "zomgLink",
        "_type": "link",
        "href": "https://sanity.io/"
      }
    ],
    "style": "blockquote"
  }
]
}