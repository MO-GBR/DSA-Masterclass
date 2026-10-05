/*
    Subsets
    👨‍💼 How the interviewer asks it: "Given an integer array of unique elements, return all possible subsets."
    🔑 Keywords: all subsets, all combinations, every possibility
    🎯 Main problem: Generate every possible combination of choices.
    🧱 Data Structure: Array
    🧩 Pattern: Backtracking + Recursion
*/

function subsets(nums) {
	const result = [];
	
	function backtrack(index, current) {
	    if (index === nums.length) {
		    result.push([...current]);
		    return;
	    }
	    
	    // Include
	    current.push(nums[index]);
	    
	    backtrack(index + 1, current);
	    
	    current.pop();
	    
	    // Exclude
	    backtrack(index + 1, current);
	}
	backtrack(0, []);
	
	return result;
};

console.log(subsets([1, 2, 3]));