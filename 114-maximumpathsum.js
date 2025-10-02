var maxPathSum = function(root) {
    let maxSumPath = -Infinity;
    let traversal = (curr) => {
        if(!curr) return 0;
        let maxLeft = Math.max(0, traversal(curr.left));
        let maxRight = Math.max(0, traversal(curr.right));
        currMax = curr.val + maxLeft + maxRight;
        maxSumPath = Math.max(currMax, maxSumPath);

        return curr.val + Math.max(maxLeft, maxRight);
    }
    traversal(root);
    return maxSumPath;
};