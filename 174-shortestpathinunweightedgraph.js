function shortestDistance(graph, src) {
  let dist = new Array(graph.length).fill(Infinity);
  dist[src] = 0;

  let q = [src];

  while (q.length) {
    let curr = q.shift();

    for (let neighbor of graph[curr]) {
      if (dist[neighbor] === Infinity) {
        dist[neighbor] = dist[curr] + 1;
        q.push(neighbor);
      }
    }
  }

  return dist;
}

const graph = [
  [1, 2], // 0 -> 1,2
  [3],    // 1 -> 3
  [4],    // 2 -> 4
  [5],    // 3 -> 5
  [3],    // 4 -> 3
  []      // 5 -> none
];

console.log(shortestDistance(graph, 0));
