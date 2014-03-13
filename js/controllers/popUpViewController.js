var PopUpViewController = function(view, model){

	this.popUpChange = function(a) {
		activity = a;
		
		//fill pop-up with values from activity
		view.activityNameText.attr("value", activity.getName());
		view.activityLengthMin.attr("value", activity.getLength());
		var typeString = activity.getType().replace(' ','');
		var activityType = view.container.find("#" + typeString);
		activityType.attr("selected", "selected");	
		view.activityDescriptionText.attr("value", activity.getDescription());

	};
	view.saveButton.click(function(){
		//update activity values from pop-up
		console.log("save: " + activity);
		/*if(view.day == null){
			activity = model.parkedActivities[view.arrayindex];
		}
		else{
			activity = model.days[view.day]._activities[view.arrayindex];
		}*/
		activity.setName(view.activityNameText.val());
		activity.setLength(view.activityLengthMin.val());
		activity.setTypeId(view.activityTypeDropDown.val());
		activity.setDescription(view.activityDescriptionText.val());
	});
}

