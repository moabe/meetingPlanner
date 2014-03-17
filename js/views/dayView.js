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
	this.pPart = this.container.find("#pPart");
	this.gwPart = this.container.find("#gwPart");
	this.dPart = this.container.find("#dPart");
	this.bPart = this.container.find("#bPart");
	this.breakP = this.container.find("#breakP");


	var breakdiv = $("<div>");
	this.chart.append(breakdiv);







	this.dayId = dayId;

	model.addObserver(this);

	this.updateView = function() {
		
		// If first time filling the view
		if (this.dayScheduleView == null) {
			this.dayScheduleView = this.container.find("#dayScheduleView");
			
			window.viewsMap["day"+dayId+"List"] = new ActivityListView(this.dayScheduleView, model, dayId);
			window.controllersMap["day"+dayId+"List"] = new ActivityListViewController(window.viewsMap["day"+dayId+"List"], model);
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
		this.breakP.empty();
		//this.inputStartTime.empty();


		this.inputStartTime.attr("value", "0" + model.days[dayId].getStart() + "0");
		this.endTime.append("End time: "+ model.days[dayId].getEnd());
		this.totalTime.append("Total time: " + model.days[dayId].getTotalLength() + " min");

		//  getLengthByType() I need to get length of all types and then change styling from this
		//Divide the lengthbyType with total length to set a width parameter
		/*

		*/

		this.pPart.css("width", (model.days[dayId].getLengthByType(0)/model.days[dayId].getTotalLength())*100 + "%");
		this.gwPart.css("width", (model.days[dayId].getLengthByType(1)/model.days[dayId].getTotalLength())*100 + "%");
		this.dPart.css("width", (model.days[dayId].getLengthByType(2)/model.days[dayId].getTotalLength())*100 + "%");
		this.bPart.css("width", (model.days[dayId].getLengthByType(3)/model.days[dayId].getTotalLength())*100 + "%");

		if((model.days[dayId].getLengthByType(3)/model.days[dayId].getTotalLength())*100 < 30){
			this.breakP.html("not enouch breaks!!!!!!!!");

		}

		/* make a line div for showing how much is 30% breaks 
		<div class="minBreak"></div>*/

		if(model.days[dayId].getLengthByType(0) != 0 || model.days[dayId].getLengthByType(1) != 0 || model.days[dayId].getLengthByType(2) != 0|| model.days[dayId].getLengthByType(3) != 0){
			breakdiv.addClass("minBreak");
			

		}
		else{
			breakdiv.removeClass("minBreak");
		}







		/*
		for(i=0; i< ActivityType.length; i++){
		//var chartPart = $("<div>");
		//chartPart.attr("id","chartDiv");


			if(i ==0) chartPart.addClass("presentationColor");
			if(i == 1) chartPart.addClass("groupWorkColor");
			if(i == 2) chartPart.addClass("discussionColor");
			if(i == 3) chartPart.addClass("breakColor");

			var percentage = (model.days[dayId].getLengthByType(i)/model.days[dayId].getTotalLength())*100 + "%";
			chartPart.css("width", percentage);


		//this.chart.append(chartPart);

		}*/

		
		this.container.show();
	}

	this.updateView();

	this.update = function(args) {
		this.updateView();
	}
}