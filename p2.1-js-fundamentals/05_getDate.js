const currentDate = () => {
	const newDate = new Date();

	return `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
};

console.log(currentDate());
