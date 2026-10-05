/*
    Number of Islands
    👨‍💼 How the interviewer asks it: "Given a 2D grid containing land (1) and water (0), count the number of islands."
    🔑 Keywords: grid, island, connecte`, neighbors
    🎯 Main problem: Count connected groups of cells.
    ⚙️ Algorithm: Traversal DFS
    🧱 Data Structure: Grid / Graph
    🧩 Pattern: DFS/BFS + recursion + Nested loops
*/

/*
----- Example -----
    1 1 0 0
    1 0 0 1
    0 0 1 1

    1 = Land 🌳
    0 = Water 🌊
*/

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];

function numIslands(grid) {
	let count = 0;
	
	function dfs(row, col) {
	    if (
		    row < 0 ||
		    col < 0 ||
		    row >= grid.length ||
		    col >= grid[0].length ||
		    grid[row][col] === "0"
	    ) return;

		grid[row][col] = "0";
		
		dfs(row + 1, col);
		dfs(row - 1, col);
		dfs(row, col + 1);
		dfs(row, col - 1);
	};
	
	for (let row = 0; row < grid.length; row++) {
	    for (let col = 0; col < grid[0].length; col++) {
		    if (grid[row][col] === "1") {
		        count++;
		        dfs(row, col);
		    }
	    }
	}
	
	return count;
};

console.log(numIslands(grid)); // Output: 1