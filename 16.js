var number = 2;
var pow = 1000;
var sum = 0;

// Incorrect
function multiply(a) {
	a = a.toString();
	var current;
	var result = '';
	var reminder = 0;

	for (var i = a.length - 1; i >= 0; i--) {
		var current = (+a[i]) * 2 + reminder;

		if (current > 10) {
			reminder = parseInt(current / 10);
		} else {
			reminder = 0;
		}

		if (i !== 0)
			current = current % 10;

		result = current + '' + result;
	}

	return result;
}

function add(a, b) {
	var result = '';
	var left = 0;
	var currentSum = 0;

	if (!a)
		return b;

	if (a.length > b.length) {
		b = fillWIthNulls(b, a.length - b.length);
	} else {
		a = fillWIthNulls(a, b.length - a.length);
	}

	for (var i = a.length - 1; i >= 0; i--) {
		currentSum = +a[i] + (+b[i]) + left;

		if (i !== 0 && currentSum > 9) {
			left = parseInt(currentSum / 10);
			currentSum = currentSum % 10;
		} else {
			left = 0;
		}

		result = currentSum + '' + result;
	}

	return result;
}

function fillWIthNulls(number, length) {
	for (var i = 0; i < length; i++) {
		number = '0' + number;
	}

	return number;
}

for (var i = 1; i < pow; i++) {
	number = add(number.toString(), number.toString());
}

for (var i = number.length - 1; i >= 0; i--) {
	sum += parseInt(number[i]);
}

console.log(sum);