/*
    Stack Data Structure — LIFO (Last In, First Out)
    - A stack is a linear data structure that follows the Last In, First Out (LIFO) principle.
    - This means that the last element added to the stack will be the first one to be removed.
    - Stacks are used in various applications such as function call management, expression evaluation, and undo mechanisms.
    - Example> Stack: [Bottom] 10 → 20 → 30 [Top]
    - Complexity:
        - Push (add an element): O(1)
        - Pop (remove an element): O(1)
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null; // Initialize the top of the stack to null
        this.length = 0; // Initialize the length of the stack to 0
    }

    // Method to add an element to the top of the stack
    push(data) {
        // Create a new node with the given data
        const newNode = new Node(data);

        // If the stack is empty, set the top to the new node
        if(!this.top) {
            this.top = newNode;
            this.length++;
            return this; // Return the stack for chaining
        }
        // If the stack is not empty, link the new node to the current top and update the top
        newNode.next = this.top; // Link the new node to the current top
        this.top = newNode; // Update the top to the new node
        this.length++; // Increment the length of the stack
        return this; // Return the stack for chaining
    }

    // Method to remove an element from the top of the stack
    pop() {
        // If the stack is empty, return null
        if (!this.top) return null;
        // If the stack has only one element, remove it and reset top
        if (this.length === 1) {
            const removedNode = this.top; // Store the node to be removed
            this.top = null; // Reset top to null
            this.length--; // Decrement the length of the stack
            return removedNode.data; // Return the data of the removed node
        }

        // If the stack has more than one element, remove the top node and update the top
        const removedNode = this.top; // Store the node to be removed
        this.top = this.top.next; // Update the top to the next node
        this.length--; // Decrement the length of the stack
        return removedNode.data; // Return the data of the removed node
    }
}