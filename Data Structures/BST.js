/*
    Tree Data Structure — A Tree is a hierarchical, non-linear data structure made of nodes connected by edges.
    Example:
         ______________________
        |                      |
        |           50         |
        |        /    \        |
        |       30      70     |
        |      /  \    /  \    |
        |    20   40  60   80  |
        |______________________|
    
    - Important terminology:
        - Root → 50, the first/top node
        - Parent → A node that has children
        - Child → A node connected below a parent
        - Leaf → Node with no children (20, 40, 60, 80)
        - Edge → Connection between two nodes
        - Height → Longest path from a node to a leaf
        - Depth → How far a node is from the root
        - Subtree → A smaller tree inside the main tree
    - Complexity:
        - Insert / Search / Remove: O(log n)
        - Traversal: O(n)
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null; // Left child contains values smaller than this node.
        this.right = null; // Right child contains values greater than this node.
    }
}

class BST {
    constructor() {
        this.root = null; // The root is the first/top node in the tree.
    }

    // Method to add a new node to the tree
    insert(value) {
        // Create a new node with the given value
        const newNode = new Node(value);

        // If the tree is empty, the new node becomes the root.
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
	    while(true) {
            // Smaller values go to the left.
	    	if(value < current.value) {
                // If there is no left child, insert here.
	    		if(current.left === null) {
	    			current.left = newNode;
	    			return this;
	    		};

                // Otherwise, continue searching down the left subtree.
	    		current = current.left;
	    	} else {
                // Greater values go to the right.
	    		if(current.right === null) {
	    			current.right = newNode;
	    			return this;
	    		};

                // Otherwise, continue searching down the right subtree.
	    		current = current.right;
	    	}
	    }
    }

    // Method to search in the tree
    search(value) {
        let current = this.root;

        while (current !== null) {

            // Value found.
            if (value === current.value) return true;

            // Smaller value → search left.
            if (value < current.value) {
                current = current.left;
            }

            // Greater value → search right.
            else {
                current = current.right;
            }
        }
        // Reached a null node → value doesn't exist.
        return false;
    }

    remove(value) {
        this.root = this.#_removeNode(this.root, value);
        return this;
    }

    #_removeNode(node, value) {

        // Value wasn't found.
        if (node === null) return null;

        // Search the left subtree.
        if (value < node.value) {
            node.left = this.#_removeNode(node.left, value);
            return node;
        }

        // Search the right subtree.
        if (value > node.value) {
            node.right = this.#_removeNode(node.right, value);
            return node;
        }


        // CASE 1: Node has no children (leaf).
        if (node.left === null && node.right === null) return null;


        // CASE 2: Node has only a right child.
        if (node.left === null) return node.right;


        // CASE 3: Node has only a left child.
        if (node.right === null) return node.left;


        // CASE 4: Node has two children.
        // Find the smallest value in the right subtree.
        // This is called the "in-order successor".
        const successor = this.min(node.right);

        // Replace the current node's value.
        node.value = successor.value;

        // Remove the duplicate successor node.
        node.right = this.#_removeNode(node.right, successor.value);

        return node;
    }

    min(node = this.root) {
        if (node === null) return null;
    
        let current = node; // Starting point
    
        // If (left < node) keep going left until you found the smallest node
        while (current.left !== null) current = current.left;
    
        return current;
    }

    max(node = this.root) {
        if (node === null) return null;

        let current = node; // Starting point

        // If (right > node) keep going right until you found the biggest node
        while (current.right !== null) current = current.right;

        return current;
    }

    // 1. PRE-ORDER: Root -> Left -> Right
    preOrder(node = this.root, data = []) {
	    // Base case: there is no node to process.
        if(node === null) return data;

        // Visit the current node FIRST before it's children.
        data.push(node.value);
    
        // Then explore the left subtree.
        if(node.left) this.preOrder(node.left, data);

        // Finally explore the right subtree.
        if(node.right) this.preOrder(node.right, data);
    
        return data;
    }

    inOrder(node = this.root, data = []) {
        // Base case: there is no node to process.
        if(node === null) return data;
    
        // Explore the left subtree.
        if(node.left) this.inOrder(node.left, data);
    
        // Visit the current node BETWEEN it's children.
        data.push(node.value);
    
        // Finally explore the right subtree.
        if(node.right) this.inOrder(node.right, data);
    
        return data;
    }

    postOrder(node = this.root, data = []) {
        // Base case: there is no node to process.
        if(node === null) return data;
    
        // Explore the left subtree.
        if(node.left) this.postOrder(node.left, data);

        // Explore the right subtree.
        if(node.right) this.postOrder(node.right, data);
    
        // Visit the current node LAST after it's children.
        data.push(node.value);
        return data;
    }

    levelOrder() {
        if (this.root === null) return [];
    
        // A queue processes nodes in FIFO order.
        const queue = [this.root];
        const data = [];

        // Process nodes while unvisited queue entries remain.
        // Instead of this loop you can use
        /*
            let front = 0;
            while (front < queue.length) {
                const current = queue[front];
                front++; // Dequeue without using Array.shift()

                data.push(current.value);

                ...
            }

        */
        while (queue.length > 0) {
            const current = queue.shift();
        
            data.push(current.value);
        
            // Enqueue left child before right child.
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        };
    
        return data;
    }
};