var numJewelsInStones = function (jewels, stones) {
  // Create a set from the jewels for O(1) lookup time
  let jewelSet = new Set(jewels);
  let count = 0;

  // Iterate through each stone and check if it is a jewel
  for (let i = 0; i < stones.length; i++) {
    // If the stone is in the jewel set, increment the count
    if (jewelSet.has(stones[i])) {
      count++;
    }
  }

  return count;
};


// Another approach using nested loops
var numJewelsInStones = function (jewels, stones) {
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      // If the current stone matches the current jewel, increment the count
      if (stones[i] === jewels[j]) {
        count++;
        break; // No need to check further jewels for this stone
      }
    }
  }
  return count;
};


// Another approach using string includes method
var numJewelsInStones = function (jewels, stones) {
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    // Check if the current stone is included in the jewels string
    if (jewels.includes(stones[i])) {
      count++;
    }
  }
  return count;
};
