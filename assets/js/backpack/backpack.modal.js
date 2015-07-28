/**
*
* Backpack Modal
* version: 1.0
*
**/

jQuery(document).ready(function($) {

	$('[data-toggle="modal"]').each(function(index, val) {

		var target = $(this).data('target');
		var modalWindow = $('div'+target);

		$(this).on('click' , function(event) {
			event.preventDefault();

			modalWindow.addClass('is-visible');

			return false;
		});
	});

	function closeModal() {
		$('.modal').removeClass('is-visible');
	}

	$('.modal-close').on('click', function(event) {
		event.preventDefault();

		closeModal();

		return false;
	});

	$('.modal-overlay').on('click', function(event) {
		event.preventDefault();

		closeModal();

		return false;
	});
});
