//singleActivityView constructor
var SingleActivityView = function (container, model, activity){
	this.container = container.clone();
	
	this.activity = activity;
	this.day = null;
	
	//creating the row + divs for one activity
	this.div = this.container.find("#timeBox");
	this.div2 = this.container.find("#colorBox");

	this.updateSingle = function(){
		this.div2.html(this.activity.getName());
		
		//update the activity in the parkedActivities		
		if(this.day == null){
			this.div.html(this.activity.getLength() + " min");
			this.div2.removeClass();
			this.div2.addClass("col-md-8 col-xs-8 activity");
			var typeString = this.activity.getType().replace(' ','');
			this.div2.addClass(typeString);
		}
		//update the activity for the day
		else{
			this.div.html(model.days[this.day].getActivityStart(this.activity.getUniqueId()));
			this.div2.removeClass();
			this.div2.addClass("col-md-8 col-xs-8 activity");
			var typeString = this.activity.getType().replace(' ','');
			this.div2.addClass(typeString);
		}
	}

	this.container.show();

	//Register an observer to the model
	model.addObserver(this);

	//This function gets called when there is a change at the model
	this.update = function(arg){
		this.updateSingle();
	}
	this.updateSingle();
}