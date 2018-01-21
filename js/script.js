$(document).ready(function() {
	// Calculating and applying notes' lengths
	function getNoteLength(numberOfCells) {
		var width = 0;
		var checkingElement = '#aug3';
		for(var i = 0; i < numberOfCells; i++) {
			width += $(checkingElement).outerWidth();
			checkingElement = $(checkingElement).next();
		}
		// -2 is the size of the border which I do not need
		width = width - 2 + 'px';
		return width;
	}

	$('.green').css('width', getNoteLength(3));
	$('#aug7 .yellow:nth-of-type(2)').css('width', getNoteLength(3));
	$('#aug7 .yellow:last-of-type').css('width', getNoteLength(3));
	$('#aug10 .yellow').css('width', getNoteLength(2));
	$('.red').css('width', getNoteLength(3));
	$('.purple').css('width', getNoteLength(1));
	$('.seagreen').css('width', getNoteLength(2));
});