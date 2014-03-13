//singleActivityView constructor
var SingleActivityView = function (container, model, day, index){
	this.table = container.find('#singleActivityView');
	this.day = day;
	this.arrayindex = index;

	//pop-up
	var modal = $("#addActivityModal");
	this.activityNameText = modal.find("#activityNameText");
	this.activityLengthMin = modal.find("#activityLengthMin");
	var selected = model.days[this.day]._activities[this.arrayindex].getType().replace(' ','');
	this.activityType = modal.find("#" + selected);
	console.log("getTypeId", model.days[this.day]._activities[this.arrayindex].getType());
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
	//get class from activity type
		if(this.day == null){
			//this.td.html(model.parkedActivities[0].getName());
		}
		else{
			this.div.html(model.days[this.day]._activities[this.arrayindex].getLength() + " min");
			var typeString = (model.days[this.day]._activities[this.arrayindex].getType()).replace(' ','');
			this.activityType = modal.find("#" + typeString);
			console.log(typeString);
			this.div2.removeClass();
			this.div2.addClass("col-md-8");
			this.div2.addClass(typeString);
			this.div2.html(model.days[this.day]._activities[this.arrayindex].getName());
		}
	}

	this.row.append(this.div);
	this.row.append(this.div2);
	container.append(this.row);

	//Register an observer to the model
	console.log("nu vill jag lägga in i modelen");
	model.addObserver(this);
	//This function gets called when there is a change at the model
	this.update = function(arg){
		console.log("single up"),
		this.updateSingel();
	}

	this.updateSingel();
}