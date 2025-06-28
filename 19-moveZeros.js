function moveZeros(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
}

let nums = [0, 1, 0, 3, 12];
moveZeros(nums); // modifies nums in-place
console.log(nums); // ➤ Output: [1, 3, 12, 0, 0]
