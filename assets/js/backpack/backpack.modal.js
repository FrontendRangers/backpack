/**
*
* Backpack Modal
* version: 1.2
*
**/

jQuery(document).ready(function($) {

	$('[data-toggle="modal"]').each(function(index, val) {

		var target = $(this).data('target');
		var modalWindow = $('div#'+target);

		$(this).on('click' , function(event) {
			event.preventDefault();

			modalWindow.addClass('is-visible');

      $('body').addClass('is-dimmed');

      console.log(modalWindow);

			return false;
		});
	});

	function closeModal() {
		$('.modal').removeClass('is-visible');
    $('body').removeClass('is-dimmed');
	}

	$('.modal-close').on('click', function(event) {
		event.preventDefault();

		closeModal();

		return false;
	});

	$('.dimmer--full').on('click', function(event) {
		event.preventDefault();

		closeModal();

		return false;
	});
});
