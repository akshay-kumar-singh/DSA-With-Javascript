var removeOuterParentheses = function (s) {
  let stack = [];
  let ans = "";

  // Iterate through the string
  for (let i = 0; i < s.length; i++) {
    // If we encounter an opening parenthesis
    // we push it onto the stack
    if (s[i] === "(") {
      stack.push(s[i]);
      // If the stack has more than one element,
      // we add the character to the answer
      if (stack.length > 1) {
        ans += s[i];
      }
    } else {
      // If we encounter a closing parenthesis,
      // we pop from the stack
      // and if the stack has more than one element,
      // we add the character to the answer
      if (stack.length > 1) {
        ans += s[i];
      }
      stack.pop();
    }
  }

  return ans;
};

var removeOuterParentheses = function (s) {
  // Initialize level to -1 to account for the first opening parenthesis
  // and ans to store the result
  let level = -1;
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    // Increment level for opening parenthesis
    // and append to ans if level is greater than 0
    if (s[i] === "(") {
      level++;
      ans += level ? s[i] : "";
    } else {
      // Decrement level for closing parenthesis
      // and append to ans if level is greater than 0
      ans += level ? s[i] : "";
      level--;
    }
  }

  return ans;
};
