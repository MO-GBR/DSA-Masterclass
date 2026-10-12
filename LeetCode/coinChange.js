/*
    Coin Change
    👨‍💼 How the interviewer asks it: "Given coin denominations and a target amount, return the minimum number of coins needed to make that amount."
    🔑 Keywords: minimum, amount, coins, ways
    🎯 Main problem: Find the optimal result by combining smaller previously solved amounts.
    🧱 Data Structure: Array
    🧩 Pattern: Dynamic Programming
	⏱️ Complexity
		- Time:  O(amount × coins)
		- Space: O(amount)

*/

function coinChange(coins, amount) {
    // dp[i] = minimum coins needed to make amount i
	const dp = new Array(amount + 1).fill(Infinity);

	// Base case: 0 coins are needed to make amount 0
	dp[0] = 0;

	// Calculate the answer for every amount from 1 to amount.
	for (let current = 1; current <= amount; current++) {
		// Try every available coin.
	    for (const coin of coins) {
			// Only use the coin if the remaining amount is non-negative.
		    if (current - coin >= 0) {
		        dp[current] = Math.min(
			        dp[current],
			        dp[current - coin] + 1
		        );
		    }
	    }
	}
	
	// If the target remains unreachable, return -1.
	return dp[amount] === Infinity
	    ? -1
	    : dp[amount];
};

console.log(coinChange([1, 2, 5], 11)) // Output: 3