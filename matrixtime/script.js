function gcd(a, b) {
	if (b === 0) {
		return a;
	}
	return gcd(b, a % b);
}

function radialFromSeconds(seconds) {
	if (seconds === 0) {
		return "0 "
	} else if (seconds == 30) {
		return "\\pi"
	}
	else {
		let sec_gcd = gcd(seconds, 30);
		if (sec_gcd === seconds) {
			return `\\frac{\\pi}{${30 / sec_gcd}} `
		} else {
			return `\\frac{${seconds / sec_gcd}\\pi}{${30 / sec_gcd}} `
		}
	}
}

function updateMatrixTime() {
	const now = new Date();

	let timeText = "\\begin{bmatrix} ";

	const curHours = now.getHours();
	const curMinutes = now.getMinutes();
	const curSeconds = now.getSeconds();

	for (let minutes = 0; minutes < 60; minutes++) {
		for (let hours = 0; hours < 24; hours++) {
			if (hours === curHours && minutes === curMinutes) {
				timeText += radialFromSeconds(curSeconds);
			} else {
				timeText += `0 `
			}

			if (hours === 23) {
				timeText += "\\\\ "
			} else {
				timeText += "& "
			}
		}
	}

	timeText += "\\end{bmatrix}"

	katex.render(timeText, document.getElementById("shit"))
}

document.addEventListener('DOMContentLoaded', function() {
	setInterval(updateMatrixTime, 1000)
})

