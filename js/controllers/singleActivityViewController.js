var SingleActivityViewController = function(view, model){
	
	view.row.click(function() {
		console.log("klick!");
		//should not be placeholder but something else
		view.activityNameText.attr("placeholder", model.days[view.day]._activities[view.arrayindex].getName());
		view.activityLengthMin.attr("placeholder", model.days[view.day]._activities[view.arrayindex].getLength());
		view.GroupWork.attr("selected", "selected");
		view.activityDescriptionText.attr("placeholder", model.days[view.day]._activities[view.arrayindex].getDescription());

	});
}

