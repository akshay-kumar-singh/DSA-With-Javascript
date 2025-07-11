function powOfTwo(n){
    if (n == 1) return true; // Base case: 2^0 = 1
    if ((n < 1) || n % 2 !== 0) return false; // If n is less than 1 or odd, it's not a power of 2
    return powOfTwo(n / 2); // Divide n by 2 and check recursively
}

console.log(powOfTwo(16)); // true
console.log(powOfTwo(18)); // false