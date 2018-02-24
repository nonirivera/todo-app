// check off specific task with a click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");	
	$(this).append(" <i class='far fa-check-circle'></i>");
});

// click on trash icon to delete task
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grab to do text from input
		var todoText = $(this).val();
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+todoText+"</li>");
	}
});

//
$("h1").click(function(){
	$("input[type='text']").fadeToggle();
});
