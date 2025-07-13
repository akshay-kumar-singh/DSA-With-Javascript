let arr = [4, 5, 1, 3, 9];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    // Last i elements are already sorted
    // So we can skip them
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break; // If no two elements were swapped, the array is sorted
    }
  }
  return arr;
}

let result = bubbleSort(arr);
console.log(result); // Output: [1, 3, 4, 5,
