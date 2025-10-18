function isPalindrome(x) {
    if (x < 0) return false;

    let xCopy = x;

    let rev = 0;

    while (x > 0) {
        let rem = x % 10;

        rev = (rev * 10) + rem;

        x = Math.floor(x / 10);
    }


    return rev === xCopy ? true : false;
}

console.log(isPalindrome(14421)); // false (not a palindrome)
console.log(isPalindrome(12321)); // true (palindrome)


// Function to check if a number is a palindrome (converted number → string)
function palindrome(n) {
  const str = Math.abs(n).toString();  // convert number to string
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(palindrome(11211)); // ✅ true
console.log(palindrome(12345)); // ❌ false


function palindrome(word) {
  const str = word.toLowerCase(); // convert to lowercase for case-insensitive comparison
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(palindrome("madam"));     // ✅ true
console.log(palindrome("racecar"));   // ✅ true
console.log(palindrome("hello"));     // ❌ false
console.log(palindrome("Level"));     // ✅ true (case-insensitive)
