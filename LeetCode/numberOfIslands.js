/*
    Number of Islands
    👨‍💼 How the interviewer asks it: "Given a 2D grid containing land (1) and water (0), count the number of islands."
    🔑 Keywords: grid, island, connect, neighbors
    🎯 Main problem: Count connected groups of cells.
    ⚙️ Algorithm: Traversal DFS
    🧱 Data Structure: Grid / Graph
    🧩 Pattern: DFS/BFS + recursion + Nested loops
	⏱️Complexity of time & space: O(R * C)
        - R: number of rows
        - C: number of columns
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
	["1", "1", "0", "1", "0"],
  	["1", "1", "0", "1", "0"],
  	["1", "1", "0", "0", "0"],
  	["0", "0", "0", "1", "1"]
];

function numIslands(grid) {
	// Handle an empty grid
    if (!grid.length || !grid[0].length) {
        return 0;
    }
    
    let rows = grid.length;
    let cols = grid[0].length;
    let islands = 0;

    function dfs(row, col) {
		// Each row & column has to be bigger than 0 and bigger than rows & columns
		// Stop if this cell is water
        if(
            row < 0 ||
            col < 0 ||
            row >= rows ||
            col >= cols ||
            grid[row][col] === "0"
        ) return;

		// Mark this land as visited
        grid[row][col] = "0"

		// Explore the four neighboring cells
        dfs(row - 1, col); // UP
        dfs(row + 1, col); // DOWN
        dfs(row, col - 1); // LEFT
        dfs(row, col + 1); // RIGHT
    };

	// Scan every cell in the grid
    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
			// Found a new island!
            if(grid[row][col] === "1") {
                islands++;
				// Visit the entire island
                dfs(row, col);
            }
        }
    };

    return islands;
}

console.log(numIslands(grid)); // Output: 1