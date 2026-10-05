/*
    Container With Most Water
    👨‍💼 How the interviewer asks it: "Given an array where each element represents the height of a vertical line, find two lines that together with the x-axis form a container that holds the most water."
    🔑 Keywords: maximum area, container, height, two lines
    🎯 Main problem: Find two positions that maximize: (width × smaller height)
    ⚙️ Algorithm: Greedy
    🧩 Pattern: Two Pointers
*/

function maxArea(height) {
	let left = 0;
	let right = height.length - 1;
	let max = 0;
	
	while (left < right) {
	    const width = right - left;
	    const area = width * Math.min(height[left], height[right]);
	    
	    max = Math.max(max, area);
	    
	    if (height[left] < height[right]) {
		    left++;
	    } else {
		    right--;
		}
	}
	
	return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49