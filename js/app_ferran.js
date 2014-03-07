//Initialize the model, the views and controllers
$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "home";
	
	//We instantiate our model
	var model = new Model();
	//createTestData();
	model.addDay();
	model.addActivity(new Activity("Introduction",10,0,""),0);
	model.addActivity(new Activity("Idea 1",30,0,""),0);
	model.addActivity(new Activity("Working in groups",35,1,""),0);
	model.addActivity(new Activity("Idea 1 discussion",15,2,""),0);
	model.addActivity(new Activity("Coffee break",20,3,""),0);
	
	model
	

	//And create the needed controllers and views
	//var activityListView = new ActivityListView($("#activityListView"), model);
	//var singleActivityView = new SingleActivityView($("#singleActivityView"), model);
	var dayScheduleView = new DayScheduleView($("#daySchedule"), model, 0);
	var dayScheduleViewController = new DayScheduleViewController(dayScheduleView, model);

});