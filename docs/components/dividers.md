---
title: Dividers
description: Dividers are great to give space between 2 blocks of content.
section: components
---
## Default
A single line with margin. Can be a <code>hr</code> or a <code>div</code>

{% example %}
<hr class="divider">
{% endexample %}

{% exampleCode %}
{% highlight html %}
<hr class="divider">
<div class="divider"></div>
{% endhighlight %}
{% endexampleCode %}

## Variations
### Empty space
Use this to make spaces between elements

{% exampleCode %}
{% highlight html %}
<hr class="divider divider--space">
<div class="divider divider--space"></div>
{% endhighlight %}
{% endexampleCode %}

### Divider with content
Use this with an icon, an image or text content.

{% example %}
<div class="divider divider--visual">
  <div class="divider-content"><p>Hello World</p></div>
</div>
<div class="divider divider--visual">
  <div class="divider-content"><img src="https://placekitten.com/g/48/48" alt=""></div>
</div>
{% endexample %}

#### With alignment
{% example %}
<div class="divider">
  <div class="divider-content divider-content--left"><p>Hello World</p></div>
</div>
<div class="divider">
  <div class="divider-content divider-content--right"><p>Hello World</p></div>
</div>
<div class="divider">
  <div class="divider-content divider-content--left"><img src="https://placekitten.com/g/48/48" alt=""></div>
</div>
<div class="divider">
  <div class="divider-content divider-content--right"><img src="https://placekitten.com/g/48/48" alt=""></div>
</div>
{% endexample %}
