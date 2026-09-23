const lastDayOfCourse = new Date("2027-06-19");
function secondsToEndOfCourse() {
	const currentDate = new Date();

	const diffInMS = lastDayOfCourse - currentDate;
	const secondsRemaining = Math.floor(diffInMS / 1000);
	console.log(`Seconds remaining to the end of the course: ${secondsRemaining}`);
}

setInterval(secondsToEndOfCourse, 1000);
