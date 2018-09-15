inlets = 1;
outlets = 9;

var buffer = new Buffer("seq");

var duration = buffer.length();
var noteDuration = 250;


function getDuration() {
	post(duration);
}

function getStartPositions() {
	for (var i = 0; i < 8; i++) {
		var number = Math.floor(Math.random() * duration);
		outlet(i, "start", number, number + noteDuration, noteDuration);
		post(number);
	}
}

function msg_int(v) {
	noteDuration = v;
	outlet(8, noteDuration);
}