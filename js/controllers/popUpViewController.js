var PopUpViewController = function(view, model){

	this.popUpChange = function(a) {
		popUpActivity = a;
		view.saveButton.show();
		view.createActivity.hide();

		//fill pop-up with values from activity
		view.popUpName.html("Change Activity");
		view.activityNameText.val(popUpActivity.getName());
		view.activityLengthMin.val(popUpActivity.getLength());
		var typeString = popUpActivity.getType().replace(' ','');
		var activityType = view.container.find("#" + typeString);
		activityType.attr("selected", "selected");	
		view.activityDescriptionText.val(popUpActivity.getDescription());

	};
	view.saveButton.click(function(){
		//update activity values from pop-up
		popUpActivity.setName(view.activityNameText.val());
		popUpActivity.setLength(view.activityLengthMin.val());
		popUpActivity.setTypeId(view.activityTypeDropDown.val());
		popUpActivity.setDescription(view.activityDescriptionText.val());

		restorePopValues();

	});
	view.createActivity.click(function(){
		//save activity from pop-up
		var activity = new Activity(view.activityNameText.val(), view.activityLengthMin.val(), view.activityTypeDropDown.val(), view.activityDescriptionText.val());
		model.addActivity(activity, null);
		restorePopValues();
	});
	view.closeButton.click(function(){
		restorePopValues();
	});
	view.crossClose.click(function(){
		restorePopValues();
	});
	restorePopValues = function(){
		//removing all attributes from pop-up
		console.log("restorePopValues " + view.activityNameText.val());
		view.popUpName.html("Add Activity");
		view.activityNameText.val('');
		console.log("after " + view.activityNameText.val());
		view.activityLengthMin.val('');
		var activityType = view.container.find("#Presentation");
		activityType.attr("selected", "selected");	
		view.activityDescriptionText.val('');

		view.saveButton.hide();
		view.createActivity.show();
	};
}

