const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	return arr;
}

const arr = [3, 1, 8, 5, -2, -5, -6, 8, -1, -5];

console.log(bubbleSort(arr)) // [-6, -5, -5, -2, -1, 1,  3,  5,  8,  8]

// time complexity  O(n^2)