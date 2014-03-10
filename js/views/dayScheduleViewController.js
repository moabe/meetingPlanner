var DayScheduleViewController = function(view, model){
	
	view.container.sortable({
		start : function(event, ui) {
			var startPos = ui.item.index();
			ui.item.data("startPos", startPos);
			ui.item.data("day", view.dayId);
		},
		change : function(event, ui) {
			var startPos = ui.item.data("startPos");
			var index = ui.placeholder.index();
			
			console.log(startPos+" -> "+index+", from "+ui.item.data("day")+" -> "+view.dayId);
		},
		update: function(event, ui) {
		}
	});
}

