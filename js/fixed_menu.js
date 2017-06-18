$(function(){
$(window).scroll(function() {
var top = $(document).scrollTop();
   if (top <= 150) $("#menu_button").css({top: '0', position: 'relative'});
   else $("#menu_button").css({top: '10px', position: 'fixed' ,right:"3px", zIndex:"10", color:"rgba(0, 0, 0, 0.5);"});
    
  });
});