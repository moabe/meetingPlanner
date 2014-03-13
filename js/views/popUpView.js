//popUpView constructor
var PopUpView = function (container, model, day, index){
	this.modal = container.find("#addActivityModal");
	this.popUpName = this.modal.find("#popUpName");
	this.activityNameText = this.modal.find("#activityNameText");
	this.activityLengthMin = this.modal.find("#activityLengthMin");
	this.activityDescriptionText = this.modal.find("#activityDescriptionText");
	this.saveButton = this.modal.find("#saveChanges");
	this.activityTypeDropDown = this.modal.find("#activityTypeSelect");
}