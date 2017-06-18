


$(function () {
    $(".popup").dialog({
        autoOpen: false,
        resizable: false,
        height: "auto",
        modal: true,
        draggable:false,
        closeOnEscape:true,
       
        show: {
            effect: "fade",
            duration: 500
        },

        hide: {
            effect: "fade",
            duration: 100
        },


    });

    $(".price_button").on("click", function () {
        $(".popup").dialog("open");
    });


});
