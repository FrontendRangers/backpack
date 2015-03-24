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
        $('.accordion-content').removeClass('is-active');

        $(this).toggleClass('is-active');
        $(this).next('.accordion-content').toggleClass('is-active');

        e.preventDefault();
      });
    });
  }

}(jQuery));