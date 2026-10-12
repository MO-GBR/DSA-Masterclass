/*
    Best Time to Buy and Sell Stock
    👨‍💼 How the interviewer asks it: "Given an array where `prices[i]` represents the price of a stock on day `i`, find the maximum profit you can achieve by buying on one day and selling on a later day."
    🔑 Keywords: maximum profit, buy, sell, later day
    🎯 Main problem: Find the biggest difference between a later value and an earlier minimum value.
    🧩 Pattern: One Pass + Track Minimum
	⏱️Complexity
        - Time:  O(n)
        - Space: O(1)
*/

const stocks = [7, 1, 5, 3, 6, 4];


function maxProfit(prices) {
	// Cheapest price encountered so far
	let minPrice = Infinity;

	// Best profit found so far
	let maxProfit = 0;

	// Visit each day's stock price
	for (let i = 0; i < prices.length; i++) {
    	const currentPrice = prices[i];

    	// If today's price is cheaper, update the minimum
    	if (currentPrice < minPrice) {
    		minPrice = currentPrice;
    	}

    	// Calculate the profit if we sell today
    	const profit = currentPrice - minPrice;

    	// Keep the best profit found so far
    	if (profit > maxProfit) {
    		maxProfit = profit;
    	}
  	}

	return maxProfit;
};

console.log(maxProfit(stocks)); // Output: 5