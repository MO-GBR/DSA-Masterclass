/*
    Maximum Depth of Binary Tree
    👨‍💼 How the interviewer asks it: "Given the root of a binary tree, return its maximum depth."
    🔑 Keywords: binary tree, maximum depth, height
    🎯 Main problem: Find the longest path from root to a leaf.
    🧱 Data Structure: Binary Tree
    🧩 Pattern: DFS + Recursion
*/

const tree = {
    root: {
        value: 1,
        left: {
            value: 2, 
            left: { value: 4, left: null, right: null },
            right: null 
        },
        right: { value: 3, left: null, right: null }
    }
}

function maxDepth(root) {
	if (root === null) return 0;
	
	const leftDepth = maxDepth(root.left); // How deep is my left tree?
	const rightDepth = maxDepth(root.right); // How deep is my right tree?
	
	return 1 + Math.max(
	    leftDepth,
	    rightDepth
	);
}

console.log(maxDepth(tree.root)); // Output: 3