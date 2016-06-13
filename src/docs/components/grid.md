---
title: Grid
description: The grid
section: globals
---
## Default
### Auto grid
<p class="sg">Using <code>.Grid-cell-</code> will create an automatic Grid-cell-umn. Space in a Grid will will be distributed between the number of <code>.Grid-cell-</code> inside it.</p>
```html
<div class="Grid">
    <div class="Grid-cell"><p></p></div>
</div>
<div class="Grid">
    <div class="Grid-cell"><p></p></div>
    <div class="Grid-cell"><p></p></div>
</div>
```

### Halves
```html
<div class="Grid">
    <div class="Grid-cell--1of2"><p></p></div>
    <div class="Grid-cell--1of2"><p></p></div>
</div>
```

### Thirds
```html
<div class="Grid">
    <div class="Grid-cell--1of3"><p></p></div>
    <div class="Grid-cell--1of3"><p></p></div>
    <div class="Grid-cell--1of3"><p></p></div>
</div>
<div class="Grid">
    <div class="Grid-cell--1of3"><p></p></div>
    <div class="Grid-cell--2of3"><p></p></div>
</div>
```

### Fourth
```html
<div class="Grid">
    <div class="Grid-cell--1of4"><p></p></div>
    <div class="Grid-cell--1of4"><p></p></div>
    <div class="Grid-cell--1of4"><p></p></div>
    <div class="Grid-cell--1of4"><p></p></div>
</div>
<div class="Grid">
    <div class="Grid-cell--1of4"><p></p></div>
    <div class="Grid-cell--3of4"><p></p></div>
</div>
<div class="Grid">
    <div class="Grid-cell--2of4"><p></p></div>
    <div class="Grid-cell--1of4"><p></p></div>
    <div class="Grid-cell--1of4"><p></p></div>
</div>
```

### Fifth
```html
<div class="Grid">
    <div class="Grid-cell--1of5"><p></p></div>
    <div class="Grid-cell--1of5"><p></p></div>
    <div class="Grid-cell--1of5"><p></p></div>
    <div class="Grid-cell--1of5"><p></p></div>
    <div class="Grid-cell--1of5"><p></p></div>
</div>
<div class="Grid">
    <div class="Grid-cell--1of5"><p></p></div>
    <div class="Grid-cell--3of5"><p></p></div>
    <div class="Grid-cell--1of5"><p></p></div>
</div>
<div class="Grid">
    <div class="Grid-cell--2of5"><p></p></div>
    <div class="Grid-cell--3of5"><p></p></div>
</div>
<div class="Grid">
    <div class="Grid-cell--2of5"><p></p></div>
    <div class="Grid-cell--1of5"><p></p></div>
    <div class="Grid-cell--2of5"><p></p></div>
</div>
```
