/**
*
* Backpack Tabs
* version: 1.0
*
**/

(function ($, window, undefined) {

  "use strict";

  $.fn.backpackTabs = function (){
    return this.each( function() {
      var currentTabs = $(this);
      var currentTabsLinks = $(this).find('.tabs-nav a');
      var currentTabsPane = $(this).find('.tabs-content .tab-pane');

      currentTabsLinks.first().addClass('is-active');
      currentTabsPane.first().addClass('is-active');

      currentTabsLinks.on('click', function (e) {
        var tab_id = $(this).attr('data-tab');

        currentTabsLinks.removeClass('is-active');
        currentTabsPane.removeClass('is-active');

        $(this).addClass('is-active');
        $("#"+tab_id).addClass('is-active');

        e.preventDefault();
      });
    });
  }

}(jQuery));