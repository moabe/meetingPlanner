// JavaScript Document

// The possible activity types
var ActivityType = ["Presentation","Group Work","Discussion","Break"];

// Variable to assign a unique ID to newly created activities
var  _activityUniqueId = 0;

// This is an activity constructor
// When you want to create a new activity you just call
// var act = new Activity("some activity",20,1,"Some description);
function Activity(name,length,typeid,description){
	var _name = name;
	var _length = length;
	var _typeid = typeid;
	var _description = description;
	var _uniqueid = _activityUniqueId++;
	
	// sets the name of the activity
	this.setName = function(name) {
		_name = name;
		model.notifyObservers();
	}

	// get the name of the activity
	this.getName = function(name) {
		return _name;
	}
	
	// sets the length of the activity
	this.setLength = function(length) {
		_length = length;
		model.notifyObservers();
	}

	// get the name of the activity
	this.getLength = function() {
		return _length;
	}
	
	// sets the typeid of the activity
	this.setTypeId = function(typeid) {
		_typeid = typeid;
		model.notifyObservers();
	}

	// get the type id of the activity
	this.getTypeId = function() {
		return _typeid;
	}
	
	// sets the description of the activity
	this.setDescription = function(description) {
		_description = description;
		model.notifyObservers();
	}

	// get the description of the activity
	this.getDescription = function() {
		return _description;
	}
	
	// This method returns the string representation of the
	// activity type.
	this.getType = function () {
		return ActivityType[_typeid];
	}
	
	// Returns the unique ID of the activity for identification purposes
	this.getUniqueId = function () {
		return _uniqueid;
	}
}

// This is a day consturctor. You can use it to create days, 
// but there is also a specific function in the Model that adds
// days to the model, so you don't need call this yourself.
function Day(startH,startM) {
	this._start = startH * 60 + startM;
	this._activities = [];

	// sets the start time to new value
	this.setStart = function(startH,startM) {
		this._start = startH * 60 + startM;
		model.notifyObservers();
	}

	// returns the total length of the acitivities in 
	// a day in minutes
	this.getTotalLength = function () {
		var totalLength = 0;
		$.each(this._activities,function(index,activity){
			totalLength += activity.getLength();
		});
		return totalLength;
	};
	
	// returns the string representation Hours:Minutes of 
	// the end time of the day
	this.getEnd = function() {
		var end = this._start + this.getTotalLength();
		var minutes = "" + (end % 60);
		if (minutes.length < 2) minutes = "0"+minutes;
		return  ((Math.floor(end/60) % 24)) + ":" + minutes;
	};
	
	// returns the string representation Hours:Minutes of 
	// the start time of the day
	this.getStart = function() {
		return (Math.floor(this._start/60 % 24)) + ":" + (this._start % 60);
	};
	
	// returns the length (in minutes) of activities of certain type
	this.getLengthByType = function (typeid) {
		var length = 0;
		$.each(this._activities,function(index,activity){
			if(activity.getTypeId() == typeid){
				length += activity.getLength();
			}
		});
		return length;
	};
	
	this.getActivityStart = function(activityUniqueId) {
		var time = this._start;
		for (var i = 0; i < this._activities.length && this._activities[i].getUniqueId() != activityUniqueId; ++i)
			time += this._activities[i].getLength();
		
		var minutes = "" + (time % 60);
		if (minutes.length < 2) minutes = "0"+minutes;
		return  ((Math.floor(time/60) % 24)) + ":" + minutes;
	}
	
	// adds an activity to specific position
	// if the position is not provided then it will add it to the 
	// end of the list
	this._addActivity = function(activity,position){
		if(position != null){
			this._activities.splice(position,0,activity);
		} else {
			this._activities.push(activity);
		}
	};
	
	// removes an activity from specific position
	// this method will be called when needed from the model
	// don't call it directly
	this._removeActivity = function(position) {
		return this._activities.splice(position,1)[0];
	};
	
	// moves activity inside one day
	// this method will be called when needed from the model
	// don't call it directly
	this._moveActivity = function(oldposition,newposition) {	
		if(newposition > oldposition && newposition < this._activities.length - 1) {
			newposition--;
		}
		
		var activity = this._removeActivity(oldposition);
		this._addActivity(activity, newposition);
	};
}


