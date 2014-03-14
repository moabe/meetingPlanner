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
		view.saveButton.removeAttr("data-dismiss");
		if(formValidation() == true){
			//update activity values from pop-up
			popUpActivity.setName(view.activityNameText.val());
			popUpActivity.setLength(view.activityLengthMin.val());
			popUpActivity.setTypeId(view.activityTypeDropDown.val());
			popUpActivity.setDescription(view.activityDescriptionText.val());
			console.log("changing form values");

			restorePopValues();
			view.saveButton.attr("data-dismiss", "modal");
		}
		

	});
	view.createActivity.click(function(){
		view.createActivity.removeAttr("data-dismiss");
		if(formValidation() == true) {
			//save activity from pop-up
			var activity = new Activity(view.activityNameText.val(), view.activityLengthMin.val(), view.activityTypeDropDown.val(), view.activityDescriptionText.val());
			model.addActivity(activity, null);
			restorePopValues();
			console.log("saving form values");
			view.createActivity.attr("data-dismiss", "modal");
		}

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
	formValidation = function(){
		view.activityNameDiv.removeClass("has-error");
		view.activityLengthDiv.removeClass("has-error");
		//adding has-error-class if no input in fields
		if(view.activityNameText.val() == ''){
			view.activityNameDiv.addClass("has-error");
			return false;
		}
		if(view.activityLengthMin.val() <= 0){
			view.activityLengthDiv.addClass("has-error");
			return false;
		}
		return true;
	};
}

