var AddDayViewController = function(view, model) {
	view.addButton.click(function(){
		//creates one new day 
		var dayView = new DayView($("#dayView"), model, 0);
		var dayHeaderViewController = new DayHeaderViewController(dayView, model, 0);
	});


}

