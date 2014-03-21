/*Controlles the pop up. Handels changes in existing activities, 
creation of new activities and validation of the user input*/

var PopUpViewController = function(view, model){
	
	view.saveButton.click(function(){
		view.saveButton.removeAttr("data-dismiss");
		if(view.formValidation() == true){

			//update activity values from pop-up
			view.popUpActivity.setName(view.activityNameText.val());
			view.popUpActivity.setLength(+view.activityLengthMin.val());
			view.popUpActivity.setTypeId(view.activityTypeDropDown.val());
			view.popUpActivity.setDescription(view.activityDescriptionText.val());

			view.restorePopValues();
			view.saveButton.attr("data-dismiss", "modal");
		}
	});
	view.createActivity.click(function(){
		view.createActivity.removeAttr("data-dismiss");
		if(view.formValidation() == true) {

			//save activity from pop-up
			var activity = new Activity(view.activityNameText.val(), +view.activityLengthMin.val(), view.activityTypeDropDown.val(), view.activityDescriptionText.val());
			model.addActivity(activity, null);
			view.restorePopValues();
			
			view.createActivity.attr("data-dismiss", "modal");
		}

	});
	view.closeButton.click(function(){
		view.restorePopValues();
	});
	view.crossClose.click(function(){
		view.restorePopValues();
	});
	
}

