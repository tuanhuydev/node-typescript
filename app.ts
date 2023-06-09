// Write a function that takes in an array of integers and a target sum. The function should find all triplets in the array that add up to the target sum and return a two-dimensional array of all these triplets.
// Each triplet should be a subarray of length 3, and the elements within the subarray should be in ascending order. The triplets themselves should be ordered in ascending order based on the first element of each triplet.
// If no three numbers sum up to the target sum, the function should return an empty array.
// Example: Input: array = [12, 3, 1, 2, -6, 5, -8, 6], targetSum = 0 Output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
// Input: array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], targetSum = 18 Output: [[3, 6, 9], [4, 5, 9], [4, 6, 8], [5, 6, 7], ..]
//
type A = { prop1: number };
type B = { prop2: string };

type C = A & B;

const myVar: C = { prop1: 2, prop2: "hello world" }
function test1(param: C) {
	console.log(param.prop1);
}
test1(myVar);
