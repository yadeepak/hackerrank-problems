https://www.hackerrank.com/challenges/flatland-space-stations

// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, m, c) {
	const resultArray = [];
	for (let i = 0; i < n; i++) {
		const checkOverStations = [];
		for (let j = 0; j < c.length; j++) {
			checkOverStations.push(Math.abs(c[j] - i));
		}
		const minDistance = Math.min.apply(null, checkOverStations);
		resultArray.push(Number(minDistance));
	}
	const maxDistance = Math.max.apply(null, resultArray);
	return maxDistance;
}
