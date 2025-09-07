var maxSlidingWindow = function (arr, k) {
  let res = []; // stores the result (maximum of each window)
  let q = []; // deque (stores potential maximums in decreasing order)

  let i = (j = 0); // i = start of window, j = end of window

  while (j < arr.length) {
    // Remove smaller elements from the back
    // because they are useless (a bigger element has arrived)
    while (q.length && arr[j] > q[q.length - 1]) {
      q.pop();
    }

    // Add current element to deque
    q.push(arr[j]);

    // When we reach window size (j >= k - 1)
    if (j >= k - 1) {
      // Front of deque is always the maximum in the window
      res.push(q[0]);

      // If the element going out of the window
      // is the same as the max (q[0]), remove it
      if (arr[i] == q[0]) {
        q.shift();
      }

      // Slide the window forward
      i++;
    }

    // Expand window by moving right pointer
    j++;
  }

  return res;
};
