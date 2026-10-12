/*
    Climbing Stairs
    👨‍💼 How the interviewer asks it: "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can climb either 1 or 2 steps. How many distinct ways can you reach the top?"
    🔑 Keywords: number of ways, 1 or 2 step`, ways
    🎯 Main problem: Count the number of ways to reach a state using previous states.
    🧩 Pattern: Dynamic Programming
    ⏱️Complexity
        - Time:  O(n)
        - Space: O(1)
*/

// Array solution

function climbStairs_Array(n) {
    // Handle the smallest staircases.
    if (n <= 2) return n;

    // dp[i] = number of ways to reach step i.
    const dp = new Array(n + 1);

    // Base cases.
    dp[1] = 1;
    dp[2] = 2;

    // Calculate the answer for each step.
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // Return the number of ways to reach step n.
    return dp[n];
};



// Optimized solution (no array)
// Here's a common interview follow-up: Can you solve it using constant extra space?
// Yes! Notice that to calculate the next answer, we only need the previous two answers. We don't need the entire array.
function climbStairs(n) {
    if (n <= 2) return n;

    let prev2 = 1; // Ways to reach step 1.
    let prev1 = 2; // Ways to reach step 2.

    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;

        // Move forward to the next pair of steps.
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};

console.log(climbStairs(3)); // Output 3
console.log(climbStairs_Array(3)); // Output 3

/*
    n = 3
    ---------
    1 + 1 + 1
    1 + 2
    2 + 1
*/