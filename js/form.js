$(function () {
	var $btnHelp = $('button');
	$btnHelp.on('click', function() {
		var $hide = $('.hide');
		$hide.animate({opacity: 1}, 800);
	})
});

function mouseHover(a, b) {
	var $Line = $(a);
	var $Clue = $(b);
	$Line.hover(
		function() {
			$Clue.animate({
				opacity: 1}, 800)
		},
		function() {
			$Clue.animate({
				opacity: 0}, 500)
		}
	)
};
mouseHover('#i1', '#c1');
mouseHover('#i2', '#c2');
mouseHover('#i3', '#c3');