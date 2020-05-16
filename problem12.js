https://www.hackerrank.com/challenges/kaprekar-numbers/problem

// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {
	let resultstr = [];
	for (let i = p; i <= q; i++) {
		const d = String(i).length;
		const sqr = Math.pow(i, 2);
		const sqrArr = String(sqr).split('');
		const divide = sqrArr.length / 2;
		const rPart = String(sqr).substr(divide, divide * 2);
		if (rPart.length === d) {
			const lPart = String(sqr).substr(0, divide);
			const add = Number(lPart) + Number(rPart);
			if (add === i) {
				resultstr.push(i);
			}
		}
	}
	const result = resultstr.length < 1 ? 'INVALID RANGE' : resultstr.join(' ');
	console.log(result);
}
