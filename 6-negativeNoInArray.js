function countNegativeNumbers(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      counter = counter + 1;
    }
  }
  return counter;
}

let arr = [2, -6, 4, 8, 1, -9];
let result = countNegativeNumbers(arr);
console.log(result);
