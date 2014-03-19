/**
 * This view controller is used to controll the position and sizes of the floating view
 * that is the "parkedActivities" view on the left
 */
// ParkedActivitiesViewController constructor
var ParkedActivitiesViewController = function (view, model) {
	
	$(window).resize(function () {
		if (view.floatingView.hasClass("affix")) {
			view.floatingView.css("left", view.floatingView.parent().offset().left);
			view.floatingView.css("width", view.floatingView.parent().width());
		}
	});
	
	view.floatingView.on("affix.bs.affix", function() { // Called right before becoming floating
		view.floatingView.css("left", view.floatingView.parent().offset().left + view.floatingView.position().left);
		view.floatingView.css("width", view.floatingView.parent().width());
	});
	
	view.floatingView.on("affix-top.bs.affix", function() { // Called right before becoming floating
		view.floatingView.css("left", "");
		view.floatingView.css("width", "");
	});
	
};