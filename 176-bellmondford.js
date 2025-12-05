function bellmanford(edges, V, src) {
  let dist = new Array(V).fill(Infinity);
  dist[src] = 0;

  for (let i = 0; i < V - 1; i++) {
    for (let [u, v, w] of edges) {
      if (dist[u] != Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }
  return dist;
}

const edges = [
  [0, 1, 1],
  [1, 2, -1],
  [2, 3, -1],
  [3, 1, 2],
  [0, 4, 4]
];

let V = 5;
console.log(bellmanford(edges, V, 0));