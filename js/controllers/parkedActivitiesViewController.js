// ParkedActivitiesViewController constructor
var ParkedActivitiesViewController = function (view, model) {
	
	$(window).resize(function () {
		if (view.floatingView.hasClass("affix")) {
			view.floatingView.css("left", view.floatingView.parent().offset().left);
			view.floatingView.css("width", view.floatingView.parent().width());
		}
	});
	
	view.floatingView.on("affix.bs.affix", function() { // Before becoming floating
		view.floatingView.css("left", view.floatingView.parent().offset().left + view.floatingView.position().left);
		view.floatingView.css("width", view.floatingView.parent().width());
	});
	
	view.floatingView.on("affix-top.bs.affix", function() { // Before becoming floating
		view.floatingView.css("left", "");
		view.floatingView.css("width", "");
	});
	
};