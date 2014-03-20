//sets start time to the model when the user changes the time
var DayHeaderViewController = function(view, model, dayId) {

	view.inputStartTime.change(function(){
		var time = view.container.find('#inputStartTime').val();
		time = time.split(":");

		model.days[dayId].setStart(+time[0],+time[1]);
	});




}

