var current;
var beforePrev = 1;
var prev = 2;
var sum = prev;

while (true) {
	current = beforePrev + prev;

	if (current >= 4000000)
		break;

	if (current % 2 === 0) {
		sum += current;
	}

	beforePrev = prev;
	prev = current;
}

console.log(sum);