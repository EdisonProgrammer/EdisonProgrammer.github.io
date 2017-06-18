jQuery(document).ready(function() {
  jQuery("a.scroll").click(function () {
  elementClick = jQuery(this).attr("href")
  destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });
});