var $head = $(".tab__item");
var $headOne = $(".tab__item1");
var $headTwo = $(".tab__item2");
var $headThree = $(".tab__item3");
var $Tabs = $(".tab");
var $TabOne = $("#tab__one");
var $TabTwo = $("#tab__two");
var $TabThree = $("#tab__three");

$(function firstTab() {
	$TabOne.show();
	$headOne.css({background: "#bbb"})
})

function switcherTab(tab, header) {
	header.on('click', function() {
		$Tabs.hide();
		tab.show();
		$head.css({background: "#eee"});
		header.css({background: "#bbb"})	
	})
}
switcherTab($TabOne, $headOne);
switcherTab($TabTwo, $headTwo);
switcherTab($TabThree, $headThree);