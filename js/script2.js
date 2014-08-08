var no=1;
var $cloneObj;
$(function(){
	var i =50;
	var j =50;
	
	$('.com').drawArc({
	  strokeStyle: '#000',
	  strokeWidth: 5,
	  x: 70, y: 70,
	  radius: 70
	})

	//$('#comFightPart div').draggable();
	$('#comFightPart').droppable({
		activeClass: "ui-state-active",
      	hoverClass: "ui-state-hover",
      	drop:function(event,ui){
      		//alert(ui.draggable.attr("id"));
      		
      		//alert($moveItem);

      	}
	});
	$('#myPart div').draggable({
		start:function(){
			//$cloneObj = $(this).clone();
			//$cloneObj.removeClass();
			//$cloneObj.addClass("brick small");
			//$cloneObj.hide();
			//$("#comFightPart").append($cloneObj);
			//$('#comFightPart').gridly();
			//$('#comFightPart').refresh();
			//$('#comFightPart').
			//event.preventDefault();
			//event.stopPropagation();

			 // $(this).removeClass("handCard");
			 // $(this).addClass("brick small");
			 // $(this).remove();
			 // $("#comFightPart").append($(this));
		},
		drag:function(){
			
			var detectString = $("#comFightPart").attr("class");
			console.log(detectString.match(/ui-state-hover/g));
			if(detectString.match(/ui-state-hover/g) != undefined){
				$(this).remove();
				//$(this)=$cloneObj;
				//$cloneObj.addClass("brick small dragging");
				$("#comFightPart").append($(this));
				
				//$('#comFightPart').refresh();	
				//$cloneObj.show();		
				//$(this).removeClass();
				//$(this).draggable('disable');
				
				
				//$(this).addClass("brick small");
				
				//$('#comFightPart').gridly();
				//$(this).addClass("brick small dragging");
				// $(this).removeClass("handCard");
				// $(this).removeClass("dragging");
				// $(this).removeClass("ui-draggable-dragging");
				// $(this).addClass("brick small");
				// $(this).addClass("brick small dragging");
				// $("#comFightPart").append($(this));


				
				//var data = $("#comFightPart").html();
				//$("#comFightPart").hide().html(data).show();
			}else{
				//$(this).html("NONO");
			}
   //    		$(this).removeClass("handCard");
   //    		$(this).addClass("brick small");

   //    		$(this).remove();
			// $("#comFightPart").append($(this));
		},
		stop:function(){
			$('#comFightPart').gridly();
		}
	});
 
	$('#comFightPart').gridly({
	    base: 140, // px 
	    gutter: 10, // px
	    columns: 8
	 });

	$('#myPart').gridly({
	    base: 140, // px 
	    gutter: 10, // px
	    columns: 8
	    // cellbacks:{
	    // 	reordering:function(elements){
	    // 		$(this).removeClass("handCard");
     //  			$(this).addClass("brick small");
	    // 	}
	    // }
	 });

	$("#diePart").droppable({
		activeClass: "ui-state-hover",
      	hoverClass: "ui-state-active",
      	accept:".brick.small",
		drop:function(event,ui){
			//ui.draggable.children().remove();
			ui.draggable.remove();
		}
	});

})

//handCard    ui-draggable ui-draggable-handle dragging ui-draggable-dragging
//brick small ui-draggable ui-draggable-handle