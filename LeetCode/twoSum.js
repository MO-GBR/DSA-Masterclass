/*
    Two Sum
    👨‍💼 How the interviewer asks it: "Given an array of integers and a target integer, return the indices of two numbers that add up to the target."
    🔑 Keywords: two numbers, target, sum, pair
    🎯 Main problem: Find two elements whose sum equals a target.
    🧱 Data Structure: Hash Map
	⏱️Complexity
        - Time:  O(n)
        - Space: O(n)
*/

function twoSum(nums, target) {
	const map = new Map();
	
	for (let i = 0; i < nums.length; i++) {
	    const complement = target - nums[i];
	    
	    if (map.has(complement)) return [map.get(complement), i];
	    
		map.set(nums[i], i);
	}
	
	return [];
}

console.log(twoSum([1, 2, 3, 4, 5], 7)); // Output: [ 2, 3 ]