// this is our main module that contians days and praked activites
function Model(){
	this.days = [];
	this.parkedActivities = [];
	
	// adds a new day. if startH and startM (start hours and minutes)
	// are not provided it will set the default start of the day to 08:00
	this.addDay = function (startH,startM) {
		var day;
		if(startH){
			day = new Day(startH,startM);
		} else {
			day = new Day(8,0);
		}
		this.days.push(day);
		this.notifyObservers();
		return day;
	};
	
	// add an activity to model
	this.addActivity = function (activity,day,position) {
		if(day != null) {
			this.days[day]._addActivity(activity,position);
		} else {
			if (position != null) {
				this.parkedActivities.splice(position,0,activity);
			}
			else this.parkedActivities.push(activity);
		}
		this.notifyObservers();
	}
	
	// add an activity to parked activities
	this.addParkedActivity = function(activity,position){
		this.addActivity(activity,null,position);
	};
	
	// remove an activity on provided position from parked activites 
	this.removeParkedActivity = function(position) {
		act = this.parkedActivities.splice(position,1)[0];
		this.notifyObservers();
		return act;
	};
	
	// moves activity between the days, or day and parked activities.
	// to park activity you need to set the new day to null
	// to move a parked activity to let's say day 0 you set oldday to null
	// and new day to 0
	this.moveActivity = function(oldday, oldposition, newday, newposition) {
		if(oldday !== null && oldday == newday) {
			this.days[oldday]._moveActivity(oldposition,newposition);
		}else if(oldday == null && newday == null) {
			var activity = this.removeParkedActivity(oldposition);
			this.addParkedActivity(activity,newposition);
		}else if(oldday == null) {
			var activity = this.removeParkedActivity(oldposition);
			this.days[newday]._addActivity(activity,newposition);
		}else if(newday == null) {
			var activity = this.days[oldday]._removeActivity(oldposition);
			this.addParkedActivity(activity,newposition);
		} else {
			var activity = this.days[oldday]._removeActivity(oldposition);
			this.days[newday]._addActivity(activity,newposition);
		}
		this.notifyObservers();
		//this.print();
	};
	
	//*** OBSERVABLE PATTERN ***
	var listeners = [];
	
	this.notifyObservers = function (args) {	
	    for (var i = 0; i < listeners.length; i++){
	        listeners[i].update(args);
	    }
	};
	
	this.addObserver = function (listener) {
	    listeners.push(listener);
	};
	//*** END OBSERVABLE PATTERN ***
	
	this.print = function() {
		console.log("#### PARKED");
		for (var i = 0; i < this.parkedActivities.length; ++i)
			console.log("    # "+this.parkedActivities[i].getName());
		for (var j = 0; j < this.days.length; ++j) {
			console.log("#### DAY "+j);
			for (var i = 0; i < this.days[j]._activities.length; ++i)
				console.log("    # "+this.days[j]._activities[i].getName());
		}
		console.log("###########");
	};
}

// this is the instance of our main model
// this is what you should use in your application
var model = new Model();


// you can use this method to create some test data and test your implementation
function createTestData(){
	/*model.addDay();
	model.addActivity(new Activity("Introduction",10,0,""),null);
	model.addActivity(new Activity("Idea 1",30,0,""),0);
	model.addActivity(new Activity("Working in groups",35,1,""),0);
	model.addActivity(new Activity("Idea 1 discussion",15,2,""),0);
	model.addActivity(new Activity("Coffee break",20,3,""),0);
	
	console.log("PARKED: " + model.parkedActivities);
	console.log("parkedActivities name: " + model.parkedActivities[0].getName());
	console.log("Day Start: " + model.days[0].getStart());
	console.log("Day End: " + model.days[0].getEnd());
	console.log("Day Length: " + model.days[0].getTotalLength() + " min");
	$.each(ActivityType,function(index,type){
		console.log("Day '" + ActivityType[index] + "' Length: " +  model.days[0].getLengthByType(index) + " min");
	});*/
	model.addActivity(new Activity("0",0,0,""),null);
	model.addActivity(new Activity("1",1,1,""),null);
	model.addActivity(new Activity("2",2,2,""),null);
	model.addActivity(new Activity("3",3,3,""),null);
}

createTestData();