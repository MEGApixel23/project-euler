var maxNumber = 1000;
var result = 0;
var tempResult = 0;

for (var i = maxNumber; i >= 0; i--) {
	for (var j = maxNumber; j >= 0; j--) {
		tempResult = (i * j);

		if (isPalindrome(tempResult) && tempResult > result) {
			result = tempResult;
		}
	}
}

function isPalindrome(number) {
	number = '' + number;
	var length = number.length;

	for (var i = 0; i < Math.floor(length / 2); i++) {
		if (number.charAt(i) !== number.charAt(length - i - 1)) {
			return false;
		}
	}

	return true;
}

console.log(result);