var SingleActivityViewController = function(view, model){

	this.popUp = window.controllersMap["popUp"];

	view.container.click(function() {
		window.popUpView.popUpChange(view.activity);

	});
}

