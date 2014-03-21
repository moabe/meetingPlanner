var ActivityListViewController = function(view, model) {
	
	/**
	 * We use jquery-ui-1.10.4 sortable lists to get the drag and drop working
	 *
	 * "sortable" moves the views between lists for us so we just have to update the model with the
	 * changes "sortable" informs us through the functions below
	 **/
	
	view.container.sortable({
		// Function "start" is called whenever we start a drag, on the list we are dragging from.
		// We store the info about the activity on the "ui.item.data"
		start : function(event, ui) {
			var startPos = ui.item.index();
			ui.item.data("startPos", startPos);
			ui.item.data("day", view.dayId);
		},
		// Function "change" is called whenever an activity being dragged changes position on the
		// list is being heald over.
		// The info stored on "ui.item.data" is the same that started on "start", so we just store
		// the position that will probably fall
		change: function(event, ui) {
			ui.item.data("endPos", ui.placeholder.index());
		},
		// Function "update" is called whenever we drop an activity. It is called once on the original
		// list where the activity came from and once on the activity where is dropped.
		// The info stored on "ui.item.data" is the info that was stored during the dragging time
		update : function(event, ui) { // This is called one per each day involved in the activity 
			
			var startPos = ui.item.data("startPos");
			var endPos = ui.item.data("endPos");
			var oldDay = ui.item.data("day");
			
			// In case we are moving activities on the same day we have to discount the position
			// we just moved in case we are moving the activity higher in the list
			if (oldDay == view.dayId && endPos > startPos) --endPos;

			
			if (oldDay == view.dayId) { // Case move in the same list
				var dayActivities = (view.dayId == null)? model.parkedActivities : model.days[view.dayId]._activities; 
				
				if (endPos >= dayActivities.length) endPos = startPos;	// We are actuall			
				else ui.item.data("startPos", endPos); // We reset the end position in case we are actually changing day
				
				model.moveActivity(view.dayId, startPos, view.dayId, endPos);
				
			}
			else { // From one to another									
				// Update the day on the single activity view
				var dayActivities = (oldDay == null)? model.parkedActivities : model.days[oldDay]._activities;
				window.viewsMap[dayActivities[startPos].getUniqueId()].day = view.dayId;
				
				model.moveActivity(oldDay, startPos, view.dayId, endPos);

			}
		}
	});
}
