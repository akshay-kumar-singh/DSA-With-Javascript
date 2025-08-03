var groupAnagrams = function (strs) {
  // Create an empty object to hold the grouped anagrams
  let map = {};
  // Iterate through each string in the input array
  for (let i = 0; i < strs.length; i++) {
    // Sort the characters of the string to create a key
    let sortedStr = strs[i].split("").sort().join("");
    // If the sorted string is not in the map, add it with the current string
    if (!map[sortedStr]) {
      map[sortedStr] = [strs[i]];
      // If it is already in the map, push the current string to the existing array
    } else {
      map[sortedStr].push(strs[i]);
    }
  }

  // Return the values of the map as an array of grouped anagrams
  return Object.values(map);
};

//better solution (a-z):

var groupAnagrams = function (strs) {
  // Create an empty object to hold the grouped anagrams
  let map = {};

  // Iterate through each string in the input array
  for (let i = 0; i < strs.length; i++) {
    // Create a frequency array for characters a-z
    // Initialize an array of size 26 (for each letter a-z) with zeros
    let freqArr = Array(26).fill(0);
    // Get the current string
    let s = strs[i];

    // Count the frequency of each character in the string
    // For each character in the string, calculate its index (0 for 'a',
    // 1 for 'b', ..., 25 for 'z') and increment the corresponding
    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt(0) - "a".charCodeAt(0);
      freqArr[index]++;
    }
    // Create a key from the frequency array
    let key = "";

    // Construct the key by appending each character and its frequency
    for (let k = 0; k < 26; k++) {
      // Only append characters that have a non-zero frequency
      key += String.fromCharCode(k + "a".charCodeAt(0)) + freqArr[k];
    }

    // If the key does not exist in the map, create a new entry
    // If it exists, push the current string to the existing array
    if (!map[key]) {
      map[key] = [s];
    } else {
      map[key].push(s);
    }
  }

  // Return the values of the map as an array of grouped anagrams
  return Object.values(map);
};
