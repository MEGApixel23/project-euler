var gridSIze = 20;

function factorial(number) {
	var result = 1;

	for (var i = 1; i <= number; i++) {
		result *= i;
	}

	return result;
}

var items = gridSIze + gridSIze;
var combinations = factorial(items - 1);

console.log(combinations);