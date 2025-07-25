var swapNodesInPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  // Initialize a dummy node to simplify the swapping logic
  let dummy = new ListNode(0);
  dummy.next = head;

  let p = dummy;
  let c = head;
  let n = head.next;

  while (c && n) {
    // Swap the nodes
    p.next = n; // Previous node points to the second node
    c.next = n.next; // First node points to the node after the second
    n.next = c; // Second node points to the first node

    // Move pointers forward for the next pair
    p = c; // Move p to the first node of the swapped pair
    c = p.next; // Move c to the next node (which is now the first of the next pair)
    n = c && c.next; // Move n to the second node of the next pair
  }

  return dummy.next;
};
