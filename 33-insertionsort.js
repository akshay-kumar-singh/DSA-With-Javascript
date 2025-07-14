// Sample array to be sorted
let arr = [4, 5, 1, 3, 9];

// Insertion Sort Algorithm
function insertionSort(arr) {
  let n = arr.length;

  // Start from the second element (i = 1), because the first element is already "sorted"
  for (let i = 1; i < n; i++) {
    let curr = arr[i];       // Current element to be placed in the correct position
    let prev = i - 1;        // Index of the previous element

    // Shift elements of the sorted part that are greater than curr to the right
    while (prev >= 0 && arr[prev] > curr) {
      arr[prev + 1] = arr[prev];  // Move element one position to the right
      prev--;                     // Move to the previous element
    }

    // Place the current element into its correct position
    arr[prev + 1] = curr;
  }

  // Return the sorted array
  return arr;
}

// Call the function and store the result
let result = insertionSort(arr);

// Print the sorted array
console.log("Sorted array", result);
