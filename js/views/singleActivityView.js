//singleActivityView constructor
var SingleActivityView = function (container, model, day, index){
	this.table = container.find('#singleActivityView');
	this.day = day;
	this.arrayindex = index;

	//pop-up
	var modal = $("#addActivityModal");
	this.activityNameText = modal.find("#activityNameText");
	this.activityLengthMin = modal.find("#activityLengthMin");

	//var selected = model.days[this.day]._activities[this.arrayindex].getType().replace(' ','');
	//this.activityType;
	this.activityDescriptionText = modal.find("#activityDescriptionText");
	this.saveButton = modal.find("#saveChanges");
	this.activityTypeDropDown = modal.find("#activityTypeSelect");

	//creating the row + divs for one activity
	this.row = $("<div>");
	this.row.addClass("row");
	this.row.attr("data-toggle", "modal");
	this.row.attr("data-target", "#addActivityModal");
	this.div = $("<div>");
	this.div.addClass("col-md-4");
	this.div2 =$("<div>");

	this.updateSingel = function(){
		//update the activity in the parkedActivities
		var typeString;
		if(this.day == null){
			//this.td.html(model.parkedActivities[0].getName());
			this.div.html(model.parkedActivities[this.arrayindex].getLength() + " min");
			typeString = (model.parkedActivities[this.arrayindex].getType()).replace(' ','');
			this.div2.html(model.parkedActivities[this.arrayindex].getName());
		}
		//update the activity for the day
		else{
			//this.div.html(model.days[this.day]._activities[this.arrayindex].getLength() + " min");
			typeString = (model.days[this.day]._activities[this.arrayindex].getType()).replace(' ','');
			this.div2.html(model.days[this.day]._activities[this.arrayindex].getName());
		}
		this.activityType = modal.find("#" + typeString);
		this.div2.removeClass();
		this.div2.addClass("col-md-8");
		this.div2.addClass(typeString);
	}

	this.row.append(this.div);
	this.row.append(this.div2);
	container.append(this.row);

	//Register an observer to the model
	model.addObserver(this);
	//This function gets called when there is a change at the model
	this.update = function(arg){
		this.updateSingel();
	}

	this.updateSingel();
}