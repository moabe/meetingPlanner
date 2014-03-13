var SingleActivityViewController = function(view, model){

	view.row.click(function() {
		//fill pop-up with values from model
		var activity;
		if(view.day == null){
			activity = model.parkedActivities[view.arrayindex];
		}
		else{
			activity = model.days[view.day]._activities[view.arrayindex];
		}
		view.activityNameText.attr("value", activity.getName());
		view.activityLengthMin.attr("value", activity.getLength());
		view.activityType.attr("selected", "selected");
		view.activityDescriptionText.attr("value", activity.getDescription());

	});
	view.saveButton.click(function(){
		//update activity values from pop-up
		var activity;
		if(view.day == null){
			activity = model.parkedActivities[view.arrayindex];
		}
		else{
			activity = model.days[view.day]._activities[view.arrayindex];
		}
		activity.setName(view.activityNameText.val());
		activity.setLength(view.activityLengthMin.val());
		activity.setTypeId(view.activityTypeDropDown.val());
		activity.setDescription(view.activityDescriptionText.val());
	});
}

