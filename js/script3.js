$(function(){
	$('.handMap').shapeshift();
	$('.fightMap').shapeshift();
		//{
		//columns:5,
		//minHeight:180,
		//maxHeight:180,
		//autoHeight:false,
		//handle:".jack",
		//draggedClass: "ss-dragged-child"
		
	//});

	$('.com').drawArc({
	  strokeStyle: '#000',
	  strokeWidth: 1,
	  x: 75, y: 75,
	  radius: 75
	});

	$('.comX').drawArc({
	  strokeStyle: '#000',
	  strokeWidth: 1,
	  x: 75, y: 75,
	  radius: 30
	});
	$('.fightMap').on("ss-arranged",function(e, selected){
		//alert($(selected).attr("class"));
		//alert($(this).find("div").length);
		//alert($(selected).attr("id"));
		//if($(this).find("div").length >4){
		//	return false;
		//}
	})
	$(".fightMap").droppable({
		drop:function(event,ui){
			//alert($(this).find("div").length);
			if($(this).find("div").length >5){
	 			$(this).droppable("disable");
	 		}
		}
	});



	$('.fightMap').mousedown(function(){
		$('.fightMap').droppable("enable");
		//$('.fightMap').shapeshift();
	});

	$("#getCard").click(function(){
		if($('.handMap').find("div").length>6){
			alert("Card Overflow");
		}else{
			$('.handMap').append("<div/>");
			$('.handMap').shapeshift();
		}
		//$('.handMap').
	});
})