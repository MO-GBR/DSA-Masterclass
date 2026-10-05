/*
    Best Time to Buy and Sell Stock
    👨‍💼 How the interviewer asks it: "Given an array where `prices[i]` represents the price of a stock on day `i`, find the maximum profit you can achieve by buying on one day and selling on a later day."
    🔑 Keywords: maximum profit, buy, sell, later day
    🎯 Main problem: Find the biggest difference between a later value and an earlier minimum value.
    🧩 Pattern: One Pass + Track Minimum
*/

const stocks = [7, 1, 5, 3, 6, 4]

function maxProfit(prices) {
	let minPrice = Infinity;
	let maxProfit = 0;
	
	for (const price of prices) {
	    minPrice = Math.min(minPrice, price);
	    
	    const profit = price - minPrice;
	    
	    maxProfit = Math.max(maxProfit, profit);
	}
	
	return maxProfit;
}

console.log(maxProfit(stocks)); // Output: 5