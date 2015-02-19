jQuery(document).ready(function() {
  // Tabs
  var tabItems = $('.tabs-nav a'),
      tabsContentWrapper = $('.tabs-content');

  tabItems.on('click', function(event) {
    event.preventDefault();
    var selectedTabItem = $(this);
    if ( !selectedTabItem.hasClass('current')) {
      var selectedTabContent = selectedTabItem.data('tab'),
          selectedContent = tabContentWrapper.find('li[data-tab="'+selectedTab+'"]'),
          selectedContentHeight = selectedContent.innerHeight();

      tabItems.removeClass('current');
      selectedItem.addClass('current');
      selectedContent.addClass('current').siblings('li').removeClass('current');
    };
  });
});
