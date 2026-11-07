/*
    Binary Tree Operations
    - Search: O(log n) average, O(n) worst
    - Insert: O(log n) average, O(n) worst
    - Delete: O(log n) average, O(n) worst
    - Traversal: O(n)
    - Depth: O(n)
    - Height: O(n)
*/


class TreeNode {
	constructor(value) {
	    this.value = value;
	    this.left = null;
	    this.right = null;
	}
};

// Search
function search(root, target) {
    // If the tree is empty, return false
    if(root === null) return false;

    let current = root;

    // Traverse the tree until we find the target or reach a leaf node
    while(current !== null) {
        // If we find the target, return true
        if(current.value === target) return true;

        // If the target is less than the current node's value, go left; otherwise, go right
        if(target < current.value) {
            current = current.left;
        } else {
            current = current.right;
        };
    };

    return false;
};

// Insert
function insert(root, value) {
    // If the tree is empty, create a new node and return it
    if(root === null) return new TreeNode(value);

    // If the value is less than the current node's value, insert it in the left subtree; otherwise, insert it in the right subtree
    if(value < root.value) {
        root.left = insert(root.left, value);
    } else if(value > root.value) {
        root.right = insert(root.right, value);
    };

    return root;
};

// Find the minimum and maximum values in the tree
function findMin(root) {
    let current = root;
    while(current.left !== null) {
        current = current.left;
    };
    return current;
};

function findMax(root) {
    let current = root;
    while(current.right !== null) {
        current = current.right;
    };
    return current;
};

function deleteNode(root, value) {
    // If the tree is empty, return null
    if(root === null) return null;

    // If the value is less than the current node's value, delete it from the left subtree; if it's greater, delete it from the right subtree
    if(value < root.value) {
        root.left = deleteNode(root.left, value);
    } else if(value > root.value) {
        root.right = deleteNode(root.right, value);
    } else {
        // Node to be deleted found: With three cases to consider:
        // 1. Node with no children (leaf node)
        if(root.left === null && root.right === null) return null;

        // 2. Node with one child: only left child or only right child
        if(root.left === null) return root.right;

        if(root.right === null) return root.left;

        // 3. Node with two children: Get the in-order successor (smallest in the right subtree)
        const successor = findMin(root.right);

        // Replace the value of the node to be deleted with the value of the successor
        root.value = successor.value;
        // Delete the in-order successor
        root.right = deleteNode(root.right, successor.value);
    };

    return root;
};

// Traversal: Pre-order, In-order, Post-order, Level-order
function preOrder(root, data = []) {
    if(root === null) return data;

    data.push(root.value);

    if(root.left) preOrder(root.left, data);
    if(root.right) preOrder(root.right, data);

    return data;
};

function inOrder(root, data = []) {
    if(root === null) return data;

    if(root.left) inOrder(root.left, data);

    data.push(root.value);
    
    if(root.right) inOrder(root.right, data);

    return data;
};

function postOrder(root, data = []) {
    if(root === null) return data;

    if(root.left) postOrder(root.left, data);
    if(root.right) postOrder(root.right, data);

    data.push(root.value);

    return data;
};

function levelOrder(root, data = []) {
    if(root === null) return data;

    const queue = [root];
    let front = 0;

    while(queue.length > front) {
        const current = queue[front];
        front++;
        data.push(current.value);
        if(current.left) {
            queue.push(current.left)
        };
        if(current.right) {
            queue.push(current.right);
        };
    };

    return data;
};

// Depth and Height
function getDepth(root, target, depth = 0) {
    if(root === null) return -1;
    if(root.value === target) return depth;

    const leftDepth = getDepth(root.left, target, depth + 1);
    const rightDepth = getDepth(root.right, target, depth + 1);

    if(leftDepth !== -1) {
        return leftDepth;
    } else {
        return rightDepth;
    };
};

function getHeight(node) {
    if(node === null) return -1;

    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    return 1 + Math.max(
        leftHeight,
        rightHeight
    );
};

// Validate
const isValidBST = (root) => {
    const min = -Infinity;
    const max = Infinity;

    if (root === null) return true;

    if (root.value <= min || root.value >= max) return false;

    return (
        isValidBST(root.left, min, root.value) &&
        isValidBST(root.right, root.value, max)
    );
};

// Lowest Common Ancestor
function lowestCommonAncestor(root, p, q) {
    // If the tree is empty, return null
    if (root === null) return null;

    // If both p and q are smaller than root, then LCA lies in left subtree
    if (p.value < root.value && q.value < root.value) {
        return lowestCommonAncestor(root.left, p, q);
    }

    // If both p and q are greater than root, then LCA lies in right subtree
    if (p.value > root.value && q.value > root.value) {
        return lowestCommonAncestor(root.right, p, q);
    }

    return root;
};

// Sum of all nodes
function sumOfNodes(root) {
    if (root === null) return 0;
    return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
};

// Example usage

let root = null;

root = insert(root, 50);
root = insert(root, 30);
root = insert(root, 70);
root = insert(root, 20);
root = insert(root, 40);
root = insert(root, 60);
root = insert(root, 80);

/*
    Now we have built the following tree:
    ______________________
    |                    |
    |         50         |
    |       /    \       |
    |     30      70     |
    |    /  \    /  \    |
    |  20   40  60   80  |
    |____________________|
*/

console.log(search(root, 60)); // true
console.log(search(root, 90)); // false

console.log(findMax(root), findMin(root)); // 80, 20

// deleteNode(root, 70); // Delete node with value 70

console.log(preOrder(root)); // [50, 30, 20, 40, 70, 60, 80]
console.log(inOrder(root)); // [20, 30, 40, 50, 60, 70, 80]
console.log(postOrder(root)); // [20, 40, 30, 60, 80, 70, 50]
console.log(levelOrder(root)); // [50, 30, 70, 20, 40, 60, 80]

console.log(getDepth(root, 60)); // 2
console.log(getHeight(root)); // 2

console.log(isValidBST(root)); // true

const p = new TreeNode(20);
const q = new TreeNode(40);
console.log(lowestCommonAncestor(root, p, q)); // TreeNode(30)

console.log(sumOfNodes(root)); // 350