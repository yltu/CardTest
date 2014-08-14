$(function(){
	$('.handMap').shapeshift();
	$('.fightMap').shapeshift({
		columns:5,
		minHeight:180,
		maxHeight:180,
		autoHeight:false
		
	});

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
	})
})