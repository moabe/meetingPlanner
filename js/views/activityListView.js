// ActivityListView constructor
var ActivityListView = function(container, model, dayId) {

	this.container = container;
	this.dayId = dayId;

	// In this view, the view is updated via the drag&drop API, we just care of
	// the activity creation list, because we just update the model in the controller
	if (dayId == null)
		model.addObserver(this);

	this.updateView = function() {
		var activities = (dayId == null)? model.parkedActivities : model.days[dayId]._activities;
		for (var i = 0; i < activities.length; ++i) {
			if (!window.viewsMap[activities[i].getUniqueId()]) {
				var a = $("<li>");
				//a.addClass("panel panel-info");
				container.append(a);
				window.viewsMap[activities[i].getUniqueId()] = new SingleActivityView(a, model, activities[i]);
				window.controllersMap[activities[i].getUniqueId()] = new SingleActivityViewController(window.viewsMap[activities[i].getUniqueId()], model);
			}
		}
	}

	this.updateView();

	this.update = function(args) {
		// We will just be here in case we are the parked activities list
		this.updateView();
	}
}