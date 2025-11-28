var allPathsSourceTarget = function(graph) {
    let start = 0;
    let end = graph.length - 1;
    let allPaths = [];
    let dfs = (curr, path) => {
        if(curr === end){
            allPaths.push([...path]);
            return;
        }
        for(let neighbor of graph[curr]){
            path.push(neighbor)
            dfs(neighbor, path);
            path.pop();
        }
    }

    dfs(0, [0])
    return allPaths;
};
   