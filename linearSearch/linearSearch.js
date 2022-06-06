const searchItem = (arr, item) => {
	for (let i = 0; i < arr.length; i += 1) {

		if (arr[i] === item) {
			return i;
		}
	}
	return -1;
}

const result = searchItem([1,4,5,6], 4);
console.log(result);

// TIME COMPLEXITY: O(N) || Linear time complexity,
// as it  needs to iterate over every item in the array