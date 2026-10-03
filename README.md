# 🧠 Data Structures & Algorithms — JavaScript

A practical **Data Structures & Algorithms (DSA)** repository implemented in **JavaScript**, designed to build strong problem-solving fundamentals and provide clear, reusable implementations of common algorithms and data structures.

The repository focuses not only on writing the code, but also on understanding **how and why each algorithm works**, with explanatory comments and **Time & Space Complexity** analysis.

📦 **Repository:** [https://github.com/MO-GBR/DSA-Masterclass](https://github.com/MO-GBR/DSA-Masterclass)

![Banner](./Banner.jfif)
---

## 📚 What's Inside

This repository covers:

* 🔎 Searching Algorithms
* 🔄 Sorting Algorithms
* 💡 Greedy Algorithms
* 🏗️ Data Structures & Operations
* 🧩 LeetCode Problems
* ⏱️ Time & Space Complexity

---

# 🔎 1. Searching Algorithms

### Linear Search

Searches through elements sequentially until the target is found.

* Best: **O(1)**
* Average: **O(n)**
* Worst: **O(n)**
* Space: **O(1)**

### Binary Search

Searches a **sorted** array by repeatedly dividing the search space in half.

* Best: **O(1)**
* Average: **O(log n)**
* Worst: **O(log n)**
* Space: **O(1)** for the iterative implementation

---

# 🔄 2. Sorting Algorithms

The repository includes implementations of the most common sorting algorithms:

* Merge Sort
* Quick Sort
* Insertion Sort
* Bubble Sort
* Selection Sort

## Complexity Overview

| Algorithm      |       Best |    Average |      Worst |     Space |
| -------------- | ---------: | ---------: | ---------: | --------: |
| Merge Sort     | O(n log n) | O(n log n) | O(n log n) |      O(n) |
| Quick Sort     | O(n log n) | O(n log n) |      O(n²) | O(log n)* |
| Insertion Sort |       O(n) |      O(n²) |      O(n²) |      O(1) |
| Bubble Sort    |       O(n) |      O(n²) |      O(n²) |      O(1) |
| Selection Sort |      O(n²) |      O(n²) |      O(n²) |      O(1) |

* Quick Sort space complexity depends on the implementation and recursion depth.

Each implementation includes explanatory comments to make the algorithm easier to follow step by step.

---

# 💡 3. Greedy Algorithms

The repository contains implementations of several common **Greedy Algorithm** problems.

A greedy algorithm makes the **locally optimal choice at each step**, with the goal of reaching a globally optimal solution.

### Included Problems

#### 🎯 Activity Selection

Select the maximum number of non-overlapping activities based on their start and finish times.

#### 🍪 Assign Cookies

Assign cookies to children while maximizing the number of satisfied children.

#### 🦘 Jump Game

Determine whether it is possible to reach the last index by making the best available jump at each position.

These problems are useful for learning how to recognize **greedy patterns** during technical interviews.

---

# 🏗️ 4. Data Structures

The repository includes implementations and operations for common data structures.

### Covered Structures

* Array
* Linked List
* Hash Map / Object
* Set
* Stack
* Queue
* Tree
* Binary Search Tree (BST)
* Heap
* Graph

The implementations focus on understanding the fundamental operations behind each data structure.

For example, a Stack implementation demonstrates operations such as:

* `push()`
* `pop()`
* Managing nodes
* Updating references
* Tracking length
* Handling empty states

The code contains comments explaining the purpose of important steps rather than simply providing the final implementation.

---

# 🧩 5. LeetCode Problems

The repository also contains solutions to **18 common LeetCode problems** covering different data structures, algorithms, and problem-solving patterns.

### Arrays & Hash Maps

1. **Two Sum**
2. **Contains Duplicate**
3. **Valid Anagram**
4. **Best Time to Buy and Sell Stock**

### Strings & Two Pointers

5. **Valid Palindrome**
6. **Container With Most Water**
7. **Longest Substring Without Repeating Characters**

### Stack & Binary Search

8. **Valid Parentheses**
9. **Binary Search**

### Linked Lists

10. **Reverse Linked List**

### Trees

11. **Maximum Depth of Binary Tree**
12. **Binary Tree Level Order Traversal**

### Heap / Selection

13. **Kth Largest Element**

### Graphs

14. **Number of Islands**
15. **Course Schedule**

### Recursion / Backtracking

16. **Subsets**

### Dynamic Programming

17. **Climbing Stairs**
18. **Coin Change**

These problems provide practical examples of applying DSA concepts to real problem-solving scenarios.

---

# ⏱️ 6. Time & Space Complexity

Understanding an algorithm isn't complete without understanding its efficiency.

For the algorithms and implementations in this repository, **Time Complexity** and **Space Complexity** are considered alongside the code.

### Time Complexity

Time complexity describes how the number of operations grows as the input size increases.

Common complexities include:

```text
O(1)          Constant
O(log n)      Logarithmic
O(n)          Linear
O(n log n)    Linearithmic
O(n²)         Quadratic
O(2ⁿ)         Exponential
O(n!)         Factorial
```

### Space Complexity

Space complexity describes how much additional memory an algorithm requires as the input size grows.

Understanding both allows you to compare different solutions and identify opportunities for optimization.

---

# 🎯 Learning Goals

This repository was built to strengthen the following skills:

* Understand fundamental data structures
* Implement algorithms from scratch
* Analyze Time & Space Complexity
* Recognize common problem-solving patterns
* Improve JavaScript problem-solving skills
* Practice technical interview questions
* Build the ability to explain algorithms clearly

---

# 🗂️ Repository Structure

A possible structure for the repository:

```text
DSA-Masterclass/
│
├── Algorithms/
│   ├── Search.js
│   ├── Sort.js
│   └── Greedy.js
│
├── Data-Structures/
│   ├── Array.js
│   ├── LinkedList
│   │   ├── Singly.js
│   │   └── Doubly.js
│   ├── HashMap.js
│   ├── Stack.js
│   ├── Queue.js
│   ├── Tree.js
│   ├── Heap.js
│   └── Graph.js
│
├── LeetCode/
│   ├── twoSum.js
│   ├── containsDuplicate.js
│   ├── validAnagram.js
│   ├── bestTimeToBuyAndSellStock.js
│   ├── validPalindrome.js
│   ├── containerWithMostWater.js
│   ├── longestSubstring.js
│   ├── validParentheses.js
│   ├── binarySearch.js
│   ├── reverseLinkedList.js
│   ├── maximumDepthOfBinaryTree.js
│   ├── binaryTreeLevelOrderTraversal.js
│   ├── kthLargestElement.js
│   ├── numberOfIslands.js
│   ├── courseSchedule.js
│   ├── subsets.js
│   ├── climbingStairs.js
│   └── coinChange.js
│
└── README.md
```

---

# 🛠️ Technologies

* **JavaScript**
* **Node.js**
* **LeetCode**

No external libraries are required for the core algorithm implementations.

---

# 🚀 How to Use

Clone the repository:

```bash
git clone https://github.com/MO-GBR/DSA-Masterclass
```

Navigate into the project:

```bash
cd DSA-Masterclass
```

Run individual JavaScript files with Node.js:

```bash
node path/to/file.js
```

You can also explore the source code directly and follow the explanatory comments to understand each implementation.

---

# 🧠 Problem-Solving Approach

When solving a DSA problem, a useful process is:
1. Understand the Problem
2. Identify the Input & Output
3. Think About Brute Force
4. Identify the Data Structure / Pattern
5. Optimize the Approach
6. Implement
7. Analyze Time Complexity
8. Analyze Space Complexity
9. Test Edge Cases

The goal is not simply to memorize solutions.

The goal is to develop the ability to **recognize patterns and derive solutions**.

---

# 🎓 Purpose

This repository is part of my journey toward becoming a stronger **software engineer and problem solver**.

Rather than treating DSA as a collection of memorized solutions, the focus is on understanding:

> **How the data structure works → how the algorithm works → why the solution works → how efficient it is.**

---
# 📬 Contact

![Main](./Main.png)

If you would like to collaborate, hire me, or provide feedback, feel free to reach out:

- Portfolio: [View](https://mogabr.vercel.app/)
- Email: [Contact](mailto:mohameedgabr7@gmail.com)
- LinkedIn: [View](https://www.linkedin.com/in/mohameedgabr0/)

---

# 📄 License

* This project is available for educational and portfolio purposes.
* This project is open‑source and available under the **MIT License**.

---
## ⭐ If You Find This Useful

Feel free to explore the implementations, experiment with the code, and use the repository as a reference while learning Data Structures & Algorithms.

---

**Built with JavaScript ☕💻**
