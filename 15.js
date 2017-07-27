const factorial = (number) => {
	let fac = 1;
	for (let i = 1; i <= number; i++) {
		fac *= i;
	}

	return fac;
};
const count = (gridSize) => (factorial(gridSize * 2) / (factorial(gridSize) ** 2));

console.log(count(20))