function reverseDigits(x) {
  let xCopy = x;
  x = Math.abs(x);
  let rev = 0;

  while (x > 0) {
    let last = x % 10;
    rev = rev * 10 + last;
    x = Math.floor(x / 10);
  }

  let limit = 2 ** 31;
  if (rev < -limit || rev > limit) return 0;

  return xCopy < 0 ? -rev : rev;
}
console.log(reverseDigits(123)); // Output: 321
console.log(reverseDigits(-456)); // Output: -654
console.log(reverseDigits(120)); // Output: 21


function reverseDigits(x) {
  // Convert number to string, reverse it, and back to number
  let rev = parseInt(Math.abs(x).toString().split('').reverse().join(''));

  // Handle overflow (32-bit signed integer range)
  let limit = 2 ** 31;
  if (rev < -limit || rev > limit) return 0;

  // Put the sign back
  return x < 0 ? -rev : rev;
}

console.log(reverseDigits(123));  // 321
console.log(reverseDigits(-456)); // -654
console.log(reverseDigits(120));  // 21
