//popUpView constructor
var PopUpView = function (container, model){
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

	this.saveButton.hide();
}