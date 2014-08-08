$(function(){
	var i =50;
	var j =50;

	$('.com').drawArc({
	  strokeStyle: '#000',
	  strokeWidth: 5,
	  x: 70, y: 70,
	  radius: 70
	});


	 // $(".com").click(function(){
	 // 	var pos = 50;
	 // 	$(this).drawArc({
	 // 		strokeStyle: '#000',
		// 	  strokeWidth: 5,
		// 	  x: pos+=10, y: 50,
		// 	  radius: 50
	 // 	})
	 // });

 
	$('#comFightPart').gridly({
	    base: 140, // px 
	    gutter: 10, // px
	    columns: 8,
	    callbacks:{
	    	reordering: function(elements){
	    		$(elements).draggable();
	    	}
	    	// reordered: function(elements){
	    	// 	alert($(elements).html());
	    	// }
	    }
	 });

	$("#diePart").droppable({
		//hoverClass:"dieHover",
		//accept:"getCard",
		drop:function(event,ui){
			alert(ui.draggable.attr("class"));
			ui.draggable.remove();
			//$( this ).html("1");
		}
	});

	$("#getCard").draggable();
})