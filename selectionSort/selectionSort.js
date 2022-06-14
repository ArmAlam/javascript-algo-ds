const swap = (arr, i, j) => {
	let temp =  arr[i];
	arr[i] = arr[j];
	 arr[j] = temp;
};

const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i += 1) {
		let min = i;

		for (let j = i + 1; j < arr.length; j += 1) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}

		swap(arr, i, min)
	}

	return arr;
};

const result = selectionSort([3,5,1,1,2,1,9,8,78,54,52,11]);
console.log(result) // [1,  2,  3,  5,  8, 9, 11, 52, 54, 78]


// TIME COMPLEXITY: O(N^2) || Quadratic time complexity,
// as nested for loops