//Recursive Inorder Traversal

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

//Iterative Approach

var inorderTraversal = function (root) {
  let ans = [];
  let stack = [];
  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right;
  }
  return ans;
};

//Recursive Postorder Traversal

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

//Iterative Approach using 2 stack

var postorderTraversal = function (root) {
  if (!root) return [];
  let s1 = [root];
  let s2 = [];

  while (s1.length) {
    let curr = s1.pop();
    s2.push(curr);
    curr.left && s1.push(curr.left);
    curr.right && s1.push(curr.right);
  }

  let ans = [];
  while (s2.length) {
    ans.push(s2.pop().val);
  }
  return ans;
};

//Iterative Approach using 1 stack

var postorderTraversal = function (root) {
  let stack = [];
  let curr = root;
  let ans = [];
  let lastVisited = null;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    let peek = stack[stack.length - 1];
    if (peek.right && peek.right != lastVisited) {
      curr = peek.right;
    } else {
      ans.push(peek.val);
      lastVisited = stack.pop();
    }
  }
  return ans;
};
