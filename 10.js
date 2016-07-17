var isPrimal;
var primals = [];
var result = 0;
var max = 2000000;

for (var i = 2; i < max; i++) {
	isPrimal = true;

	for (var j = 0; j < primals.length; j++) {
		if (i % primals[j] === 0) {
			isPrimal = false;
			break;
		}
	}

	if (isPrimal) {
		result += i;
		primals.push(i);
	}
}

console.log(result);