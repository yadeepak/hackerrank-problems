//https://www.hackerrank.com/challenges/cut-the-sticks/problem

function cutTheSticks(arr) {
	const result = [];
	return calculate(arr, result);
}
function calculate(arr, result) {
	if (arr.length !== 0) {
		result.push(arr.length);
		const min = Math.min(...arr);
		const newArr = arr.reduce((acc, cur) => {
			const deduct = Number(cur) - Number(min);
			if (deduct != 0) {
				acc.push(deduct);
			}
			return acc;
		}, []);
		calculate(newArr, result);
	}
	return result;
}
