var MinStack = function () {
  this.s = [];
};

MinStack.prototype.push = function (val) {
  // If the stack is empty, push the value and set it as the minimum.
  if (this.s.length === 0) {
    this.s.push([val, val]);
    // If the stack is not empty, push the value and compare it with the current minimum.
  } else {
    // Get the current minimum value from the last element of the stack.
    // Compare the new value with the current minimum and push the new value along with the new
    let minVal = this.s[this.s.length - 1][1];
    this.s.push([val, Math.min(val, minVal)]);
  }
};

MinStack.prototype.pop = function () {
  // Pop the last element from the stack.
  this.s.pop();
};

MinStack.prototype.top = function () {
  // Return the top value of the stack, which is the first element of the last sub-array.
  return this.s[this.s.length - 1][0];
};

MinStack.prototype.getMin = function () {
  // Return the minimum value, which is the second element of the last sub-array.
  return this.s[this.s.length - 1][1];
};
