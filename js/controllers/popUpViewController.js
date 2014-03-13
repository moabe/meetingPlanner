var PopUpViewController = function(view, model){

this.popUpChange = function(activity) {
	console.log("hej");
	var typeString = activity.getType().replace(' ','');
	this.activityType = view.modal.find("#" + typeString);
		//fill pop-up with values from model
		//var activity;
		/*if(view.day == null){
			activity = model.parkedActivities[view.arrayindex];
		}
		else{
			activity = model.days[view.day]._activities[view.arrayindex];
		}*/
		view.activityNameText.attr("value", activity.getName());
		view.activityLengthMin.attr("value", activity.getLength());
		this.activityType.attr("selected", "selected");
		view.activityDescriptionText.attr("value", activity.getDescription());

	};
	view.saveButton.click(function(){
		//update activity values from pop-up
		console.log("save me");
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

