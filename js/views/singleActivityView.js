//singleActivityView constructor
var SingleActivityView = function (container, model, day, index){
	this.table = container.find('#singleActivityView');
	this.day = day;
	this.arrayindex = index;
	//console.log("singelActivity:" + model.days[0]._activities[0].getName());
	//console.log("singelActivity:" + model.days);


	var tr = $("<tr>");

	this.td = $("<td>");
	this.td2 = $("<td>");

	this.updateSingel = function(){
	//get class from activity type
		if(this.day == null){
			this.td.html(model.parkedActivities);
		}
		else{
			var typeString = (model.days[this.day]._activities[this.arrayindex].getType()).replace(' ','');
			this.td2.addClass(typeString);
			this.td2.html(model.days[this.day]._activities[this.arrayindex].getName());
		}
	}

	this.updateSingel();
	tr.append(this.td);
	tr.append(this.td2);
	container.append(tr);


	model.addObserver(this);
	//This function gets called when there is a change at the model
	this.update = function(arg){
		
	}
	/* should be moved to view -->
			<tr>
				<td>10 min</td>
	  			<td class="info">Introduction</td>
	  		</tr>
	  		<tr>
	  			<td>35 min</td>
	  			<td class="danger">Working in groups</td>
	  		</tr>
	  		<tr>
	  			<td>15 min</td>
	  			<td class="success">Idea 1 discussion</td>
	  		</tr>
	  		<tr>
	  			<td>30 min</td>
	  			<td class="warning">Coffee break</td>
	  		</tr>*/
}