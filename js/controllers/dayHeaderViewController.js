var DayHeaderViewController = function(view, model, dayId) {
	view.inputStartTime.change(function(){
		var time = view.container.find('#inputStartTime').val();
		//console.log(time);
		time = time.split(":");

		//+ is the same as parseInt() 
		model.days[dayId].setStart(+time[0],+time[1]);
		view.updateView();

	});


}

