var DayScheduleViewController = function(view, model){
	
	view.container.sortable({
		start : function(event, ui) {
			var startPos = ui.item.index();
			ui.item.data("startPos", startPos);
			ui.item.data("day", view.dayId);
		},
		change : function(event, ui) {
			ui.item.data("endPos", ui.placeholder.index());
		},
		update : function(event, ui) {
			var startPos = ui.item.data("startPos");
			var index = ui.item.data("endPos");
			
			console.log(startPos+" -> "+index+", from "+ui.item.data("day")+" -> "+view.dayId);
		},
		out: function(event, ui) {
			var startPos = ui.item.data("startPos");
			var index = ui.item.data("endPos");
			
			console.log("Outing: "+startPos+" -> "+index+", from "+ui.item.data("day")+" -> "+view.dayId);
		}
	});
}

