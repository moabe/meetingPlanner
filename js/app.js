//Initialize the model, the views and controllers
$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "home";

	//createTestData();
	model.addDay();
	var popUpView = new PopUpView($("#addActivityModal"), model);
	var popUp = new PopUpViewController(popUpView, model);
	var activity = new Activity("Introduction", 10, 0, "");
	model.addActivity(activity, null);
	//model.addActivity(new Activity("Idea 1", 30, 0, ""), 0);
	model.addActivity(new Activity("Working in groups", 35, 1, ""), 0);
	model.addActivity(new Activity("Idea 1 discussion", 15, 2, ""), 0);
	model.addActivity(new Activity("Coffee break", 20, 3, ""), 0);


	//And create the needed controllers and views
	var activityListView = new ActivityListView($("#activityListView"), model);
	var singleActivityView = new SingleActivityView($("#singleActivityView"), model, activity);

	//var dayView = new DayView($("#dayView"), model, 0);

	var singelActivityViewController = new SingleActivityViewController(singleActivityView, model, popUp);

	//var dayScheduleView = new DayScheduleView($("#dayScheduleView"), model, 0);
	var dayHeaderViewController = new DayHeaderViewController(dayView, model, 0);


	//var dayScheduleViewController = new DayScheduleViewController(dayView, model);

});