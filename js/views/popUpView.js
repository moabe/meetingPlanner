//popUpView constructor
var PopUpView = function (container, model){
	this.container = container;
/*	this.modal = container.find("#addActivityModal");
	console.log(this.modal);
	this.popUpName = this.modal.find("#popUpName");
	this.activityNameText = this.modal.find("#activityNameText");
	console.log(this.activityNameText);
	
	this.activityLengthMin = this.modal.find("#activityLengthMin");
	this.activityDescriptionText = this.modal.find("#activityDescriptionText");
	this.saveButton = this.modal.find("#saveChanges");
	this.activityTypeDropDown = this.modal.find("#activityTypeSelect");*/
	
	//var modal = $("#addActivityModal");
	this.activityNameText = container.find("#activityNameText");
	this.activityLengthMin = container.find("#activityLengthMin");
	this.activityDescriptionText = container.find("#activityDescriptionText");
	this.saveButton = container.find("#saveChanges");
	this.activityTypeDropDown = container.find("#activityTypeSelect");

}