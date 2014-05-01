$(document).ready(function() {
	showVideo();

	var scrolltop = $(window).scrollTop();
	infoGraphicAnimate(scrolltop);
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
	if (scrolltop >= 400) {
		$(".info_graphic").css("top", "0");
	}
	$(window).scroll(function() {
		scrolltop = $(window).scrollTop();

		if (scrolltop >= 400) {
			$(".info_graphic").css("top", "0");
			$("#basic_graphic").animate({
				"opacity": 0
			}, 500);
		}
	});
}