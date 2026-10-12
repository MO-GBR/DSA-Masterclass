/*
    Container With Most Water
    👨‍💼 How the interviewer asks it: "Given an array where each element represents the height of a vertical line, find two lines that together with the x-axis form a container that holds the most water."
    🔑 Keywords: maximum area, container, height, two lines
    🎯 Main problem: Find two positions that maximize: (width × smaller height)
    ⚙️ Algorithm: Greedy
    🧩 Pattern: Two Pointers
	⏱️Complexity
        - Time:  O(n)
        - Space: O(1)
*/

function maxArea(heights) {
	let left = 0;
	let right = heights.length - 1;

	let maxWater = 0;

	// Continue while the pointers haven't met
	while (left < right) {
		// Calculate the distance between the walls
	    const width = right - left;

		// The shorter wall determines the water height
		const height = Math.min(heights[left], heights[right]);

		// Calculate the water this container can hold
	    const area = width * height;
	    
		// Keep the maximum area found so far
	    maxWater = Math.max(maxWater, area);
		
		// Move the shorter wall inward
	    if (heights[left] < heights[right]) {
		    left++;
	    } else {
		    right--;
		}
	}
	
	return maxWater;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49