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

	this.saveButton.hide();
	
	this.popUpActivity;
	
	this.popUpChange = function(a) {
		this.popUpActivity = a;
		this.saveButton.show();
		this.createActivity.hide();
		this.popUpName.html("Change Activity");

		//fill pop-up with values from the clicked activity
		this.activityNameText.val(this.popUpActivity.getName());
		this.activityLengthMin.val(this.popUpActivity.getLength());
		var typeString = this.popUpActivity.getType().replace(' ','');
		var activityType = this.container.find("#" + typeString);
		activityType.attr("selected", "selected");	
		this.activityDescriptionText.val(this.popUpActivity.getDescription());
	};
}