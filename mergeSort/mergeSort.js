const merge = (leftArr, rightArr) => {
	const output = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
		const leftEl = leftArr[leftIndex];
		const righEl = rightArr[rightIndex];

		if (leftEl < righEl) {
			output.push(leftEl);
			leftIndex++;
		} else {
			output.push(righEl);
			rightIndex++;
		}
	}

	while (leftIndex < leftArr.length) {
		output.push(leftArr[leftIndex])
		leftIndex++;
	}

	while (rightIndex < rightArr.length) {
		output.push(rightArr[rightIndex])
		rightIndex++;
	}

	return output;

}

const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;

	const mid = Math.floor(arr.length / 2);
	let leftArr = mergeSort(arr.slice(0, mid));
	let rightArr = mergeSort(arr.slice(mid));

	return merge(leftArr, rightArr)
}

const arr = [3, 1, 8, 5, -2, -5, -6, 8, -1, -5];

console.log(mergeSort(arr)) // [-6, -5, -5, -2, -1, 1,  3,  5,  8,  8]

// time complexity O(nlogn)