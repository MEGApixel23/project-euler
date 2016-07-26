var gridSIze = 2;

function factorial(number) {
	var result = 1;

	for (var i = 1; i <= number; i++) {
		result *= i;
	}

	return result;
}

var items = gridSIze + gridSIze;
var combinations = factorial(items);

console.log(combinations);