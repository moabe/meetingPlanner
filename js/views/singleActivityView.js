//singleActivityView constructor
var SingleActivityView = function (container, model){

	this.table = container.find('#singleActivityView');

	console.log("singelActivity:" + model.days[0]._activities[0].getName());
	console.log("singelActivity:" + model.days);


	var tr = $("<tr>");
	var td = $("<td>");
	td.html(model.days[0]._activities[0].getLength);
	var td2 = $("<td>");
	td2.addClass("Presentation"); //class should come from model
	td2.html(model.days[0]._activities[0].getName);

	tr.append(td);
	tr.append(td2);
	container.append(tr);

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