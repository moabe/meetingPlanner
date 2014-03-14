var AddDayViewController = function(view, model) {
	view.addButton.click(function(){
		var nextDay = model.days.length;
		model.addDay();
		
		window.viewsMap["day"+nextDay] = new DayView($("#dayView"), model, nextDay);
		window.controllersMap["day"+nextDay] = new DayHeaderViewController(window.viewsMap["day"+nextDay], model, nextDay);
	});
}

