//https://www.hackerrank.com/challenges/library-fine/
// Complete the libraryFine function below.
function libraryFine(d1, m1, y1, d2, m2, y2) {
	let hackos = 0;
	if (y1 > y2) {
		hackos = 10000;
		return hackos;
	}
	if (y1 === y2 && m1 > m2) {
		const late = m1 - m2;
		hackos = 500 * late;
		return hackos;
	}
	if (y1 === y2 && m1 === m2 && d1 > d2) {
		const late = d1 - d2;
		hackos = 15 * late;
		return hackos;
	}
	return hackos;
}
