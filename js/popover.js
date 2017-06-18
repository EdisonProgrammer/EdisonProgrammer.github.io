

$(function () {
	$(".name").webuiPopover({
		placement: "bottom",
		trigger: "hover",
		content: "Будь-ласка, введіть Ваше ім'я",
		animation: "pop",
        width: "300"

	});
	$(".mail").webuiPopover({
		placement: "bottom",
		trigger: "hover",
		content: "Будь-ласка, введіть Вашу електронну адресу",
		animation: "pop",
		width: "300"

	});

	$(".phone").webuiPopover({
		placement: "bottom",
		trigger: "hover",
		content: "Будь-ласка, введіть Ваш номер мобільного телефону",
		animation: "pop",
		width: "300"

	});

});

