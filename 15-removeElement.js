function removeElement(arr, val) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[x] = arr[i];
      x++;
    }
  }
  return x;
}

let arr = [0, 1, 2, 2, 3, 0, 4, 2];
let result = removeElement(arr, 2);
console.log(result); //5
console.log(arr.slice(0, result)); //[ 0, 1, 3, 0, 4 ]
