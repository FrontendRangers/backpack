---
title: Forms
description: This are the forms
section: components
status: Not Ready
---

## Base
### Simple
```html
<form action="#" method="post">
  <div class="Field">
    <label class="Field-label" for="name">Text Input</label>
    <input type="text" name="name" id="name" value="" tabindex="1" />
  </div>
  <div class="Field">
    <label class="Field-label" for="name">Text Input</label>
    <input type="text" name="name" id="name" value="" tabindex="1" placeholder="With a placeholder"/>
  </div>
  <div class="Field">
    <label class="Field-label" for="name">Text Input</label>
    <input type="text" name="name" id="name" value="" tabindex="1" />
  </div>
  <div class="form-actions">
    <input type="submit" value="Submit" />
  </div>
</form>
```

### Field with sublabel
```html
<form action="#" method="post">
  <div class="Field Field--sublabel">
    <label for="name">Text Input</label>
    <div class="Field">
      <label class="Field-label" for="name">Text Input</label>
      <input type="text" name="name" id="name" value="" tabindex="1" />
    </div>
    <div class="Field">
      <label class="Field-label" for="name">Text Input</label>
      <input type="text" name="name" id="name" value="" tabindex="1" />
    </div>
  </div>
</form>
```

### Field with description
```html
<form action="#" method="post">
  <div class="Field">
    <label class="Field-label" for="name">Text Input</label>
    <input type="text" name="name" id="name" value="" tabindex="1" />
    <span class="Field-description">A description</span>
  </div>
</form>
```
