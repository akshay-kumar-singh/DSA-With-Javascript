var addTwoNumbers = function (l1, l2) {
  // Create a dummy node to simplify the result list construction
  let dummy = new ListNode(0);
  // Pointer to the current node in the result list
  let curr = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    // If l1 or l2 is null, treat its value as 0
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    // Calculate the new carry and the current digit
    carry = Math.floor(sum / 10);
    // Create a new node with the current digit
    curr.next = new ListNode(sum % 10);
    // Move to the next node
    curr = curr.next;

    // Move to the next nodes in l1 and l2
    l1 = l1?.next;
    l2 = l2?.next;
  }
  return dummy.next;
};
