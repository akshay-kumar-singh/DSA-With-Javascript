var isValid = function (s) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      // If it's an opening bracket, push the expected closing one
      stack.push(map[s[i]]);
    } else {
      // Pop the expected closing bracket
      let top = stack.pop();
      if (s[i] !== top) { 
        return false;
      }
    }
  }

  return stack.length === 0;
};
