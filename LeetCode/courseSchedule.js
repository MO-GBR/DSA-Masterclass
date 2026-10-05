/*
    Course Schedule
    👨‍💼 How the interviewer asks it: "There are a number of courses you need to take. Some courses have prerequisites. Determine whether you can finish all courses."
    🔑 Keywords: prerequisites, dependencies, courses, cycle
    🎯 Main problem: Determine whether a dependency graph contains a cycle.
    🧱 Data Structure: Graph
    🧩 Pattern: Topological Sort / Cycle Detection
*/

const numCourses = 2;

const prerequisites = [
	[1, 0], // You will need course 1, to finsih course 0
	[0, 1] // You will need course 1, to finsih course 0
];

function canFinish(numCourses, prerequisites) {
	// Build adjacency list
	const graph = Array.from(
		{ length: numCourses },
	    () => []
	);
	
	for (const [course, prerequisite] of prerequisites) {
	    graph[prerequisite].push(course);
	}
	
	// 0 = not visited , 1 = currently visiting , 2 = completely processed
	const state = new Array(numCourses).fill(0);
	
	function dfs(course) {
	    // We found a node that is currently in our DFS path → cycle!
	    if (state[course] === 1) return false;
	    
	    // Already completely processed. No need to explore it again.
	    if (state[course] === 2) return true;
	    
		// Mark as currently visiting
		state[course] = 1;
		
		// Visit all courses that depend on this course
	    for (const nextCourse of graph[course]) {
		    if (!dfs(nextCourse)) return false;
	    }
	    
	    // Finished exploring this course
	    state[course] = 2;
	    
	    return true;
	}
	
	// Check every course
	for (let course = 0; course < numCourses; course++) {
	    if (!dfs(course)) return false;
    }
    
	return true;
}

console.log(canFinish(numCourses, prerequisites)); // Output: false