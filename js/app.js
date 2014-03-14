//Initialize the model, the views and controllers
$(function() {
	//The global variable so we can access it from other controller and views
	window.viewsMap = {};
	window.controllersMap = {};
	window.dragAndDropLists = [];
	
	// Links all the activity Lists elements with id in the "dragAndDropLists" array
	window.linkDragAndDropLists = function () {
		var s = "";
		for (var i = 0; i < window.dragAndDropLists.length; ++i) {
			if (i != 0) s += ", ";
			s += window.dragAndDropLists[i];
		}
		
		$(s).sortable({
			connectWith: ".activity-list"
		}).disableSelection();
	}

	//And create the needed controllers and views
	window.popUpView = new PopUpView($("#addActivityModal"), model);
	var popUp = new PopUpViewController(popUpView, model);
	
	var parkedActivitiesList = new ActivityListView($("#parkedActivities"), model, null);
	var parkedActivitiesListController = new ActivityListViewController(parkedActivitiesList, model);
	window.dragAndDropLists.push("#parkedActivities");

	var addDayView = new AddDayView($("#addDayButton"), model);
	var addDayViewController = new AddDayViewController(addDayView, model);
	
	window.linkDragAndDropLists();
});