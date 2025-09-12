var preorderTraversal = function (root) {
  let ans = [];

  function traversal(curr) {
    if (!curr) return;
    ans.push(curr.val);
    traversal(curr.left);
    traversal(curr.right);
  }
  traversal(root);
  return ans;
};


//Iterative Approach
var preorderTraversal = function(root) {
    if (!root) return [];
    let ans = [];
    let stack = [root];

    while (stack.length) {
        let curr = stack.pop();
        ans.push(curr.val);

        if (curr.right) stack.push(curr.right);
        if (curr.left) stack.push(curr.left);
    }

    return ans;
};