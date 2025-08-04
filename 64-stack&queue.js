let stack = []; // Simply, Use Array as Stack.

stack.push(1); // Add inside stack
stack.push(2);
stack.push(3);
console.log(stack); // [1, 2, 3]

stack.pop(); // A stack is LIFO (Last In, First Out), so the element that goes in last will come out first. In this case, 3 will be removed.
stack.pop();
console.log(stack); // [1]

stack.push(7); // [1, 7]

// For Top element
let top = stack[stack.length - 1];
console.log(top); // 7

// Invalid: stack[3] – violates stack discipline
// It works fine because it's treated as an array, but this is invalid in the context of a stack.
// Always use push, pop, and peek for proper stack usage.

let q = [];

// Enqueue
q.push(1);
q.push(2);
q.push(3);
console.log(q); // [1, 2, 3]

// Dequeue: Remove from front of the Queue
q.shift(); // Removes 1

// Peek: Get first element of queue.
let front = q[0];
console.log(front); // 2

// Invalid Syntax:
q.pop(); // This works because it's an array method, but it removes from the end and breaks queue logic.
// Queue should only remove from the front.
