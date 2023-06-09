(() => {
	// Given an array [0, 4, 5, 22, 90, 3, 21, 66]
	// Implement binary search
	function binarySearch(list: Array<number>, target: number) {
		if (!Array.isArray(list) || !Number.isInteger(target)) {
			throw new Error("Invalid Arguments");
		}
		let left = 0;
		let right = list.length - 1;
		while (left <= right) {
			const middle = Math.floor((left + right) / 2);
			if (target === list[middle]) return middle;

			if (target < list[middle]) {
				right = middle - 1;
			} else {
				left = middle + 1;
			}
		}
		return -1;
	}
	const sortedArray = [0, 4, 5, 22, 90, 3, 21, 66].sort((a, b) => a - b);
	// console.log("Sorted Array", sortedArray);
	// console.log("Linear Search: ", binarySearch(sortedArray, 22));

})();
