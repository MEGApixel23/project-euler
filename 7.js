var isPrimal;
var primals = [];
var maxNumber = 10001;

for (var i = 2; true; i++) {
	isPrimal = true;

	for (var j = 0; j < primals.length; j++) {
		if (i % primals[j] === 0) {
			isPrimal = false;
			break;
		}
	}

	if (isPrimal)
		primals.push(i);

	if (primals.length === maxNumber)
		break;
}

console.log(primals.pop());