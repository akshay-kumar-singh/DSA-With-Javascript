var maxFreqSum = function (s) {
  // Object to store frequency of each character
  let map = {};

  // Count frequency of each character
  for (let i = 0; i < s.length; i++) {
    // If character doesn't exist in map, set it to 1, else increment it
    map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
  }

  // Define vowels for easy checking
  let vowels = ["a", "e", "i", "o", "u"];

  // Variables to track the highest frequency vowel and consonant
  let maxVowel = 0;
  let maxConsonant = 0;

  // Get all unique characters from the map
  let mapKeys = Object.keys(map);

  // Iterate through each character and update maxVowel or maxConsonant
  for (let i = 0; i < mapKeys.length; i++) {
    if (vowels.includes(mapKeys[i])) {
      // Character is a vowel
      maxVowel = Math.max(maxVowel, map[mapKeys[i]]);
    } else {
      // Character is a consonant
      maxConsonant = Math.max(maxConsonant, map[mapKeys[i]]);
    }
  }

  return maxVowel + maxConsonant;
};
