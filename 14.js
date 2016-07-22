var currentNumber;
var maxNumber = 13;
var sequence = [];
var prevSequence = [];

function nextNumber(number) {
	return (number % 2 === 0) ? (number / 2) : (3 * number + 1);
}

for (var i = maxNumber; i >= 0; i--) {
	sequence = [];
	currentNumber = i;

	sequence.push(currentNumber);

	while (true) {
		currentNumber = nextNumber(currentNumber);
		sequence.push(currentNumber);

		if (currentNumber === 1)
			break;
	}

	break;
}

console.log(sequence);