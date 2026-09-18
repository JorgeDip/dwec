const date1 = new Date("2026-09-10");
const date2 = new Date();

function daysBetweenDates(date1, date2) {
	const dayInMS = 1000 * 60 * 60 * 24;
	const diffInMs = Math.abs(date2 - date1);

	return Math.floor(diffInMs / dayInMS);
}

console.log(`The course started ${daysBetweenDates(date1, date2)} days ago.`);
