var SingleActivityViewController = function(view, model){
	
	view.row.click(function() {
		view.activityNameText.attr("value", model.days[view.day]._activities[view.arrayindex].getName());
		view.activityLengthMin.attr("value", model.days[view.day]._activities[view.arrayindex].getLength());
		view.activityType.attr("selected", "selected");
		view.activityDescriptionText.attr("value", model.days[view.day]._activities[view.arrayindex].getDescription());

	});
	view.saveButton.click(function(){
		console.log("save! " + view.activityTypeDropDown.val());

		model.days[view.day]._activities[view.arrayindex].setName(view.activityNameText.val());
		model.days[view.day]._activities[view.arrayindex].setLength(view.activityLengthMin.val());
		model.days[view.day]._activities[view.arrayindex].setTypeId(view.activityTypeDropDown.val());
		model.days[view.day]._activities[view.arrayindex].setDescription(view.activityDescriptionText.val());
	});
}

