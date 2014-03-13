//DayHeaderView Object constructor
var DayHeaderView = function(container, model, dayId) {

	this.endTime = container.find("#endTime");
	this.totalTime = container.find("#totalTime");


	//model.days[dayId]._activities[i].getName()

	this.endTime.append(model.days[dayId].getEnd());
	this.totalTime.append(model.days[dayId].getTotalLength() + " min");



	/*
	<div class="row">
		<div class= "col-md-8" >
						<div><p id="endTime">End time: 10:55</p></div>
						<p id="totalTime"> Total time: 175 min</p>
					</div>
				</div>*/


	//this.refreshView("Filter by course", "");
	this.updateView();

	this.update = function(args) {
		this.updateView();
	}



	model.addObserver(this);
	//This function gets called when there is a change at the model
	this.update = function(arg) {

	}

}