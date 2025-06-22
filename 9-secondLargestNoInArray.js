function secondLargestNumber(arr) {
  if (arr.length < 2) {
    return "Array should have atleast 2 numbers";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let arr = [2, -6, 4, 8, 10, 1, -9];
const result = secondLargestNumber(arr);
console.log(result);
