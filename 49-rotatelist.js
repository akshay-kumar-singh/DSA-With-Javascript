var rotateRight = function (head, k) {
  // 🔹 Edge case: list is empty or has only one node
  if (!head || !head.next) return head;

  // 🔹 Step 1: Calculate the length of the list
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }

  // 🔹 Step 2: Normalize k in case it's larger than length
  k = k % length;

  // 🔹 Early exit: if no rotation needed
  if (k === 0) return head;

  // 🔹 Step 3: Use two-pointer approach to find new head
  let slow = head;
  let fast = head;

  // Move `fast` k steps ahead
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  // Move both pointers until `fast` reaches the last node
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // 🔹 Step 4: Rotate the list
  fast.next = head;       // Connect tail to original head to make it circular
  let newHead = slow.next; // New head is the next of slow pointer
  slow.next = null;        // Break the list to finalize rotation

  return newHead;
};
