var oddEven = function (head) {
  if (!head || !head.next) return head; // Check for empty or single node list

  odd = head;
  even = head.next;
  evenStart = even; // Store the start of the even list

  while (odd.next && even.next) {
    odd.next = odd.next.next; // Link odd nodes
    even.next = even.next.next; // Link even nodes
    odd = odd.next; // Move to the next odd node
    even = even.next; // Move to the next even node
  }
  odd.next = evenStart; // Connect the end of odd list to the start of even list
  return head; // Return the modified list
};
