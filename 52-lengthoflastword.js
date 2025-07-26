var lengthOfLastWord = function (s) {
  let n = s.length - 1;

  // Skip trailing spaces
  while (n >= 0 && s[n] === " ") {
    n--;
  }

  let count = 0;
  // Count the length of the last word
  while (n >= 0 && s[n] !== " ") {
    count++;
    n--;
  }

  return count;
};

var lengthOfLastWord = function (s) {
  // 1️⃣ Trim spaces from both ends
  let trimmed = s.trim();

  // 2️⃣ Split the string into words
  let words = trimmed.split(" ");

  // 3️⃣ Get the last word length
  if (words.length > 0) {
    return words[words.length - 1].length;
  } else {
    return 0;
  }
};

var lengthOfLastWord = function (s) {
  let words = s.trim().split(" ");
  return words.length > 0 ? words[words.length - 1].length : 0;
};

var lengthOfLastWord = function (s) {
  let n = s.length - 1;
  let count = 0;

  while (n >= 0) {
    if (s[n] !== " ") {
      count++;
    } else if (count > 0) {
      break;
    }
    n--;
  }
  return count;
};
