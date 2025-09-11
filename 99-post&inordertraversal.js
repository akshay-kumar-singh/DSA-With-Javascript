var inorderTraversal = function (root) {
  let ans = [];

  function traversal(curr) {
    if (!curr) return;

    traversal(curr.left);
    ans.push(curr.val);
    traversal(curr.right);
  }
  traversal(root);
  return ans;
};

var postorderTraversal = function (root) {
  let ans = [];

  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    traversal(curr.right);
    ans.push(curr.val);
  }
  traversal(root);
  return ans;
};
