//Top - Down Approach
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  let ans = false;

  let traverse = (curr, currSum) => {
    let newSum = currSum + curr.val;
    if (!curr.left && !curr.right) {
      if (newSum === targetSum) {
        ans = ans || true;
      }
    }

    curr.left && traverse(curr.left, newSum);
    curr.right && traverse(curr.right, newSum);
  };

  traverse(root, 0);
  return ans;
};

//Bottom - Up Approach

var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  let leftSubTreeHasPathSum = hasPathSum(root.left, targetSum - root.val);
  let rightSubTreeHasPathSum = hasPathSum(root.right, targetSum - root.val);

  return leftSubTreeHasPathSum || rightSubTreeHasPathSum;
};
