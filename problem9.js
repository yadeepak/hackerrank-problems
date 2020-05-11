//https://www.hackerrank.com/challenges/fair-rations

// Complete the fairRations function below.

function fairRations(B) {
	const len = B.length;
	let distributionCount = 0;
	let isOddNumberExist = false;
	for (let i = 0; i < len; i++) {
		if (B[i] % 2 !== 0 && i !== len - 1) {
			B[i] += 1;
			B[i + 1] += 1;
			distributionCount += 2;
		}
		isOddNumberExist = B[i] % 2 === 1 ? true : false;
	}
	return isOddNumberExist ? 'NO' : distributionCount;
}
