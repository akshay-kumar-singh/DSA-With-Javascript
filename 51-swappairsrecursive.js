var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  
  let l = head;
  let r = head.next;

  // Swap the first two nodes
  l.next = swapPairs(r.next);
  // Now r is the new head of the swapped pair
  r.next = l;

  // Return the new head of the swapped pair
  return r;
};
