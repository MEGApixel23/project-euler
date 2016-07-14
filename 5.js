var divisors = [];
var maxDivisor = 20;
var minDivisor = 2;
var smallestNumber = maxDivisor;
var correctNumber;

for (var i = minDivisor, correctDivisor; i <= maxDivisor; i++) {
	correctDivisor = true;

	for (var j = 0; j < divisors.length; j++) {
		if (i % divisors[j] === 0) {
			divisors.splice(j, 1);
			break;
		}
	}

	divisors.push(i);
}

while (true) {
	correctNumber = true;

	for (var i = 0; i < divisors.length; i++) {
		if (smallestNumber % divisors[i] !== 0) {
			correctNumber = false;
			break;
		}
	}

	if (correctNumber) {
		break;
	}

	smallestNumber++;
}

console.log(smallestNumber);