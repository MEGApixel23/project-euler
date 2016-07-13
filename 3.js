var number = 600851475143;

var isPrimal;
var modulus;
var currentDivisor = 2;
var primals = [];

while (true) {
	isPrimal = true;

	if (currentDivisor > number)
		break;

	modulus = number % currentDivisor;

	if (modulus) {
		currentDivisor++;
		continue;
	}

	number = number / currentDivisor;

	for (var index = 0; index < primals.length; index++) {
		if (currentDivisor % primals[index] === 0) {
			isPrimal = false;
			break;
		}
	}

	if (isPrimal)
		primals.push(currentDivisor);

	currentDivisor++;
}

console.log(primals.pop());