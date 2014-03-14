var SingleActivityViewController = function(view, model){

	this.popUp = window.controllersMap["popUp"];

	view.row.click(function() {
		window.popUpView.popUpChange(view.activity);

		//fill pop-up with values from model

		/*var activity;
		if(view.day == null){
			activity = model.parkedActivities[view.arrayindex];
		}
		else{
			activity = model.days[view.day]._activities[view.arrayindex];
		}
		view.activityNameText.attr("value", activity.getName());
		view.activityLengthMin.attr("value", activity.getLength());
		view.activityType.attr("selected", "selected");
		view.activityDescriptionText.attr("value", activity.getDescription());*/

	});
}

