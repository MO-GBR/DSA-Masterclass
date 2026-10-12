/*
    Subsets
    👨‍💼 How the interviewer asks it: "Given an integer array of unique elements, return all possible subsets."
    🔑 Keywords: all subsets, all combinations, every possibility
    🎯 Main problem: Generate every possible combination of choices.
    🧱 Data Structure: Array
    🧩 Pattern: Backtracking + Recursion
	⏱️ Complexity
		- Time: O(n × 2^n)
		- Space: O(n)
*/

function subsets(nums) {
	const result = [];
	
	function backtrack(index, current) {
		// Base case: Every decision has been made we keep going (index + 1) until we hit our limit
	    if (index === nums.length) {
		    result.push([...current]);
		    return;
	    }
	    
	    // Include: Make a choice
	    current.push(nums[index]);

	    // Explore
	    backtrack(index + 1, current);
	    
		// Undo
	    current.pop();
	    
	    // Exclude
	    backtrack(index + 1, current);
	};

	// Start from index 0
	backtrack(0, []);
	
	return result;
};

console.log(subsets([1, 2, 3]));