var validAnagram = function (s, t) {
  // Check if the lengths of the strings are equal
  if (s.length !== t.length) return false;

  // Create a frequency map for characters in string s
  let map = {};

  // Populate the frequency map with characters from string s
  for (let i = 0; i < s.length; i++) {
    // If the character is not in the map, initialize it to 1, otherwise increment its count
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }

  // Check characters in string t against the frequency map
  for (let i = 0; i < t.length; i++) {
    // If the character is not in the map or its count is zero, return false
    if (!map[t[i]] || map[t[i]] === 0) {
      return false;
    } else {
      // Decrement the count of the character in the map
      map[t[i]]--;
    }
  }

  // If all characters matched, return true
  return true;
};

var validAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};
