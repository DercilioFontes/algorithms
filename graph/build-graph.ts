let buildGraph = (edges: [number, number][]) => {
  let graph = new Map();
  for (const [x, y] of edges) {
    if (!graph.has(x)) {
      graph.set(x, []);
    }

    graph.get(x).push(y);

    // if (!graph.has(y)) {
    //     graph.set(y, []);
    // }

    // graph.get(y).push(x);
    // uncomment the above lines if the graph is undirected
  }
};
