var findItinerary = function(tickets) {
  let graph = {};
  for (let [from, to] of tickets) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }
  for (let node in graph) {
    graph[node].sort(); // ascending lexicographic
  }

  let path = [];
  let dfs = (curr) => {
    while (graph[curr] && graph[curr].length) {
      let neighbor = graph[curr].shift(); // remove from front
      dfs(neighbor);
    }
    path.push(curr);
  };

  dfs("JFK");
  return path.reverse(); // reverse before returning
};