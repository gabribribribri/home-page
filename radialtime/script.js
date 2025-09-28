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

function getTextFromMinutes(minutes) {
	let minutes_gcd = Math.abs(gcd(minutes, 30));

	if (minutes_gcd === 30) {
		return `${minutes/minutes_gcd}\\pi\\hspace{2mm}Ggt`;
	} else {
		return `\\frac{${minutes/minutes_gcd}\\pi}{${30/minutes_gcd}}\\hspace{2mm}Ggt`
	}
}


let minutes = getMinutesSinceMidnight();

if (minutes < 3 * 60) {
	minutes += 21 * 60;
} else if (minutes > 12 * 60) {
	minutes -= 27 * 60;
} else {
	minutes -= 3 * 60;
}

let timeText = getTextFromMinutes(minutes);


document.addEventListener('DOMContentLoaded', function() {
	katex.render(timeText, document.getElementById("radian-time"));
})

