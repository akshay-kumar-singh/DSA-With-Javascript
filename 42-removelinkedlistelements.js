var removeElements = function (head, val) {
  if (!head) return null;

  let sentinel = new ListNode(0, head);
  // Sentinel node to handle edge cases like removing the head
  let current = sentinel;

  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next; // Skip the node with the value
    } else {
      current = current.next; // Move to the next node
    }
  }
  return sentinel.next; // Return the new head, which is the next of sentinel
};
