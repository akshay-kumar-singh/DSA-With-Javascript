var mergeSortedLL = function (l1, l2) {
  // Create a dummy node to simplify the merging process
  let start = new ListNode(0);

  let curr = start;

  // Traverse both lists and merge them
  while (l1 && l2) {
    // Compare the values of the nodes
    if (l1.val < l2.val) {
      // If l1's value is smaller, append it to the merged list
      curr.next = l1;
      // Move to the next node in l1
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }

    // Move to the next node in the merged list
    curr = curr.next;
  }

  // If one of the lists is not fully traversed, append the remaining nodes

  if (l1) {
    curr.next = l1;
  }
  if (l2) {
    curr.next = l2;
  }

  return start.next;
};
