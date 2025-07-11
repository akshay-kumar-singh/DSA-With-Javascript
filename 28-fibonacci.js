function fib(n){
    if (n <= 1) return n; // Base case: fib(0) = 0, fib(1) = 1
    return fib(n - 1) + fib(n - 2); // Recursive case: fib(n) = fib(n-1) + fib(n-2)
}

console.log(fib(5)); // Output: 5