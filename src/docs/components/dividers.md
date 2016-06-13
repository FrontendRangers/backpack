---
title: Dividers
description: Dividers are great to give space between 2 blocks of content.
section: components
---
## Default
A single line with margin. Can be a <code>hr</code> or a <code>div</code>

```html
<hr class="Divider">
```

```html
<hr class="Divider">
<div class="Divider"></div>
```

## Variations
### Empty space
Use this to make spaces between elements

```html
<hr class="Divider Divider--space">
<div class="Divider Divider--space"></div>
```

### Divider with content
Use this with an icon, an image or text content.

```html
<div class="Divider Divider--visual">
  <div class="Divider-content"><p>Hello World</p></div>
</div>
<div class="Divider Divider--visual">
  <div class="Divider-content"><img src="https://placekitten.com/g/48/48" alt=""></div>
</div>
```

#### With alignment
```html
<div class="Divider">
  <div class="Divider-content Divider-content--left"><p>Hello World</p></div>
</div>
<div class="Divider">
  <div class="Divider-content Divider-content--right"><p>Hello World</p></div>
</div>
<div class="Divider">
  <div class="Divider-content Divider-content--left"><img src="https://placekitten.com/g/48/48" alt=""></div>
</div>
<div class="Divider">
  <div class="Divider-content Divider-content--right"><img src="https://placekitten.com/g/48/48" alt=""></div>
</div>
```
