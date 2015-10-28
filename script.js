$(document).ready(function() {
	var gridSize = 32;
	var padWidth = $('#pad').css('width');
	padWidth = padWidth.slice(0,(padWidth.length)-2);
	var padUseable = padWidth-((gridSize+1)*2);
	drawGrid(gridSize, padUseable);
	$('#button').click(function() {
		gridSize = $('input[name=gridSize]').val();
		drawGrid(gridSize, padUseable);
	});
});

var drawGrid = function (numDots, padSize) {
	$('.dots').parent().remove();

	var dotSize = Math.floor(padSize/numDots);
	for (var x = 1; x <= numDots; x++) {
		var row = ("row"+x);
		$('<div id='+row+'></div>').appendTo('#pad');
		for (var i = 1; i <= numDots; i++) {
			$("#row"+x).append('<div class="dots"></div>');
		};
	};
	$('.dots').width(dotSize+'px');
	$('.dots').height(dotSize+'px');
	$('.dots').hover(function() {
		$(this).css("background-color", "black");
	});
}