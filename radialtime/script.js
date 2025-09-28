function getMinutesSinceMidnight() {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const totalMinutes = (hours * 60) + minutes;
	return totalMinutes;
}

function gcd(a, b) {
	if (b === 0) {
		return a;
	}
	return gcd(b, a % b);
}

function getTextFromMinutesGgt(minutes) {
	let text;

	if (minutes === 3 * 60) {
		text = "0"
	}

	let minutes_gcd = Math.abs(gcd(minutes, 30));

	if (minutes_gcd === 30) {
		text = `${minutes / minutes_gcd}\\pi`;
	} else {
		text = `\\frac{${minutes / minutes_gcd}\\pi}{${30 / minutes_gcd}}`
	}
	return text + "\\hspace{2mm}Ggt";
}

function getTextFromMinutesCt(minutes) {
	let text;

	if (minutes === 0) {
		text = "0"
	}

	let minutes_gcd = Math.abs(gcd(minutes, 360));

	if (minutes_gcd == 360) {
		text = `${minutes / minutes_gcd}\\pi`;
	} else {
		text = `\\frac{${minutes / minutes_gcd}\\pi}{${360 / minutes_gcd}}`;
	}

	return text + "\\hspace{2mm}Ct";
}

function updateRadialTimeGgt() {
	let minutes = getMinutesSinceMidnight();
	if (minutes < 3 * 60) {
		minutes += 21 * 60;
	} else if (minutes > 12 * 60) {
		minutes -= 27 * 60;
	} else {
		minutes -= 3 * 60;
	}
	let timeText = getTextFromMinutesGgt(minutes);
	katex.render(timeText, document.getElementById("radial-time-ggt"))
}

function updateRadialTimeCt() {
	let minutes = getMinutesSinceMidnight();

	if (minutes >= 12 * 60) {
		minutes -= 24 * 60
	}

	let timeText = getTextFromMinutesCt(minutes);
	katex.render(timeText, document.getElementById("radial-time-ct"))
}


document.addEventListener('DOMContentLoaded', function() {
	setInterval(updateRadialTimeGgt, 1000)
	setInterval(updateRadialTimeCt, 1000)
})

