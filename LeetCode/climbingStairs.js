/*
    Climbing Stairs
    👨‍💼 How the interviewer asks it: "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can climb either 1 or 2 steps. How many distinct ways can you reach the top?"
    🔑 Keywords: number of ways, 1 or 2 step`, ways
    🎯 Main problem: Count the number of ways to reach a state using previous states.
    🧩 Pattern: Dynamic Programming
*/

function climbStairs(n) {
	if (n <= 2) return n;
	
	let prev2 = 1;
	let prev1 = 2;
	
	for (let i = 3; i <= n; i++) {
	    const current = prev1 + prev2;
	    
	    prev2 = prev1;
	    prev1 = current;
	}
	
	return prev1;
}

console.log(climbStairs(3)); // Output 3

/*
    n = 3
    ---------
    1 + 1 + 1
    1 + 2
    2 + 1
*/