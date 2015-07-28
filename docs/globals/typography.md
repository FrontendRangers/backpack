---
layout: pattern
title: Typography
section: Globals
---

### Headings
{% example %}
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
{% endexample %}

#### Headings with icon
{% example %}
  <h1><i class="icon--star"></i> Heading 1</h1>
  <h2><i class="icon--star"></i> Heading 2</h2>
  <h3><i class="icon--star"></i> Heading 3</h3>
  <h4><i class="icon--star"></i> Heading 4</h4>
  <h5><i class="icon--star"></i> Heading 5</h5>
  <h6><i class="icon--star"></i> Heading 6</h6>
{% endexample %}

### Body text
{% example %}
<p>Body text</p>
{% endexample %}

#### Text tranform
{% example %}
<p class="text-left">Body text aligned left</p>
<p class="text-center">Body text aligned center</p>
<p class="text-right">Body text aligned right</p>
{% endexample %}

{% exampleCode %}
{% highlight html %}
<p class="text-left">...</p>
<p class="text-center">...</p>
<p class="text-right">...</p>
{% endhighlight %}
{% endexampleCode %}

### Lead text
{% example %}
<p class="lead">Lead text</p>
{% endexample %}

### Lists
#### Unordered list
{% example %}
<ul>
  <li>Morbi in sem quis dui placerat ornare. </li>
  <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue.</li>
  <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer.</li>
  <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut.</li>
</ul>
{% endexample %}
#### Ordered list
{% example %}
<ol>
  <li>Morbi in sem quis dui placerat ornare. </li>
  <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue.</li>
  <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer.</li>
  <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut.</li>
</ol>
{% endexample %}
#### List with icons
{% example %}
<ul class="list--icons">
  <li><i class="icon--check"></i>Morbi in sem quis dui placerat ornare. </li>
  <li><i class="icon--check"></i>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue.</li>
  <li><i class="icon--check"></i>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer.</li>
  <li><i class="icon--check"></i>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut.</li>
</ul>
{% endexample %}