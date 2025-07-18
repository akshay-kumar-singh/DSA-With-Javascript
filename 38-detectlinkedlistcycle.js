var hasCycle = function (head) {
  let seenNodes = new Set();
  let currentNode = head;

  while (currentNode !== null) {
    if (seenNodes.has(currentNode)) {
      return true; // Cycle detected
    }
    seenNodes.add(currentNode);
    currentNode = currentNode.next;
  }
  return false; // No cycle detected
};
