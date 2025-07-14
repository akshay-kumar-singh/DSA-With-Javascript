// Sample array to sort
let arr = [4, 5, 1, 3, 9];

// Selection Sort Algorithm
function selectionSort(arr) {
  let n = arr.length;

  // Outer loop to iterate over each element (except the last one)
  for (let i = 0; i < n - 1; i++) {
    let min = i; // Assume the current index has the smallest element

    // Inner loop to find the index of the minimum element in the unsorted part
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j; // Update min if a smaller element is found
      }
    }

    // Swap the found minimum element with the current element at index i
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr; // Return the sorted array
}

// Call the function and print the result
console.log(selectionSort(arr)); // Output: [1, 3, 4, 5, 9]
