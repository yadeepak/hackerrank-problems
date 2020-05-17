https://www.hackerrank.com/challenges/taum-and-bday/problem?

/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

function taumBday(b, w, bc, wc, z) {
	// Write your code here
	let result = 0;
	b = BigInt(b);
	w = BigInt(w);
	wc = BigInt(wc);
	bc = BigInt(bc);
	z = BigInt(z);

	if (bc > wc && wc + z < bc) {
		result = w * wc + b * wc + b * z;
	} else if (wc > bc && bc + z < wc) {
		result = w * bc + b * bc + w * z;
	} else {
		result = w * wc + b * bc;
	}
	return String(result);
}
