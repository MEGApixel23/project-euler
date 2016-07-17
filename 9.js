var sum = 1000;
var result = 0;

function getNumbers(sum) {
	for (var c = sum - 1; c > 0; c--) {
		for (var b = c - 1; b > 0; b--) {
			for (var a = b - 1; a > 0; a--) {
				if (a + b + c !== sum) {
					continue;
				}

				if ((Math.pow(a, 2) + Math.pow(b, 2)) !== Math.pow(c, 2)) {
					continue;
				}

				return {a: a, b: b, c: c};
			}
		}
	}

	return false;
}

numbers = getNumbers(sum);
if (numbers) {
	result = numbers.a * numbers.b * numbers.c;
}

console.log(result);