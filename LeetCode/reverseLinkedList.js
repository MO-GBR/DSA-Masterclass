/*
    Reverse Linked List
    👨‍💼 How the interviewer asks it: "Given the head of a singly linked list, reverse the list and return the new head."
    🔑 Keywords: linked list, reverse, next, head
    🎯 Main problem: Reverse the direction of every (next) pointer.
    🧱 Data Structure: Linked List
    🧩 Pattern: Pointer Manipulation
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
	let prev = null;
	let current = head;
	
	while (current) {
	    const next = current.next;
	    current.next = prev;
	    
	    prev = current;
	    current = next;
	}
	
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