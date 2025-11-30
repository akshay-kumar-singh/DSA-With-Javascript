function hasCycle(edges) {
  let graph = {};

  // Build adjacency list
  for (let [x, y] of edges) {
    if (!graph[x]) graph[x] = [];
    if (!graph[y]) graph[y] = [];
    graph[x].push(y);
    graph[y].push(x);
  }

  let visited = new Set();

  let dfs = (curr, parent) => {
    visited.add(curr);

    for (let neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, curr)) return true;
      } else if (neighbor !== parent) {
        return true; // cycle detected
      }
    }

    return false;
  };

  // Check all components
  for (let node in graph) {
    node = Number(node); // <-- FIX HERE: convert string to number
    if (!visited.has(node)) {
      if (dfs(node, -1)) return true;
    }
  }

  return false;
}

// tests
console.log(hasCycle([[0, 1], [1, 2], [2, 0]])); 
// true

console.log(hasCycle([[0, 1], [1, 2], [2, 3]])); 
// false

console.log(hasCycle([[0, 1], [1, 2], [2, 3], [3, 4], [1, 4]])); 
// true
