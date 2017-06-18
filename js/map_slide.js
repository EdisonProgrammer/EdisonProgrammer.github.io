$(document).ready(function () {
	$("#click_map").click(function () {
		$("iframe  ").slideToggle(500);


	});

	var value = 0
	$("#click_map").rotate({
		bind: {
			click: function () {
				value += 180;
				$("#up_fa").rotate({
					animateTo: value
				})
			}
		}
	});



});
