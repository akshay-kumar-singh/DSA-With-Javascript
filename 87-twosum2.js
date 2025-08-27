var twoSum = function (arr, tar) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    sum = arr[i] + arr[j];
    if (sum > tar) {
      j--;
    } else if (sum < tar) {
      i++;
    }
    // Found the target
    else {
      return [i + 1, j + 1];
    }
  }
};
