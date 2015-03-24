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
    function close_accordion() {
      $('.accordion-title').removeClass('is-active');
      $('.accordion-content').slideUp("300").removeClass('is-active');
    };

    return this.each( function() {
      $(this).find('.accordion-title').on('click', function (e) {

        if ($(this).hasClass('is-active')) {
          close_accordion();
        } else {
          close_accordion();
          $(this).addClass('is-active');
          $(this).next('.accordion-content').slideDown("300").addClass('is-active');
        }
        
        e.preventDefault();
      });
    });
  }

}(jQuery));