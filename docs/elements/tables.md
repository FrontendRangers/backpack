---
layout: pattern
title: Tables
description: This are the tables
section: elements
---
## Default
### Headings on top
{% example %}
<table class="table">
  <caption>Table title</caption>
  <thead>
    <tr>
      <th>header</th>
      <th>header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data</td>
      <td>data</td>
    </tr>
  </tbody>
</table>
{% endexample %}
### Headings on side
{% example %}
<table class="table">
  <caption>Table title</caption>
  <tbody>
    <tr>
      <th>header</th>
      <td>data</td>
      <td>data</td>
    </tr>
    <tr>
      <th>header</th>
      <td>data</td>
      <td>data</td>
    </tr>
  </tbody>
</table>
{% endexample %}
### Cross-Axis headings
{% example %}
<table class="table">
  <caption>Table title</caption>
  <thead>
    <tr>
      <th>header</th>
      <th>header</th>
      <th>header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>header</th>
      <td>data</td>
      <td>data</td>
    </tr>
    <tr>
      <th>header</th>
      <td>data</td>
      <td>data</td>
    </tr>
  </tbody>
</table>
{% endexample %}
## Variations
### Striped
{% example %}
<table class="table table--striped">
  <caption>Table title</caption>
  <tbody>
    <tr>
      <th>header</th>
      <td>data</td>
      <td>data</td>
    </tr>
    <tr>
      <th>header</th>
      <td>data</td>
      <td>data</td>
    </tr>
  </tbody>
</table>
{% endexample %}

### Bordered
{% example %}
<table class="table table--bordered">
  <caption>Table title</caption>
  <tbody>
    <tr>
      <th>header</th>
      <td>data</td>
      <td>data</td>
    </tr>
    <tr>
      <th>header</th>
      <td>data</td>
      <td>data</td>
    </tr>
  </tbody>
</table>
{% endexample %}