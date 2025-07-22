var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode(0, head);
  let length = 0;
  let first = head;

  // Calculate the length of the linked list
  while (first) {
    length++;
    first = first.next;
  }

  // If n is greater than the length, return the original list
  let prev = sentinel;

  // Traverse to the node just before the one we want to remove
  for (let i = 0; i < length - n; i++) {
    prev = prev.next;
  }

  // Remove the nth node from the end
  prev.next = prev.next.next;
  return sentinel.next;
};
