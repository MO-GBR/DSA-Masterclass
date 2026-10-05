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
    
        let current = node;
    
        while (current.left !== null) current = current.left;
    
        return current;
    }

    max(node = this.root) {
        if (node === null) return null;

        let current = node;

        while (current.right !== null) current = current.right;

        return current;
    }

    preorder(node = this.root, data = []) {
	    // Recursion base case
        if(node === null) return data;
        // ! Storing starts from the root
        data.push(node.value);
    
        // Recursion
        if(node.left) this.preorder(node.left, data);
        if(node.right) this.preorder(node.right, data);
    
        return data;
    }

    inorder(node = this.root, data = []) {
        // Recursion base case
        if(node === null) return data;
    
        // Recursion
        if(node.left) this.inorder(node.left, data);
    
        // ! Storing starts from the leaf node
        data.push(node.value);
    
        // Recursion
        if(node.right) this.inorder(node.right, data);
    
        return data;
    }

    postorder(node = this.root, data = []) {
        // Recursion base case
        if(node === null) return data;
    
        // Recursion
        if(node.left) this.postorder(node.left, data);
        if(node.right) this.postorder(node.right, data);
    
        // ! Storing starts from the leaf node
        data.push(node.value);
        return data;
    }

    levelorder() {
        if (this.root === null) return [];
    
        const queue = [this.root];
        const data = [];
    
        while (queue.length > 0) {
            const current = queue.shift();
        
            data.push(current.value);
        
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        };
    
        return data;
    }
};