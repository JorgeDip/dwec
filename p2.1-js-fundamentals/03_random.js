const randomNumber = (min, max) => {
	console.log(Math.floor(Math.random() * (max - min) + min));
};

randomNumber(0, 9999);
randomNumber(10, 40);
randomNumber(18, 90);
randomNumber(1980, 2020);
randomNumber(333, 999);

randomNumber(111, 333);
randomNumber(99, 999);
randomNumber(10000, 99999);
randomNumber(1, 100);
randomNumber(1999, 2026);
