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

	//createTestData();
	model.addDay();
	window.popUpView = new PopUpView($("#addActivityModal"), model);
	var popUp = new PopUpViewController(popUpView, model);
	
	var activity = new Activity("Introduction", 10, 0, "");
	model.addActivity(activity, null);
	//model.addActivity(new Activity("Idea 1", 30, 0, ""), 0);
	model.addActivity(new Activity("Working in groups", 35, 1, ""), 0);
	model.addActivity(new Activity("Idea 1 discussion", 15, 2, ""), 0);
	model.addActivity(new Activity("Coffee break", 20, 3, ""), 0);


	//And create the needed controllers and views
	var parkedActivitiesList = new ActivityListView($("#parkedActivities"), model, null);
	var parkedActivitiesListController = new ActivityListViewController(parkedActivitiesList, model);
	window.dragAndDropLists.push("#parkedActivities");
	
	var dayView = new DayView($("#dayView"), model, 0);

	var dayHeaderViewController = new DayHeaderViewController(dayView, model, 0);

	var addDayView = new AddDayView($("#addDayButton"), model, 0);
	var addDayViewController = new AddDayViewController(addDayView, model, 0);

	window.linkDragAndDropLists();
});