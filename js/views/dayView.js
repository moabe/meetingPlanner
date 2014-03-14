//DayHeaderView Object constructor
var DayView = function(container, model, dayId) {


	this.container = container.clone();
	this.container.insertBefore($("#addDayButton"));
	this.container.attr("id", container.attr("id")+dayId);

	this.endTime = this.container.find("#endTime");
	this.totalTime = this.container.find("#totalTime");
	this.dayScheduleView = null;
	//need to get this one in the controller
	this.inputStartTime = this.container.find("#inputStartTime");
	this.chart = this.container.find("#chart");





	this.dayId = dayId;



	model.addObserver(this);




	this.updateView = function() {
		
		// If first time filling the view
		if (this.dayScheduleView == null) {
			this.dayScheduleView = this.container.find("#dayScheduleView");
			
			window.viewsMap["day"+dayId] = new ActivityListView(this.dayScheduleView, model, dayId);
			window.controllersMap["day"+dayId] = new ActivityListViewController(window.viewsMap["day"+dayId], model);
			window.dragAndDropLists.push("#"+this.dayScheduleView.attr("id"));
			window.linkDragAndDropLists();
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
		this.chart.empty();


		this.endTime.append("End time: "+ model.days[dayId].getEnd());
		this.totalTime.append("Total time: " + model.days[dayId].getTotalLength() + " min");


		//  getLengthByType() I need to get length of all types and then change styling from this
		//Divide the lengthbyType with total length to set a width parameter
		var chartDiv = $("<div>");
		chartDiv.attr("id","chartDiv");

		var percentage = (model.days[dayId].getLengthByType(1)/model.days[dayId].getTotalLength())*100 + "%";

		chartDiv.css("width", percentage);
		chartDiv.addClass("groupWorkColor");

		this.chart.append(chartDiv);
		



		


		this.container.show();
	}



	this.updateView();

	this.update = function(args) {
		this.updateView();
	}


	//This function gets called when there is a change at the model


}