var orangesRotting = function (grid) {
  // m = number of rows, n = number of columns
  let m = grid.length;
  let n = grid[0].length;

  // Queue to keep track of rotten oranges and the minute when they became rotten
  // Format: [rowIndex, colIndex, minute]
  let queue = [];

  // Step 1: Find all the rotten oranges initially and add them to the queue
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) { 
        // Found a rotten orange — it’s rotten at minute 0
        queue.push([i, j, 0]);
      }
    }
  }

  // This will store the total minutes passed until all oranges rot
  let maxMinutes = 0;

  // Step 2: BFS traversal — rot the fresh oranges next to rotten ones
  while (queue.length) {
    // Take out the first rotten orange from the queue
    let [x, y, level] = queue.shift();

    // Check UP
    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2; // Mark as rotten
      queue.push([x - 1, y, level + 1]); // Add to queue with +1 minute
    }

    // Check DOWN
    if (x < m - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, level + 1]);
    }

    // Check RIGHT
    if (y < n - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, level + 1]);
    }

    // Check LEFT
    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, level + 1]);
    }

    // Keep track of the max time taken so far
    maxMinutes = Math.max(level, maxMinutes);
  }

  // Step 3: Check if any fresh orange is still left
  // If yes, then it's impossible to rot all oranges → return -1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  // Step 4: Return the time taken for all oranges to rot
  return maxMinutes;
};
