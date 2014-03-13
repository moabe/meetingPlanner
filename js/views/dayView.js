//DayHeaderView Object constructor
var DayView = function(container, model, dayId) {

	this.endTime = container.find("#endTime");
	this.totalTime = container.find("#totalTime");
	this.dayScheduleView = container.find("#dayScheduleView");
	//need to get this one in the controller
	this.inputStartTime = container.find("#inputStartTime");




	this.dayId = dayId;

	model.addObserver(this);



	this.updateView = function() {


		/*
		Fills the list of dragable activities in the day
		<ul id="dayScheduleView" class="list-unstyled"></ul>
		*/
		this.dayScheduleView.empty();

		for (var i = 0; i < model.days[dayId]._activities.length; ++i) {
			var a = $("<li>");
			a.addClass("panel panel-info");
			a.html(model.days[dayId]._activities[i].getName());
			this.dayScheduleView.append(a);
		}


		/*
	Puts end time and total time into the header of a day. 
	Gets the data from the model. 
	<div class="row">
		<div class= "col-md-8" >
			<div><p id="endTime">End time: </p></div>
			<p id="totalTime"> Total time: </p>
		</div>
	</div>*/
		this.endTime.empty();
		this.totalTime.empty();


		this.endTime.append("End time: "+ model.days[dayId].getEnd());

		this.totalTime.append(model.days[dayId].getTotalLength() + " min");


	}



	this.updateView();

	this.update = function(args) {
		this.updateView();
	}


	//This function gets called when there is a change at the model


}