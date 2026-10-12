/*
    Contains Duplicate
    👨‍💼 How the interviewer asks it: "Given an integer array, determine if any value appears at least twice."
    🔑 Keywords: duplicate, appears twice, unique
    🎯 Main problem: Detect whether something appears more than once.
    🧱 Data Structure: Set
	⏱️Complexity
        - Time:  O(n)
        - Space: O(n)
*/

const numbers = [1, 2, 3, 1];

function containsDuplicate(nums) {
	// Set to hold values
	const seen = new Set();
	
	// Loop through the numbers
	for (const num of nums) {
		// If the set already contains the number return true
	    if (seen.has(num)) return true;
		
		// Add the number to the set
	    seen.add(num);
	}
	
	// It doesn't contain duplicates return false
	return false;
}

console.log(containsDuplicate(numbers)); // Output: true