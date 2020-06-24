https://www.hackerrank.com/challenges/migratory-birds/problem

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
	let birdNumber = arr[0];
	let birdCount = 1;
	[1, 2, 3, 4, 5].map(bird => {
		const len = arr.filter(v => bird === v).length;
		if (len > birdCount) {
			birdNumber = bird;
			birdCount = len;
		}
	});
	return birdNumber;
}
