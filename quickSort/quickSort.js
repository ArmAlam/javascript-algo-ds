const quickSort = (arr, left = 0, right = arr.length - 1) => {
	if (left < right) {
		const pivot = partition(arr, left, right)
		quickSort(arr, left, pivot - 1)
		quickSort(arr, pivot + 1, right)
	}
	return arr
}

const partition = (arr, left, right) => {
	const pivot = arr[right]
	let i = left
	for (let j = left; j < right; j++) {
		if (arr[j] < pivot) {
			swap(arr, i, j)
			i++
		}
	}
	swap(arr, i, right)
	return i
}

const swap = (arr, i, j) => {
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

const arr = [3, 1, 8, 5, -2, -5, -6, 8, -1, -5];
quickSort(arr)
console.log(arr) // [-6, -5, -5, -2, -1, 1,  3,  5,  8,  8]


// Worst Case: O(n^2)
// Avg Case : O(nlogn)
