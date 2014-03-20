/*Controlles the pop up. Handels changes in existing activities, 
creation of new activities and validation of the user input*/

var PopUpViewController = function(view, model){
	
	this.popUpChange = function(a) {
		view.popUpActivity = a;
		view.saveButton.show();
		view.createActivity.hide();

		//fill pop-up with values from activity
		view.popUpName.html("Change Activity");
		view.activityNameText.val(view.popUpActivity.getName());
		view.activityLengthMin.val(view.popUpActivity.getLength());
		var typeString = view.popUpActivity.getType().replace(' ','');
		var activityType = view.container.find("#" + typeString);
		activityType.attr("selected", "selected");	
		view.activityDescriptionText.val(view.popUpActivity.getDescription());

	};
	view.saveButton.click(function(){
		view.saveButton.removeAttr("data-dismiss");
		if(formValidation() == true){

			//update activity values from pop-up
			view.popUpActivity.setName(view.activityNameText.val());
			view.popUpActivity.setLength(+view.activityLengthMin.val());
			view.popUpActivity.setTypeId(view.activityTypeDropDown.val());
			view.popUpActivity.setDescription(view.activityDescriptionText.val());

			restorePopValues();
			view.saveButton.attr("data-dismiss", "modal");
		}
	});
	view.createActivity.click(function(){
		view.createActivity.removeAttr("data-dismiss");
		if(formValidation() == true) {

			//save activity from pop-up
			var activity = new Activity(view.activityNameText.val(), +view.activityLengthMin.val(), view.activityTypeDropDown.val(), view.activityDescriptionText.val());
			model.addActivity(activity, null);
			restorePopValues();
			
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
		var oldActivityType = view.container.find("#"+view.typeString);
		oldActivityType.prop('selected',false);
		var activityType = view.container.find("#Presentation");
		activityType.prop("selected", true);	
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

