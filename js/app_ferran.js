//Initialize the model, the views and controllers
$(function() {
	//The global variable so we can access it from other controller and views
	window.viewsMap = {};
	window.controllersMap = {};
	window.dragAndDropLists = [];
	
	//We instantiate our model
	var model = new Model();
	//createTestData();
	model.addActivity(new Activity("Parked 1",10,0,""),null);
	model.addActivity(new Activity("Parked 2",30,0,""),null);
	
	model.addDay();
	model.addActivity(new Activity("Introduction",10,0,""),0);
	model.addActivity(new Activity("Idea 1",30,0,""),0);
	model.addActivity(new Activity("Working in groups",35,1,""),0);
	model.addActivity(new Activity("Idea 1 discussion",15,2,""),0);
	model.addActivity(new Activity("Coffee break",20,3,""),0);
	
	model.addDay();
	model.addActivity(new Activity("Idea 2",30,0,""),1);
	model.addActivity(new Activity("Working in groups 2",35,1,""),1);
	model.addActivity(new Activity("Idea 2 discussion",15,2,""),1);

	//And create the needed controllers and views
	window.popUpView = new PopUpView($("#addActivityModal"), model); // We want to access this from the activity views
	var popUpViewController = new PopUpViewController(window.popUpView, model);
	
	var parkedActivitiesList = new ActivityListView($("#parkedActivities"), model, null);
	var parkedActivitiesListController = new ActivityListViewController(parkedActivitiesList, model);
	window.dragAndDropLists.push("#parkedActivities");
	var day0ActivitiesList = new ActivityListView($("#day0Activities"), model, 0);
	var day0ActivitiesListController = new ActivityListViewController(day0ActivitiesList, model);
	window.dragAndDropLists.push("#day0Activities");
	var day1ActivitiesList = new ActivityListView($("#day1Activities"), model, 1);
	var day1ActivitiesListController = new ActivityListViewController(day1ActivitiesList, model);
	window.dragAndDropLists.push("#day1Activities");
	
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
	
	window.linkDragAndDropLists();
});