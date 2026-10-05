/* 
    Singly Linked List - A linear data structure where each element (node) contains a reference to the next node in the sequence.
    - Each node has two components: data and a pointer to the next node.
    - The last node points to null, indicating the end of the list.
    - No indexing, so accessing elements requires traversal from the head node.
    - Example: [10] → [20] → [30] → null
*/

class Node {
    constructor(data) {
        this.data = data; // Store the data in the node
        this.next = null; // Initialize the next pointer to null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; // Initialize the head of the list to null
        this.tail = null; // Initialize the tail of the list to null
        this.length = 0; // Initialize the length of the list to 0
    }

    // Method to add a new node at the end of the list
    append(data) {
        const newNode = new Node(data); // Create a new node with the given data
        // If the list is empty, set both head and tail to the new node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this; // Return the list for chaining
        }

        // If the list is not empty, add the new node at the end and update the tail
        this.tail.next = newNode; // Link the current tail to the new node
        this.tail = newNode; // Update the tail to the new node
        this.length++; // Increment the length of the list
        return this; // Return the list for chaining
    }

    // Method to remove a node from the end of the list
    remove() {
        // If the list is empty, return null
        if (!this.head) return null;
        
        // If the list has only one node, remove it and reset head and tail
        if (this.length === 1) {
            const removedNode = this.head; // Store the node to be removed
            this.head = null; // Reset head to null
            this.tail = null; // Reset tail to null
            this.length--; // Decrement the length of the list
            return removedNode; // Return the removed node
        }

        // If the list has more than one node, traverse to the second last node

        let current = this.head; // Start from the head
        let newTail = current; // Initialize newTail to the head

        while (current.next) { // Traverse until the last node
            newTail = current; // Update newTail to the current node
            current = current.next; // Move to the next node
        }

        newTail.next = null; // Update the new tail's next pointer to null
        this.tail = newTail; // Update the tail to the new tail

        this.length--; // Decrement the length of the list
        return current; // Return the removed node
    }

    // Method to add a new node at the beginning of the list
    prepend(data) {
        const newNode = new Node(data); // Create a new node with the given data
        // If the list is empty, set both head and tail to the new node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        // If the list is not empty, add the new node at the beginning and update the head
        newNode.next = this.head; // Link the new node to the current head
        this.head = newNode; // Update the head to the new node
        
        this.length++; // Increment the length of the list
        return this; // Return the list for chaining
    }

    // Method to remove a node from the beginning of the list
    removeFirst() {
        // If the list is empty, return null
        if (!this.head) return null;

        const removedNode = this.head; // Store the node to be removed
        this.head = this.head.next; // Update the head to the next node
        this.length--; // Decrement the length of the list
        return removedNode; // Return the removed node
    }

    // Method to get the value at a specific index
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }

        let current = this.head; // Start from the head
        for (let i = 0; i < index; i++) { // Traverse to the desired index
            current = current.next; // Move to the next node
        }

        return current.data; // Return the data at the desired index
    }

    // Method to insert a value at a specific index
    insert(index, data) {
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }

        const newNode = new Node(data); // Create a new node with the given data
        if (index === 0) {
            newNode.next = this.head; // Link the new node to the current head
            this.head = newNode; // Update the head to the new node
            // If the list was empty, also update the tail to the new node
            if (this.length === 0) {
                this.tail = newNode; // Update the tail to the new node
            }
            this.length++;
            return this;
        }

        let current = this.head; // Start from the head
        // Traverse to the node before the desired index
        for (let i = 0; i < index - 1; i++) {
            current = current.next; // Move to the next node
        }
        newNode.next = current.next; // Link the new node to the next node
        current.next = newNode; // Update the current node's next pointer
        this.length++;
        return this;
    }

    // Method to remove a node at a specific index
    removeAt(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }

        // If removing the head node
        if (index === 0) {
            const removedNode = this.head; // Store the node to be removed
            this.head = this.head.next; // Update the head to the next node
            // If the list becomes empty, also update the tail to null
            if (this.length === 1) {
                this.tail = null; // Update the tail to null
            }
            this.length--;
            return removedNode;
        }

        // If removing a node other than the head
        let current = this.head; // Start from the head
        // Traverse to the node before the desired index
        for (let i = 0; i < index - 1; i++) {
            current = current.next; // Move to the next node
            
        }
        const removedNode = current.next; // Store the node to be removed
        current.next = current.next.next; // Update the current node's next pointer
        this.length--;
        return removedNode;
    }

    // Method to get the current length of the list
    size() {
        return this.length; // Return the length of the list
    }
};