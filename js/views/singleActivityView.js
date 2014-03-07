//singleActivityView constructor
var SingleActivityView = function (container, model, day, index){
	this.table = container.find('#singleActivityView');
	this.day = day;
	this.arrayindex = index;
	//console.log("singelActivity:" + model.days[0]._activities[0].getName());
	//console.log("singelActivity:" + model.days);

/*
	var tr = $("<tr>");

	this.td = $("<td>");
	this.td2 = $("<td>");*/

	var row = $("<div>");
	row.addClass("row");
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
	row.append(this.div);
	row.append(this.div2);
	container.append(row);


	model.addObserver(this);
	//This function gets called when there is a change at the model
	this.update = function(arg){
		
	}
}