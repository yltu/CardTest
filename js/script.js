var cardList=[];
var fightList=[];
var mainDeskPoint=[];
var i=1;

function point(x,y,r){
	this.x = x;
	this.y = y;
	this.r = r;
}
function Card(id,x,y,status){
	this.id=id;
	this.x=x;
	this.y=y;
	this.status = status; //0:myCard,1:fightCard,2:dieCard
}

function showCard(){
	$("#myPart").html("");
	if(cardList.length > 0){
		for(var key in cardList){
			if(key > 8){
				cardList.splice(0,1);
			}
			if(cardList[key]!=undefined){
				var $newCard = $("<div id='"+cardList[key].id+"' class='myCard'></div>");
				$newCard.html(cardList[key].id);
				$newCard.draggable({ revert: "invalid" });
				$("#myPart").append($newCard);
				$("#allPart").append($newCard);
			}
		}
	}
}

$(function(){

	$("#btn").click(function(){
		$("#mainDesk").drawImage({
		  source: 'image/fish.jpg',
		  x: 0, y: 0
		});
	});
	$("#getCard").click(function(){
		cardList.push(new Card(i++,0,0,0));
		showCard();
	})

	$("#mainDesk").droppable({
		hoverClass: "ui-state-hover",
		drop: function( event, ui ) {
			for(var key in cardList){
				if(cardList[key]!=undefined && cardList[key].id==ui.draggable.attr("id")){
					
					var thisFightCard = cardList[key];
					thisFightCard.status = 1;
					fightList.push(thisFightCard);
					cardList.splice(key,1);
				}
			}

			var $newPosX = ui.offset.left - $(this).offset().left;
			var $newPosY = ui.offset.top - $(this).offset().top;
			//alert($newPosX+","+$newPosY);

        	
			
			

			ui.draggable.css("zoom","1.5");



			ui.draggable.animate(
			{
				zoom:1
			},
			{
				duration:500,
				complete:function(){
					$(this).hide();
					//alert(ui.draggable.attr("id"));



					$("#mainDesk").drawArc({
						id:'p'+ui.draggable.attr("id"),
						fillStyle: 'blue',
						x: $newPosX+30,
						y: $newPosY+70,
						radius: 20,
						draggable:true,
						click:function(layer){
							alert(layer.id);
							tmpid=layer.id.substring(1);
							$("#"+tmpid).show();
							$("#"+tmpid).click(function(){
								$(this).hide();
							});
							//$("#mainDesk").append($("#"+tmpid));
							//$("#"+tmpid).removeClass("myCard").addClass("fightCard");
							//$("#"+tmpid).draggable("disable");
						}
					});
				}
			});



			//ui.draggable.hide();
			//showCard();  
        }
	});

	//card1 = new Card(i++,0,0);
	//card2 = new Card(i++,0,0);

	//cardList.push(card1);
	//cardList.push(card2);

	//showCard();

	
	//$(".myCard").draggable({ revert: "invalid" });

	// $(document).on('draggable', '.myCard', function(event){
 //    	alert($(this).attr("id"));
	// });
})