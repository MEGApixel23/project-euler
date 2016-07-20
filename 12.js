var result = (function (max) {
	var currentTriangle = 0;
	var currentNumber = 0;

	function getTriangle(number) {
		for (var i = currentNumber + 1; i <= number; i++) {
			currentTriangle += i;
		}
		currentNumber = number;

		return currentTriangle;
	}

	function countDivisors(number) {
		var count = 0;

		for (var i = 1; i <= Math.sqrt(number); i++) {
			if (number % i !== 0)
				continue;

			count++;

			if (i !== number / i)
				count++;
		}

		return count;
	}

	var triangle = 0;
	var count = 0;

	for (var i = 1; true; i++) {
		triangle = getTriangle(i);
		count = countDivisors(triangle);

		if (count > max)
			return triangle;
	}
})(500);

console.log(result);