const THIRTY = 30;

function getMinutesSinceMidnight() {
	// 1. Get the current date and time
	const now = new Date();

	// 2. Extract the LOCAL hours and minutes
	const hours = now.getHours();
	const minutes = now.getMinutes();

	// 3. Calculate total minutes (17 * 60 + 24 = 1044)
	const totalMinutes = (hours * 60) + minutes;

	return totalMinutes;
}

function getTextFromMinutes(minutes) {
	let text = `\\frac{${minutes}\\pi}{30}`;
	for (let i = 2; i <= THIRTY; i++) {
		console.log(minutes % i, i)
		// if (i === THIRTY) {
		// 	if (minutes/i == 1) {
		// 		text = `\\pi`
		// 	} else {
		// 		text = `${minutes/i}\\pi`
		// 	}
		// }
		if (minutes % i === 0 && THIRTY % i === 0) {
			if (i === THIRTY) {
				text = `${minutes / i}\\pi`
			}
			else {
				text = `\\frac{${minutes / i}\\pi}{${THIRTY / i}}`
			}
		}
	}
	return text;
}


let minutes = getMinutesSinceMidnight();
let timeText;

if (minutes == 3 * 60) {
	timeText = "0"
}
else if (minutes < 3 * 60) {
	minutes += 21 * 60;
	timeText = getTextFromMinutes(minutes);
} else if (minutes > 12 * 60) {
	minutes -= 27 * 60;
	timeText = getTextFromMinutes(minutes);
} else {
	minutes -= 3 * 60;
	timeText = getTextFromMinutes(minutes);
}



document.addEventListener('DOMContentLoaded', function() {
	katex.render(timeText, document.getElementById("radian-time"));
})

