var DayScheduleViewController = function(view, model){
	
	var list = $("#daySchedule");
	
	list.sortable({
		update: function() {
			$('.panel', list).each(function(index, elem) {
				 var $listItem = $(elem),
					 newIndex = $listItem.index();

				 // Change the model
			})
		}
	});
}

