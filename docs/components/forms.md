---
title: Forms
description: This are the forms
section: components
---

## Default
### Simple
{% example %}
<form action="#" method="post">
  <div class="field-container">
    <label for="name">Text Input</label>
    <input type="text" name="name" id="name" value="" tabindex="1" />
  </div>
  <div class="field-container">
    <label for="name">Text Input</label>
    <input type="text" name="name" id="name" value="" tabindex="1" placeholder="With a placeholder"/>
  </div>
  <div class="field-container">
    <label for="name">Text Input</label>
    <input type="text" name="name" id="name" value="" tabindex="1" />
  </div>
  <div class="form-actions">
    <input type="submit" value="Submit" />
  </div>
</form>
{% endexample %}

### Field with sublabel
{% example %}
<form action="#" method="post">
  <div class="field-container field-sublabel">
    <label for="name">Text Input</label>
    <div class="field-container">
      <label for="name">Text Input</label>
      <input type="text" name="name" id="name" value="" tabindex="1" />
    </div>
    <div class="field-container">
      <label for="name">Text Input</label>
      <input type="text" name="name" id="name" value="" tabindex="1" />
    </div>
  </div>
</form>
{% endexample %}

### Field with description
{% example %}
<form action="#" method="post">
  <div class="field-container">
    <label for="name">Text Input</label>
    <input type="text" name="name" id="name" value="" tabindex="1" />
    <span class="field-desc">A description</span>
  </div>
</form>
{% endexample %}
