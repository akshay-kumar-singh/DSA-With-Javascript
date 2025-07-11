function sum(n) {
  let isOdd = arr[n] % 2 !== 0;        // Check if current element is odd
  if (n === 0)                         // Base case: first element
    return isOdd ? arr[0] : 0;        // If it's odd, return it; else return 0

  return (isOdd ? arr[n] : 0) + sum(n - 1);  // Add current element if odd + rest
}
let arr = [5, 2, 6, 1, 3];

console.log(sum(arr.length - 1)); 