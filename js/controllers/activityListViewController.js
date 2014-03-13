var ActivityListViewController = function(view, model) {
	
	view.container.sortable({
		start : function(event, ui) {
			var startPos = ui.item.index();
			ui.item.data("startPos", startPos);
			ui.item.data("day", view.dayId);
		},
		change: function(event, ui) {
			ui.item.data("endPos", ui.placeholder.index());
		},
		update : function(event, ui) { // This is called one per each day involved in the activity 
			
			var startPos = ui.item.data("startPos");
			var endPos = ui.item.data("endPos");
			var oldDay = ui.item.data("day");
			
			if (oldDay == view.dayId) { // Case move in the same list

				if (endPos >= model.days[view.dayId]._activities.length) { // Probably outing
					endPos = startPos;
				}
				
				ui.item.data("startPos", endPos); // We reset the end position in case we are actually changing day
				
				model.moveActivity(view.dayId, startPos, view.dayId, endPos);
			}
			else { // From one to another					
				model.moveActivity(oldDay, startPos, view.dayId, endPos);
			}
		}
	});
}
