function checkAge(birthdate) {
	const todayDate = new Date();
	const year = todayDate.getFullYear();

	return year - birthdate;
}

console.log(`Jorge is ${checkAge(1999)} years old.`);
