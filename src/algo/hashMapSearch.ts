(() => {
	// Given an array [0, 4, 5, 22, 90, 3, 21, 66]
	// Implement binary search
	function hashSearch(list: Array<number>, target: number) {
		if (!Array.isArray(list) || !Number.isInteger(target)) {
			throw new Error("Invalid Arguments");
		}
		const hashMap: { [key: string]: number } = {};
		for (let index = 0; index < list.length; index++) {
			const currentItem = list[index];
			hashMap[currentItem] = index;
		}
		return hashMap[target] ?? -1
	}
	const sortedArray = [0, 4, 5, 22, 90, 3, 21, 66].sort((a, b) => a - b);
	// console.log("Sorted Array", sortedArray);
	// console.log("Hash Map Search: ", hashSearch(sortedArray, 22));
})();
