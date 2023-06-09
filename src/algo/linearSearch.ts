(() => {
	// Given an array [0, 4, 5, 22, 90, 3, 21, 66]
	// Implement linear search
	function linearSearch(list: Array<number>, target: number) {
		if (!Array.isArray(list) || !Number.isInteger(target)) {
			throw new Error("Invalid Arguments");
		}
		let index = 0;
		while (index < list.length - 1) {
			if (list[index] === target) return index;
			index += 1;
		}
		return -1;
	}

	const sortedArray = [0, 4, 5, 22, 90, 3, 21, 66].sort((a, b) => a - b);
	// console.log("Sorted Array", sortedArray);
	// console.log("Linear Search: ", linearSearch(sortedArray, 22));
})();
