var currentNumber;
var maxNumber = 1000 * 1000;
var sequence = [];
var longestSequenceLength = 0;
var neededNumber = 0;

function nextNumber(number) {
	return (number % 2 === 0) ? (number / 2) : (3 * number + 1);
}

for (var i = maxNumber; i > 1; i--) {
	sequence = [];
	currentNumber = i;

	sequence.push(currentNumber);

	while (true) {
		currentNumber = nextNumber(currentNumber);
		sequence.push(currentNumber);

		if (currentNumber === 1)
			break;
	}

	if (sequence.length > longestSequenceLength) {
		longestSequenceLength = sequence.length;
		neededNumber = i;
	}
}

console.log(neededNumber);