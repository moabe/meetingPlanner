//DayHeaderView Object constructor
var DayView = function(container, model, dayId) {

	this.container = container.clone();
	this.container.insertBefore($("#addDayButton"));
	this.container.attr("id", container.attr("id")+dayId);

	this.dayName = this.container.find("#dayName");
	this.endTime = this.container.find("#endTime");
	this.totalTime = this.container.find("#totalTime");
	this.dayScheduleView = null;
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
		
		this.endTime.empty();
		this.totalTime.empty();
		this.breakP.empty();

		this.dayName.html("Day "+dayId);
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


		/* make a line div for showing how much is 30% breaks 
		<div class="minBreak"></div>*/

		if(model.days[dayId].getLengthByType(0) != 0 || model.days[dayId].getLengthByType(1) != 0 || model.days[dayId].getLengthByType(2) != 0|| model.days[dayId].getLengthByType(3) != 0){
			breakdiv.addClass("minBreak");

			if((model.days[dayId].getLengthByType(3)/model.days[dayId].getTotalLength())*100 < 30){
				this.breakP.html("Not enough breaks! You're day should have at least 30% breaks.");
			}
			else{
				this.breakP.html("You're day have 30% or more breaks, great!")
			}
			
		}
		else{
			breakdiv.removeClass("minBreak");
		}

		
		this.container.show();
	}

	this.updateView();

	this.update = function(args) {
		this.updateView();
	}
}