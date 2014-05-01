$(document).ready(function() {
	showVideo();

	var scrolltop = $(window).scrollTop();
	infoGraphicAnimate(scrolltop);
	$('input, textarea').placeholder();
});

function showVideo() {
	$("#watch_video").click(function(event) {
		event.preventDefault();
		$("#logo").hide();
		$("#video_container").show();
	})
}

function infoGraphicAnimate(scrolltop) {
	var scrolltop = $(window).scrollTop();
	var triggered = false;
	if (scrolltop >= 400) {
		triggered = true;
		$(".info_graphic").animate({
			"top":0
		});
		$("#basic_graphic").animate({
			"opacity": 0
		}, 500);
		
	}
	$(window).scroll(function() {
		scrolltop = $(window).scrollTop();

		if (scrolltop >= 400 && triggered == false) {
			triggered = true;
			$(".info_graphic").animate({
				"top":0
			});
			$("#basic_graphic").animate({
				"opacity": 0
			}, 500);
		}
	});
}