/*
    Contains Duplicate
    👨‍💼 How the interviewer asks it: "Given an integer array, determine if any value appears at least twice."
    🔑 Keywords: duplicate, appears twice, unique
    🎯 Main problem: Detect whether something appears more than once.
    🧱 Data Structure: Set
*/

const numbers = [1, 2, 3, 1];

function containsDuplicate(nums) {
	const seen = new Set();
	
	for (const num of nums) {
	    if (seen.has(num)) {
		    return true;
		}
		
	    seen.add(num);
	}
	
	return false;
}

console.log(containsDuplicate(numbers)); // Output: true