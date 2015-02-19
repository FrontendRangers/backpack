---
layout: pattern
title: Grid
description: The grid
section: globals
---
## Default
### Auto grid
<p class="sg">Using <code>.col</code> will create an automatic column. Space in a row will will be distributed between the number of <code>.col</code> inside it.</p>
<div class="show-grid">
  {% example %}
  <div class="wrapper">
    <div class="row">
      <div class="col"><p></p></div>
    </div>
    <div class="row">
      <div class="col"><p></p></div>
      <div class="col"><p></p></div>
    </div>
  </div>
  {% endexample %}
</div>

### Halves
<div class="show-grid">
  {% example %}
  <div class="wrapper">
    <div class="row">
      <div class="col-1of2"><p></p></div>
      <div class="col-1of2"><p></p></div>
    </div>
  </div>
  {% endexample %}
</div>

### Thirds
<div class="show-grid">
  {% example %}
  <div class="wrapper">
    <div class="row">
      <div class="col-1of3"><p></p></div>
      <div class="col-1of3"><p></p></div>
      <div class="col-1of3"><p></p></div>
    </div>
    <div class="row">
      <div class="col-1of3"><p></p></div>
      <div class="col-2of3"><p></p></div>
    </div>
  </div>
  {% endexample %}
</div>

### Fourth
<div class="show-grid">
  {% example %}
  <div class="wrapper">
    <div class="row">
      <div class="col-1of4"><p></p></div>
      <div class="col-1of4"><p></p></div>
      <div class="col-1of4"><p></p></div>
      <div class="col-1of4"><p></p></div>
    </div>
    <div class="row">
      <div class="col-1of4"><p></p></div>
      <div class="col-3of4"><p></p></div>
    </div>
    <div class="row">
      <div class="col-2of4"><p></p></div>
      <div class="col-1of4"><p></p></div>
      <div class="col-1of4"><p></p></div>
    </div>
  </div>
  {% endexample %}
</div>

### Fifth
<div class="show-grid">
  {% example %}
  <div class="wrapper">
    <div class="row">
      <div class="col-1of5"><p></p></div>
      <div class="col-1of5"><p></p></div>
      <div class="col-1of5"><p></p></div>
      <div class="col-1of5"><p></p></div>
      <div class="col-1of5"><p></p></div>
    </div>
    <div class="row">
      <div class="col-1of5"><p></p></div>
      <div class="col-3of5"><p></p></div>
      <div class="col-1of5"><p></p></div>
    </div>
    <div class="row">
      <div class="col-2of5"><p></p></div>
      <div class="col-3of5"><p></p></div>
    </div>
    <div class="row">
      <div class="col-2of5"><p></p></div>
      <div class="col-1of5"><p></p></div>
      <div class="col-2of5"><p></p></div>
    </div>
  </div>
  {% endexample %}
</div>

## Variables
### Settings
<code>$layout-width</code>
### Class Names
<code>.col</code>
## Shortcodes
| Shortcode |   |
|-----------|---|
| World     |   |
|           |   |
|           |   |