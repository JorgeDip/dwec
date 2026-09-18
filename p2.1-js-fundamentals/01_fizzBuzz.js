function fizzBuzz() {
	for (let index = 1; index <= 100; index++) {
		if (index % 3 == 0 && index % 5 == 0) {
			console.log("FizzBuzz");
		}
	}
}

fizzBuzz();
