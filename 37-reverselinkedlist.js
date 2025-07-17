var reverseLinkedList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let prev = null;
  let current = head;

  while (current) {
    let temp = current.next; // Store the next node
    current.next = prev; // Reverse the link
    prev = current; // Move prev to current
    current = temp; // Move to the next node
  }
//   head = prev; // Update head to the new first node
  return prev; // New head of the reversed list
};
