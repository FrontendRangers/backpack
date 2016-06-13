/**
*
* Backpack Tabs
* version: 1.1
*
**/

(function ($) {

  "use strict";

  $.fn.backpackTabs = function (){
    var listOfTabs = [];
    $('.tabs-content .tab-pane').each(function(){
      listOfTabs.push(this.id);
    });

    return this.each( function() {
      var currentTabs = $(this);
      var currentTabsLinks = $(this).find('.tabs-nav a');
      var currentTabsPane = $(this).find('.tabs-content .tab-pane');
      var hash = window.location.hash.substr(1);
      if (!window.location.hash) {
        currentTabsLinks.first().addClass('is-active');
        currentTabsPane.first().addClass('is-active');
        console.log('No hash');
      } else if ($.inArray(hash, listOfTabs) !== -1) {
        $('a[data-tab^="'+hash+'"]').addClass('is-active');
        $('#'+hash).addClass('is-active');
        console.log('Found in array');
      } else {
        currentTabsLinks.first().addClass('is-active');
        currentTabsPane.first().addClass('is-active');
        console.log('Not found in array');
      };

      currentTabsLinks.on('click', function (e) {
        e.preventDefault();

        var tab_id = $(this).attr('data-tab');

        currentTabsLinks.removeClass('is-active');
        currentTabsPane.removeClass('is-active');

        $(this).addClass('is-active');
        $("#"+tab_id).addClass('is-active');

        var offset = $(this).parents('.tabs').offset();
          if (offset) {
            $('html, body').animate({ scrollTop: offset.top }, 'slow');
            return false;
          }

      });
    });
  }

}(jQuery));
