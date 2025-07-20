var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  let slow = head,
    fast = head;

  // Find the middle of the linked list
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let prev = null;
  while (slow) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Compare the first half and the reversed second half
  let first = head,
    second = prev;
  while (second) {
    if (first.val !== second.val) {
      return false;
    }
    first = first.next;
    second = second.next;
  }
  return true;
};
