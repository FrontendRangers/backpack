/**
*
* Backpack Accordion
* version: 1.0
*
**/

// Accordion
(function ($, window, undefined) {

  "use strict";

  $.fn.backpackAccordion = function (){
    return this.each( function() {
      $(this).find('.accordion-title').on('click', function (e) {

        $('.accordion-title').removeClass('is-active');
        $('.accordion-pane').removeClass('is-active');

        $(this).addClass('is-active');
        $(this).next('.accordion-pane').addClass('is-active');

        e.preventDefault();
      });
    });
  }

}(jQuery));