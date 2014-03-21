//popUpView constructor
var PopUpView = function (container, model){
	
	//find pop up components
	this.container = container;
	this.activityNameText = container.find("#activityNameText");
	this.activityLengthMin = container.find("#activityLengthMin");
	this.activityDescriptionText = container.find("#activityDescriptionText");
	this.saveButton = container.find("#saveChanges");
	this.activityTypeDropDown = container.find("#activityTypeSelect");
	this.popUpName = container.find("#popUpName");
	this.createActivity = container.find("#createActivity");
	this.closeButton = container.find("#closeButton");
	this.crossClose = container.find("#crossClose");
	this.activityNameDiv = container.find("#activityNameDiv");
	this.activityLengthDiv = container.find("#activityLengthDiv");
	this.typeString;
	this.saveButton.hide();
	
	this.popUpActivity;
	
	//fill the pop-up with values from the clicked singelActivity
	this.popUpChange = function(a) {
		this.popUpActivity = a;
		this.saveButton.show();
		this.createActivity.hide();
		this.popUpName.html("Change Activity");

		var defaltType = this.container.find("#Presentation");
		defaltType.prop('selected',false);

		//fill pop-up with values from the clicked activity
		this.activityNameText.val(this.popUpActivity.getName());
		this.activityLengthMin.val(this.popUpActivity.getLength());
		var typeString = this.popUpActivity.getType().replace(' ','');
		this.typeString = typeString;
		var activityType = this.container.find("#" + typeString);
		activityType.prop("selected", true);	
		this.activityDescriptionText.val(this.popUpActivity.getDescription());
	};
	
	//restoring the pop-up to its default values
	this.restorePopValues = function(){
		this.popUpName.html("Add Activity");
		this.activityNameText.val('');
		this.activityLengthMin.val('');
		var oldActivityType = this.container.find("#"+this.typeString);
		oldActivityType.prop('selected',false);
		var activityType = this.container.find("#Presentation");
		activityType.prop("selected", true);	
		this.activityDescriptionText.val('');

		this.saveButton.hide();
		this.createActivity.show();
	};
	
	//check the pop-up values
	this.formValidation = function(){
		this.activityNameDiv.removeClass("has-error");
		this.activityLengthDiv.removeClass("has-error");

		//adding has-error-class if no input in fields
		if(this.activityNameText.val() == ''){
			this.activityNameDiv.addClass("has-error");
			return false;
		}
		//adding has-error-class if wrong time value
		if(this.activityLengthMin.val() <= 0){
			this.activityLengthDiv.addClass("has-error");
			return false;
		}
		return true;
	};
}