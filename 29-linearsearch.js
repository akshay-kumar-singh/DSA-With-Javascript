const arr = [2, 4, 7, 10],
  target = 10;

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if target is found
    }
  }
  return -1;
}

console.log(linearSearch(arr, target)); // Output: 3
