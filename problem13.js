https://www.hackerrank.com/challenges/find-digits/problem?

// Complete the findDigits function below.
function findDigits(n) {
	const arr = Array.from(String(n), Number);
	const count = arr.reduce((acc, cur) => {
		if (cur !== 0 && n % cur === 0) {
			acc++;
		}
		return acc;
	}, 0);
	return count;
}
