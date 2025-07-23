var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode(0, head);

  // Use two pointers to find the nth node from the end
  let first = sentinel;
  // Move first pointer n nodes ahead
  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  // Use a second pointer to find the node to remove
  let second = sentinel;
  // Move first n nodes ahead
  while (first.next) {
    first = first.next;
    second = second.next;
  }

  // Remove the nth node from the end
  second.next = second.next.next;
  return sentinel.next;
};

//hi from dsa