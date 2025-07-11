function factorial(n) {
  if (n === 0 || n === 1) return 1; // Base case: 0! = 1 and 1! = 1
  return n * factorial(n - 1);
}

console.log(factorial(5));
