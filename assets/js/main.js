$(document).ready(function() {
  // $('select').chosen({disable_search_threshold: 10});
  $(".panel .btn").click(function() {
    $(this).parents(".panel").toggleClass('bounce');
    return false;
  });
});
