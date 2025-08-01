var longestCommonPrefix = function (strs) {
  let x = 0;

  while (x < strs[0].length) {
    // Check if the current character at position x is the same in all strings
    let ch = strs[0][x];
    // Iterate through the rest of the strings
    for (let i = 1; i < strs.length; i++) {
      // If the character at position x is not the same or if we reach the end of a string
      if (x >= strs[i].length || strs[i][x] !== ch) {
        return strs[0].slice(0, x);
      }
    }
    x++;
  }
  return strs[0];
};
