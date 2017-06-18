
	$(function () {
		
		$('#blog_button').click(function () {
			$("#list").slideToggle('fast');
		});
		$(window).resize(function(){
			if ($(window).width() >1020){
				$('#list').removeAttr('style');
				 
			}
		});
	});


