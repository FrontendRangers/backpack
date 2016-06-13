---
title: Accordions
description: The Accordion
section: components
status: Not Ready
---

## Default

```html
<div class="Accordion">
    <div class="Accordion-pane is-active">
        <div class="Accordion-title">
            Accordion Pane 1
        </div>
        <div class="Accordion-content">
            <p>Content for accordion pane 1</p>
        </div>
    </div>
    <div class="Accordion-pane">
        <div class="Accordion-title">
            Accordion Pane 2
        </div>
        <div class="Accordion-content">
            <p>Content for accordion pane 2</p>
        </div>
    </div>
    <div class="Accordion-pane">
        <div class="Accordion-title">
            Accordion Pane 3
        </div>
        <div class="Accordion-content">
            <p>Content for accordion pane 3</p>
        </div>
    </div>
</div>
```

## With radio buttons

> You can disable accordions with radio buttons like this: `$accordions-radio: false;`

```html
<div class="Accordion">
    <div class="Accordion-pane">
        <input id="accordion-1a" type="radio" name="accordion-1" checked>
        <label for="accordion-1a" class="Accordion-title">
            Accordion Pane 1
        </label>
        <div class="Accordion-content">
            <p>Content for accordion pane 1</p>
        </div>
    </div>
    <div class="Accordion-pane">
        <input id="accordion-1b" type="radio" name="accordion-1">
        <label for="accordion-1b" class="Accordion-title">
            Accordion Pane 2
        </label>
        <div class="Accordion-content">
            <p>Content for accordion pane 2</p>
        </div>
    </div>
    <div class="Accordion-pane">
        <input id="accordion-1c" type="radio" name="accordion-1">
        <label for="accordion-1c" class="Accordion-title">
            Accordion Pane 3
        </label>
        <div class="Accordion-content">
            <p>Content for accordion pane 3</p>
        </div>
    </div>
</div>
```
