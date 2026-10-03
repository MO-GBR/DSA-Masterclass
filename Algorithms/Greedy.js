/*
    - A greedy algorithm solves a problem by repeatedly making the best choice right now
    - without reconsidering previous choices.
    - The common Greedy questions
        - Activity Selection
        - Assign Cookies
        - Jump Game
*/

const activities = [
    { start: 1, end: 3 },
	{ start: 2, end: 4 },
	{ start: 3, end: 5 },
	{ start: 5, end: 7 },
	{ start: 6, end: 8 },
	{ start: 8, end: 9 }
];

const activitySelection = (activities) => {
    // Sort activities based on their finish time
    activities.sort((a, b) => a.end - b.end);

    // Initialize the selected activities with the first activity
    const selected = [activities[0]];
    let lastEnd = activities[0].end;

    // Iterate through the remaining activities and select those that start after the last selected activity ends
    for (let i = 1; i < activities.length; i++) {
        if (activities[i].start >= lastEnd) {
            selected.push(activities[i]);
            lastEnd = activities[i].end;
        }
    }

    return selected;
};

const children = [1, 2, 3];
const cookies = [1, 1, 2, 3];

const assignCookies = (children, cookies) => {
    // Sort the greed factors and cookie sizes in ascending order
	children.sort((a, b) => a - b);
	cookies.sort((a, b) => a - b);
	
	let child = 0; // Pointer for greed factors
	let cookie = 0; // Pointer for cookie sizes
	
    // Iterate through the greed factors and cookie sizes to assign cookies
	while (
	    child < children.length &&
	    cookie < cookies.length
	) {
        // If the current cookie can satisfy the current greed factor, move to the next greed factor
	    if (cookies[cookie] >= children[child]) {
		    child++;
	    }

	    // Move to the next cookie size
		cookie++;
	}

	// Return the number of satisfied children (greed factors)
	return child;
}

const jumps = [2, 3, 1, 1, 4];

const canJump = (jumps) => {
    let maxReach = 0; // Initialize the maximum reachable index
    for (let i = 0; i < jumps.length; i++) {
        if (i > maxReach) {
            return false; // Current index is not reachable
        }
        maxReach = Math.max(maxReach, i + jumps[i]); // Update the maximum reachable index
    }
    return true; // All indices are reachable
}

console.log('Can Jump', canJump(jumps));