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
	this.GroupWork = modal.find("#" + selected);
	console.log("getTypeId", model.days[this.day]._activities[this.arrayindex].getType());
	this.activityDescriptionText = modal.find("#activityDescriptionText");
	
	//console.log("singelActivity:" + model.days[0]._activities[0].getName());
	//console.log("singelActivity:" + model.days);

/*
	var tr = $("<tr>");

	this.td = $("<td>");
	this.td2 = $("<td>");*/

	this.row = $("<div>");
	this.row.addClass("row");
	this.row.attr("data-toggle", "modal");
	this.row.attr("data-target", "#addActivityModal");
	this.div = $("<div>");
	this.div.addClass("col-md-4");
	this.div2 =$("<div>");
	this.div2.addClass("col-md-8");

	this.updateSingel = function(){
	//get class from activity type
		if(this.day == null){
			this.td.html(model.parkedActivities[0].getName());
		}
		else{
			this.div.html(model.days[this.day]._activities[this.arrayindex].getLength() + " min");
			var typeString = (model.days[this.day]._activities[this.arrayindex].getType()).replace(' ','');
			this.div2.addClass(typeString);
			this.div2.html(model.days[this.day]._activities[this.arrayindex].getName());
		}
	}

	this.updateSingel();
	this.row.append(this.div);
	this.row.append(this.div2);
	container.append(this.row);


	model.addObserver(this);
	//This function gets called when there is a change at the model
	this.update = function(arg){
		
	}
}