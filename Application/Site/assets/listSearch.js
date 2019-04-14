//Add function
$(document).ready(function() {

	$('#listSearch').on('input',e => {

		let txt = e.currentTarget.value.toLowerCase();
		let entries = $('.homeListEntry');
		let noResults =  $('#noSearchResults');

		if (txt.length <= 0) {
			//Show everything
			entries.show();
			noResults.hide();
		}else{
			//Hide everything
			entries.hide();
			//Show relevant entries
			let toShow = entries.children('.homeListAddress[name*="'+txt+'"]').parent();
			toShow.show();

			//Show/hide 'No results found' display
			if (toShow.length <= 0) {
				noResults.show();
			}else{
				noResults.hide();
			}
		}

	});
});