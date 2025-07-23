var deleteDuplicates = function (head) {
  let curr = head;

  while (curr && curr.next) {
    if ((curr.val === curr, next.val)) {
      curr.next = curr.next.next; // Skip the duplicate node
    } else {
      curr = curr.next; // Move to the next node
    }
  }
  return head; // Return the modified list
};
