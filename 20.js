const factorial = (number) => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = multiply(result, i);
    }

    return result;
};
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
const multiply = (y, x) => {
    const chunks = [];

    x = x.toString();
    y = y.toString();
    
    for (let i = x.length - 1; i >= 0; i--) {
        let tempResult = '';
        let leftover = 0;
        
        for (let j = y.length - 1; j >= 0; j--) {
            let temp = parseInt(x[i]) * parseInt(y[j]) + leftover;
            
            if (temp >= 10) {
                leftover = Math.floor(temp / 10);
            } else {
                leftover = 0;
            }

            if (j !== 0) {
                temp = temp % 10;
            }

            tempResult = temp + tempResult;
        }

        for (let cur = 0; cur < x.length - i - 1; cur++) {
            tempResult += '0';
        }

        chunks.push(tempResult);
    }

    return chunks.reduce((carry, i) => add(carry, i));
};
const sumDigits = (number) => (
    number.toString()
        .split('')
        .reduce(
            (prev, i) => (parseInt(i) + prev),
            0
        )
);
const run = (number) => ( sumDigits(factorial(number)) );

console.log(run(100));