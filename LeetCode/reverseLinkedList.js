/*
    Reverse Linked List
    👨‍💼 How the interviewer asks it: "Given the head of a singly linked list, reverse the list and return the new head."
    🔑 Keywords: linked list, reverse, next, head
    🎯 Main problem: Reverse the direction of every (next) pointer.
    🧱 Data Structure: Linked List
    🧩 Pattern: Pointer Manipulation
	⏱️Complexity
		- Iterative & Recursive 👉 Time: O(n)
		- Iterative 👉 Space: O(1)
		- Recursive 👉 Space: O(n)
*/

// 1 → 2 → 3 → null
const LinkedList = {
    head: {
        data: 1,
        next: { data: 2, next: { data: 3, next: null } }
    },
    tail: { data: 3, next: null },
    length: 3
};

function reverseList(head) {
	// The node that should come before the current node in the reversed list. Starts as null.
	let prev = null;
	// The node whose next pointer we are reversing. Starts at the head.
	let current = head;
	
	// Continue until we have processed every node
	while (current) {
		// STEP 1: Save the next node before changing the link.
        // This prevents losing access to the remaining list.
	    const next = current.next; // Temporarily saves the next node so we don't lose access to the remaining list.

		// STEP 2: Reverse the current node's pointer.
        // Instead of pointing forward, it points to prev.
	    current.next = prev;

	    // STEP 3: Move prev forward to the current node.
        // The reversed portion now includes this node.
	    prev = current;

		// STEP 4: Move current forward to the saved next node.
        // Continue working on the un-reversed portion.
	    current = next;
	}

	// All links are reversed.
    // prev points to the last node, which is the new head.
	return prev;
};

function reverseListRecursive(head) {
	if (!head || !head.next) return head;
	
	const newHead = reverseList(head.next);
	
	head.next.next = head;
	head.next = null;
	
	return newHead;
};

console.log(reverseList(LinkedList.head)); // { data: 3, next: { data: 2, next: { data: 1, next: null } } }
console.log(reverseListRecursive(LinkedList.head)); // { data: 3, next: { data: 2, next: { data: 1, next: null } }