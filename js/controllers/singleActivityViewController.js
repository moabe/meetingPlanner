//Shows the pop up window when the user has clicked an activity
var SingleActivityViewController = function(view, model){

	this.popUp = window.controllersMap["popUp"];

	view.container.click(function() {
		//call the popUpChange function in the popUpView to show and change the popUp values
		window.popUpView.popUpChange(view.activity);
	});
}

