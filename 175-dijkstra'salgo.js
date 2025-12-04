class MinHeap {
  constructor() {
    this.h = [];
  }
  push(val) {
    this.h.push(val);
    this.up(this.h.length - 1);
  }
  pop() {
    if (this.h.length === 1) return this.h.pop();
    let top = this.h[0];
    this.h[0] = this.h.pop();
    this.down(0);
    return top;
  }
  size() {
    return this.h.length;
  }
  up(i) {
    while (i > 0) {
      let p = (i - 1) >> 1;
      if (this.h[p][1] <= this.h[i][1]) break;
      [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
      i = p;
    }
  }
  down(i) {
    let n = this.h.length;
    while (true) {
      let l = 2 * i + 1;
      let r = 2 * i + 2;
      let s = i;
      if (l < n && this.h[l][1] < this.h[s][1]) s = l;
      if (r < n && this.h[r][1] < this.h[s][1]) s = r;
      if (s === i) break;
      [this.h[i], this.h[s]] = [this.h[s], this.h[i]];
      i = s;
    }
  }
}

function dijkstras(graph, src) {
  let n = graph.length;
  let dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  let pq = new MinHeap();
  pq.push([src, 0]);

  while (pq.size()) {
    let [node, nodeWeight] = pq.pop();
    if (nodeWeight > dist[node]) continue;

    for (let [neighbor, edgeWeight] of graph[node]) {
      let newDist = nodeWeight + edgeWeight;
      if (newDist < dist[neighbor]) {
        dist[neighbor] = newDist;
        pq.push([neighbor, newDist]);
      }
    }
  }
  return dist;
}

const graph = [
  [[1, 2], [2, 4]],
  [[3, 7], [2, 1]],
  [[4, 3], [5, 1]],
  [[6, 1]],
  [],
  [],
  []
];

console.log(dijkstras(graph, 0));
