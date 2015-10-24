$(document).ready(function() {
	var numDots = 16;
	var padWidth = $('#pad').css('width');
	padWidth = padWidth.slice(0,(padWidth.length)-2);
	var padUseable = padWidth-((numDots+1)*2);
	var dotSize = Math.floor(padUseable/numDots);
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
	})
	
});