var result = 0;
var number = 100;
var sum = 0;
var square = 0;

for (var i = 1; i <= number; i++) {
	sum += Math.pow(i, 2);
}

for (var i = 1; i <= number; i++) {
	square += i;
}
square = Math.pow(square, 2);
result = square - sum;

console.log(result);