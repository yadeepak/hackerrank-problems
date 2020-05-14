//https://www.hackerrank.com/challenges/repeated-string/problem

// Complete the repeatedString function below.
function repeatedString(s, n) {
	const len = s.length;
	const countOfA = countFunc(s);
	const individualValue = 1 / len;
	const repeatString = n / len;
	const countofExtra =
		(repeatString - Math.floor(repeatString)) / individualValue;
	const str = s.split('').slice(0, Math.round(countofExtra)).join('');
	const extraCountOfA = countFunc(str);
	const result = Math.floor(repeatString) * countOfA;
	return result + extraCountOfA;
}
function countFunc(str) {
	return str.split('').reduce((acc, cur) => {
		if (cur === 'a') acc++;
		return acc;
	}, 0);
}
