// MyStack simulates a stack using two queues
var MyStack = function () {
  // Initialize two queues
  this.q1 = []; // main queue (will always contain the current stack)
  this.q2 = []; // temporary queue used during pop/top operations
};

// Push element x onto stack
MyStack.prototype.push = function (x) {
  // Simply push to q1, as we are using q1 as the main queue
  this.q1.push(x);
};

// Removes the element on top of the stack and returns it
MyStack.prototype.pop = function () {
  let n = this.q1.length;

  // Move all elements except the last from q1 to q2
  // The last pushed element remains in q1
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }

  // Remove and store the last element, which is the "top" of the stack
  let ans = this.q1.shift();

  // Swap q1 and q2, making q1 the new main queue
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return ans; // Return the popped element
};

// Get the top element without removing it
MyStack.prototype.top = function () {
  let n = this.q1.length;

  // Move all elements except the last to q2
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }

  // Get the front (last remaining) element
  let front = this.q1[0];

  // Move it to q2 as well to maintain state
  this.q2.push(this.q1.shift());

  // Swap q1 and q2
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return front; // Return the top element without popping it
};

// Return whether the stack is empty
MyStack.prototype.empty = function () {
  // If q1 is empty, the stack is empty
  return this.q1.length === 0;
};
