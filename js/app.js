//Initialize the model, the views and controllers
$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "home";
	
	//We instantiate our model
	var model = new Model();
	
	//And create the needed controllers and views
	var activityListView = new ActivityListView($("#activityListView"), model);
});