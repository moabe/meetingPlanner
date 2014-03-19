// ParkedActivitiesViewController constructor
var ParkedActivitiesViewController = function (view, model) {
	
	view.floatingView.on("affix.bs.affix", function() { // Before becoming floating
		view.floatingView.css("left", view.floatingView.offset().left);
		view.floatingView.css("width", view.floatingView.parent().width());
	});
	
	view.floatingView.on("affix-top.bs.affix", function() { // Before becoming floating
		view.floatingView.css("left", "");
		view.floatingView.css("width", "");
	});
	
};