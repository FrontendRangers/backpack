jQuery(document).ready(function() {
  // Tabs
  var tabItems = $('.tabs-nav a'),
      tabContentWrapper = $('.tabs-content');

  $('.tabs-nav li:first-child a').addClass('current');
  $('.tabs-content .tab-pane:first-child').addClass('current');

  tabItems.on('click', function(event) {
    event.preventDefault();
    var selectedTabItem = $(this);
    if ( !selectedTabItem.hasClass('current')) {
      var selectedTabContent = selectedTabItem.data('tab'),
          selectedContent = tabContentWrapper.find('li[data-tab="'+selectedTabContent+'"]'),
          selectedContentHeight = selectedContent.innerHeight();

      tabItems.removeClass('current');
      selectedTabItem.addClass('current');
      selectedContent.addClass('current').siblings('li').removeClass('current');

    };
  });
});
