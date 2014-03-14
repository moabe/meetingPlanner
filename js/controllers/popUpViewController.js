var PopUpViewController = function(view, model){

	view.saveButton.click(function(){
		//update activity values from pop-up
		view.popUpActivity.setName(view.activityNameText.val());
		view.popUpActivity.setLength(view.activityLengthMin.val());
		view.popUpActivity.setTypeId(view.activityTypeDropDown.val());
		view.popUpActivity.setDescription(view.activityDescriptionText.val());

		model.notifyObservers();
		
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
		view.popUpName.html("Add Activity");
		view.activityNameText.val('');
		view.activityLengthMin.val('');
		var activityType = view.container.find("#Presentation");
		activityType.attr("selected", "selected");	
		view.activityDescriptionText.val('');

		view.saveButton.hide();
		view.createActivity.show();
	};
}

