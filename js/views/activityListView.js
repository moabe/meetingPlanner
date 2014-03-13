// ActivityListView constructor
var ActivityListView = function(container, model, dayId) {

	this.container = container;
	this.dayId = dayId;
	
	this.activityViews = {};
	this.activityControllers = {};

	// In this view, the view is updated via the drag&drop API, we just care of
	// the activity creation list, because we just update the model in the controller
	if (dayId == null)
		model.addObserver(this);

	this.updateView = function() {
		//container.empty();
		//$("#singleActivityView").empty();

		var activities = (dayId == null)? model.parkedActivities : model.days[dayId]._activities;
		for (var i = 0; i < activities.length; ++i) {
			var a = $("<li>");
			a.addClass("panel panel-info");
			container.append(a);
			//this.activityViews[activities[i]] = new SingleActivityView(a, model, dayId, i);
			//this.activityControllers[activities[i]] = new SingleActivityViewController(this.activityViews[activities[i]], model);
		}
	}

	this.updateView();

	this.update = function(args) {
		// We will just be here in case we are the parked activities list
		this.updateView();
	}
}