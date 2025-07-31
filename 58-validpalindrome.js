var isValidPalindrome = function (s) {
  // Convert the string to lowercase to handle case insensitivity
  s = s.toLowerCase();

  let filterString = "";
  let reverseString = "";
  // Iterate through the string and filter out non-alphanumeric characters
  for (let i = 0; i < s.length; i++) {
    // Check if the character is alphanumeric
    if (s[i].match(/[a-z0-9]/i)) {
      filterString = filterString + s[i];
      reverseString = s[i] + reverseString;
    }
  }
  return filterString === reverseString;
};

//Using Two Pointers
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!s[i].match(/[a-z0-9]/i)) {
      ++i;
    } else if (!s[j].match(/[a-z0-9]/i)) {
      --j;
    } else if (s[i] === s[j]) {
      ++i;
      --j;
    } else {
      return false;
    }
  }
  return true;
};

//using Two Pointers
var isValidPalindrome = function (s) {
  s = s.toLowerCase();

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    // Skip non-alphanumeric characters from left
    while (i < j && !s[i].match(/[a-z0-9]/i)) {
      i++;
    }
    // Skip non-alphanumeric characters from right
    while (i < j && !s[j].match(/[a-z0-9]/i)) {
      j--;
    }
    // Compare characters
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
