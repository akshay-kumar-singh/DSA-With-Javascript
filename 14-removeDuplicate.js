function removeDuplicate(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x++;
      arr[x] = arr[i];
    }
  }
  return x + 1;
}

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let result = removeDuplicate(arr);
console.log(result);  //5
console.log(arr.slice(0,result));  //[ 0, 1, 2, 3, 4 ]