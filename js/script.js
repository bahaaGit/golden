$(document).ready(function() {
	$('.textArea').on('hidden.bs.modal', function (e) {
	    $(this).val('').end();
	});
});