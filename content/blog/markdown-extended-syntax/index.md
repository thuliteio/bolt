---
title: "Markdown Extended Syntax"
description: "This Markdown cheat sheet provides a quick overview of all extended Markdown syntax elements."
date: 2022-12-21T18:56:30+01:00
lastmod: 2022-12-21T18:56:30+01:00
draft: false
weight: 50
images: []
tags: ["Bolt", "Markdown", "Cheat sheet"]
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

This Markdown cheat sheet provides a quick overview of all extended Markdown syntax elements. If you need more information about any of these elements, refer to the reference guide for [extended syntax](https://www.markdownguide.org/extended-syntax).

## Table

```md
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |
```

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

## Fenced Code Block

````md
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

## Footnote

```md
Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.
```

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

## Heading ID

```md
### My Great Heading{#custom-id}
```

### My Great Heading{#custom-id}

```html
<h3 id="custom-id">My Great Heading</h3>
```

## Definition List

```md
term
: definition
```

term
: definition

## Strikethrough

```md
~~The world is flat.~~
```

~~The world is flat.~~

## Task List

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
{.list-unstyled}
```

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
{.list-unstyled}

## Emoji

<pre><code class="language-md">That is so funny! &#58;joy:</code></pre>

That is so funny! :joy:

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

## Highlight

```md
I need to highlight these <mark>very important words</mark>.
```

I need to highlight these <mark>very important words</mark>.

(See also [Hugo Markdown Support](https://www.markdownguide.org/tools/hugo/#hugo-markdown-support))

## Subscript

```md
H<sub>2</sub>O
```

H<sub>2</sub>O

(See also [Hugo Markdown Support](https://www.markdownguide.org/tools/hugo/#hugo-markdown-support))

## Superscript

```md
X<sup>2</sup>
```

X<sup>2</sup>

(See also [Hugo Markdown Support](https://www.markdownguide.org/tools/hugo/#hugo-markdown-support))
