//DayHeaderView Object constructor 
//This view constructs a view for each day, it put out the initial starttime from the model,
// get the endtime and totaltime from the model
//it also creats an activitylist view to hold the dragables
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


//breakdiv is the div which the class making the line marking 30% breaks will be appended
	var breakdiv = $("<div>");
	this.chart.append(breakdiv);

	this.dayId = dayId;

	model.addObserver(this);


	//In the uptadet view function all parts of the day view that will be updated is placed. 
	this.updateView = function() {
		
		// When day is created it creates a activitylist view where activities can be dropped
		if (this.dayScheduleView == null) {
			this.dayScheduleView = this.container.find("#dayScheduleView");
			
			window.viewsMap["day"+dayId+"List"] = new ActivityListView(this.dayScheduleView, model, dayId);
			window.controllersMap["day"+dayId+"List"] = new ActivityListViewController(window.viewsMap["day"+dayId+"List"], model);
			window.dragAndDropLists.push("#"+this.dayScheduleView.attr("id"));
			window.linkDragAndDropLists();
		}
		//When the view updates the endtime and total time is emptied
		//The breack paragraph also gets emtied 
		this.endTime.empty();
		this.totalTime.empty();
		this.breakP.empty();

		//Setting day title, start time, end time and total time from model
		this.dayName.html("Day "+ (+dayId + 1));
		this.inputStartTime.attr("value", "0" + model.days[dayId].getStart() + "0");
		this.endTime.append("End time: "+ model.days[dayId].getEnd());
		this.totalTime.append("Total time: " + model.days[dayId].getTotalLength() + " min");

		//  getLengthByType() I need to get length of all types and then change styling from this
		//Divide the lengthbyType with total length to set a width parameter






		//Sets the width of the diffrent div for showing the total amount of presentaion,
		//group work, discussion and break activities
		//it's donr by dividing the total amount of every type of activity and then dividing with the 
		//total time of the day
		//they are not showed from begining becouse width = 0%
		this.pPart.css("width", (model.days[dayId].getLengthByType(0)/model.days[dayId].getTotalLength())*100 + "%");
		this.gwPart.css("width", (model.days[dayId].getLengthByType(1)/model.days[dayId].getTotalLength())*100 + "%");
		this.dPart.css("width", (model.days[dayId].getLengthByType(2)/model.days[dayId].getTotalLength())*100 + "%");
		this.bPart.css("width", (model.days[dayId].getLengthByType(3)/model.days[dayId].getTotalLength())*100 + "%");


		/* The styling class minBreak is added to the breakdiv for showing the total time isn't 0*/
		if( model.days[dayId].getTotalLength()!=0){
			breakdiv.addClass("minBreak");

			//If breaks are less then 30 % a text shows up, this is also dependent on that there actually is 
			// a total time
			if((model.days[dayId].getLengthByType(3)/model.days[dayId].getTotalLength())*100 < 30){
				this.breakP.html("Not enough breaks!").attr("style","color:red");
			}
			//Else if there is 30% or more there will be a text showing that there is 30% or more breaks
			else{
				this.breakP.html("You're day have 30% or more breaks, great!").attr("style","color:black");
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