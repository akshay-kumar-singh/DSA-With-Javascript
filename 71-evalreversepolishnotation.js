var evalRPN = function (arr) {
  let stack = [];
  const map = {
    "+": (a, b) => b + a,
    "*": (a, b) => b * a,
    "-": (a, b) => b - a,
    "/": (a, b) => Math.trunc(b / a),
  };
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      let a = stack.pop();
      let b = stack.pop();
      let ans = map[arr[i]](+a, +b);
      stack.push(ans);
    } else {
      stack.push(arr[i]);
    }
  }
  return Number(stack.pop());
};

function evalRPN(tokens) {
  const stack = []; // to store numbers

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];

    // If it's an operator, pop last two numbers and apply operation
    if (t === "+" || t === "-" || t === "*" || t === "/") {
      const b = stack.pop(); // right number
      const a = stack.pop(); // left number

      // Push the result based on operator
      if (t === "+") stack.push(a + b);
      else if (t === "-") stack.push(a - b);
      else if (t === "*") stack.push(a * b);
      else stack.push(Math.trunc(a / b)); // integer division
    }
    // If it's a number, convert to Number and push
    else {
      stack.push(Number(t));
    }
  }

  // Final result left in stack
  return stack.pop();
}
