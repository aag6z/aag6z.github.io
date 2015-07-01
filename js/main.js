$(function(){
    $("#japanpic").hide();
	$("#aboutmecont").css("padding-bottom", "50px");
    $("#pic_button").on("click", function(){
        $("#japanpic").toggle();
		$("#aboutmecont").css("padding-bottom", "300px");		
    });
});