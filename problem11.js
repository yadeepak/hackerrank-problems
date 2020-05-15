//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
	const len = c.length;
	let i = 0;
	let jump = 0;
	while (i < len - 1) {
		if (c[i + 1] === 1 && c[i + 2] !== 1) {
			i += 2;
		} else if (c[i + 2] === 1) {
			i += 1;
		} else {
			i += 2;
		}
		jump += 1;
	}

	return jump;
}
