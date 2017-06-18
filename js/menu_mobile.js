$(document).ready(function () {
    
    
    $("#menu_button").click(function () {
        $("nav").effect("slide", {});
        
        
    });
    
    $("#menu_button_nav").click(function () {
        $("nav").hide ("slide", {});
    });
    
    $(window).resize(function(){
			if ($(window).width() > 1020 ){
				 $("nav").show("slide"); 
			}
		});
    
     $(window).resize(function(){
			if ($(window).width() < 1020 ){
				 $("nav").hide("slide");	 
			}
		});  
});
 


