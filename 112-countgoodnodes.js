var goodNodes = function(root) {
    let ans = 0;
    let traversal = (curr, maxSeenSoFar) =>{
        if(curr.val >= maxSeenSoFar){
            ++ans;
        }
        let currMax = Math.max(maxSeenSoFar, curr.val);
        curr.left && traversal(curr.left, currMax);
        curr.right && traversal(curr.right, currMax);
    }
    traversal(root, -Infinity);
    return ans;
};