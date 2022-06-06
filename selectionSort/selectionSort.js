const swap = (arr, i, j) => {
	let temp =  arr[i];
	arr[i] = arr[j];
	 arr[j] = temp;
};

const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i += 1) {
		let swapIdx = i;

		for (let j = i + 1; j < arr.length; j ++) {
			if (arr[j] < arr[swapIdx]) {
				swapIdx = j;
			}
		}

		swap(arr, i, swapIdx)
	}

	return arr;
};

const result = selectionSort([3,5,2,1,9,8,78,54,52,11]);
console.log(result)

// TIME COMPLEXITY: O(N^2) || Quadratic time complexity,
// as nested for loops