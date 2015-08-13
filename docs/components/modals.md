---
layout: pattern
title: Modal
description: Show the window!
section: components
---

## Default
{% example %}
<p class="text-center"><button class="btn" data-toggle="modal" data-target="#modal-1">Open modal</button></p>
<div class="modal" id="modal-1">
	<div class="modal-window">
		<a href="" class="modal-close">&times;</a>
		<p>Hello World</p>
	</div>
	<div class="modal-overlay"></div>
</div>
<p class="text-center"><button class="btn" data-toggle="modal" data-target="#modal-2">Open modal</button></p>
<div class="modal" id="modal-2">
	<div class="modal-window">
		<a href="" class="modal-close">&times;</a>
		<p>Hello World</p>
		<div class="section">
			<div class="wrapper">
				<div class="row">
					<div class="col-1of2">
						<p>Hello World</p>
					</div>
					<div class="col-1of2">
						<p>Foo Bar</p>
					</div>
				</div>
				<div class="row">
					<div class="col-1of2">
						<p>Hello World</p>
					</div>
					<div class="col-1of2">
						<p>Foo Bar</p>
					</div>
				</div>
				<div class="row">
					<div class="col-1of2">
						<p>Hello World</p>
					</div>
					<div class="col-1of2">
						<p>Foo Bar</p>
					</div>
				</div>
				<div class="row">
					<div class="col-1of2">
						<p>Hello World</p>
					</div>
					<div class="col-1of2">
						<p>Foo Bar</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="modal-overlay"></div>
</div>
{% endexample %}
