---
layout: pattern
title: Tabs
description: The tabs
section: components
---

## Default
{% example %}
<div class="tabs">
  <nav class="tabs-nav-container">
    <ul class="tabs-nav">
      <li>
        <a data-tab="tab1">Tab 1</a>
      </li>
      <li>
        <a data-tab="tab2">Tab 2</a>
      </li>
      <li>
        <a data-tab="tab3">Tab 3</a>
      </li>
    </ul>
  </nav>
  <ul class="tabs-content">
    <li class="tab-pane" id="tab1">
      <p>Content for tab 1</p>
    </li>
    <li class="tab-pane" id="tab2">
      <h1>Si enim ad populum me vocas, eum.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque his sapiens semper vacabit. Immo videri fortasse. Ostendit pedes et pectus. Nos cum te, M. Duo Reges: constructio interrete. </p>
      <h2>Utilitatis causa amicitia est quaesita.</h2>
      <p>Bonum liberi: misera orbitas. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Proclivi currit oratio. </p>
      <p>Sed hoc sane concedamus. Tenent mordicus. Si id dicis, vicimus. </p>
    </li>
    <li class="tab-pane" id="tab3">
      <p>Content for tab 3</p>
    </li>
  </ul>
</div>
{% endexample %}

## Variations
### Vertical Tabs
{% example %}
<div class="tabs tabs--vertical">
  <nav class="tabs-nav-container">
    <ul class="tabs-nav">
      <li>
        <a data-tab="vtab1">Tab 1</a>
      </li>
      <li>
        <a data-tab="vtab2">Tab 2</a>
      </li>
      <li>
        <a data-tab="vtab3">Tab 3</a>
      </li>
    </ul>
  </nav>
  <ul class="tabs-content">
    <li class="tab-pane" id="vtab1">
      <p>Content for tab 1</p>
    </li>
    <li class="tab-pane" id="vtab2">
      <h1>Si enim ad populum me vocas, eum.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque his sapiens semper vacabit. Immo videri fortasse. Ostendit pedes et pectus. Nos cum te, M. Duo Reges: constructio interrete. </p>
      <h2>Utilitatis causa amicitia est quaesita.</h2>
      <p>Bonum liberi: misera orbitas. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Proclivi currit oratio. </p>
      <p>Sed hoc sane concedamus. Tenent mordicus. Si id dicis, vicimus. </p>
    </li>
    <li class="tab-pane" id="vtab3">
      <p>Content for tab 3</p>
    </li>
  </ul>
</div>
{% endexample %}

### Aligned right
{% example %}
<div class="tabs tabs--vertical tabs--right">
  <nav class="tabs-nav-container">
    <ul class="tabs-nav">
      <li>
        <a data-tab="vrtab1">Tab 1</a>
      </li>
      <li>
        <a data-tab="vrtab2">Tab 2</a>
      </li>
      <li>
        <a data-tab="vrtab3">Tab 3</a>
      </li>
    </ul>
  </nav>
  <ul class="tabs-content">
    <li class="tab-pane" id="vrtab1">
      <p>Content for tab 1</p>
    </li>
    <li class="tab-pane" id="vrtab2">
      <h1>Si enim ad populum me vocas, eum.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque his sapiens semper vacabit. Immo videri fortasse. Ostendit pedes et pectus. Nos cum te, M. Duo Reges: constructio interrete. </p>
      <h2>Utilitatis causa amicitia est quaesita.</h2>
      <p>Bonum liberi: misera orbitas. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Proclivi currit oratio. </p>
      <p>Sed hoc sane concedamus. Tenent mordicus. Si id dicis, vicimus. </p>
    </li>
    <li class="tab-pane" id="vrtab3">
      <p>Content for tab 3</p>
    </li>
  </ul>
</div>
{% endexample %}