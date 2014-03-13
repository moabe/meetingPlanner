//DayScheduleView constructor
var DayScheduleView = function(container, model, dayId) {

	this.container = container;
	this.dayId = dayId;

	model.addObserver(this);

	this.updateView = function() {
		container.empty();

		for (var i = 0; i < model.days[dayId]._activities.length; ++i) {
			var a = $("<li>");
			a.addClass("panel panel-info");
			a.html(model.days[dayId]._activities[i].getName());
			container.append(a);
		}
	}

	this.updateView();

	this.update = function(args) {
		this.updateView();
	}
}