function isPalindrome(x) {
    // Palindrome numbers cannot be negative (e.g., -121 is not same when reversed)
    if (x < 0) return false;

    // Store the original number for later comparison
    let xCopy = x;

    // Variable to hold the reversed number
    let rev = 0;

    // Loop until x becomes 0
    while (x > 0) {
        // Get the last digit (remainder)
        let rem = x % 10;

        // Build the reversed number digit by digit
        rev = (rev * 10) + rem;

        // Remove the last digit from x
        x = Math.floor(x / 10);
    }

    // Compare reversed number with the original
    // If same → palindrome, else → not palindrome
    return rev === xCopy ? true : false;
}

// Test the function
console.log(isPalindrome(14421)); // false (not a palindrome)
console.log(isPalindrome(12321)); // true (palindrome)


// Function to check if a number is a palindrome
function isPalindrome(num) {
    // If the number is negative, it's not a palindrome
    if (num < 0) return false;

    // Convert the number to string
    let str = num.toString();

    // Reverse the string
    let reversed = str.split('').reverse().join('');

    // Compare original string with reversed string
    return str === reversed;
}

// Test
console.log(isPalindrome(14421)); // false
console.log(isPalindrome(12321)); // true