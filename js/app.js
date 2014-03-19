// Initialize the model, the views and controllers
$(function() {
	/**
	 * Global variables so we can access it from other controller and views
	 *
	 * Since we are dynamically creating views and controllers for the days and activities
	 * we "register" them on this map, so that we do not duplicate views or controllers,
	 * this way we just create a new view or controller in case we need to.
	 */
	window.viewsMap = {};
	window.controllersMap = {};
	window.dragAndDropLists = [];
	
	/**
	 * We use jquery-ui-1.10.4 sortable lists to get the drag and drop working
	 *
	 * The "dragAndDripLists" is used to store the ids of the lists that have to be connected
	 * through the "sortable" component. Each time that we add a day, we have to connect it to all
	 * the other lists. We do so by calling this function
	 */
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
	
	//Comment next line for no test data
	createTestData();

	//And create the needed controllers and views
	
	// We need to access the popUpView from the activities, that's why we store it globally
	window.popUpView = new PopUpView($("#addActivityModal"), model); 
	var popUp = new PopUpViewController(popUpView, model);
	
	var parkedActivitiesView = new ParkedActivitiesView($("#parkedActivitiesListView"), model);
	var parkedActivitiesViewController = new ParkedActivitiesViewController(parkedActivitiesView, model);
	
	var parkedActivitiesList = new ActivityListView($("#parkedActivities"), model, null);
	var parkedActivitiesListController = new ActivityListViewController(parkedActivitiesList, model);
	window.dragAndDropLists.push("#parkedActivities");

	var addDayView = new AddDayView($("#addDayButton"), model);
	var addDayViewController = new AddDayViewController(addDayView, model);
	
	window.linkDragAndDropLists();
});