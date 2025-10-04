var searchBST = function(root, val) {
    let ans = null;

    let traversal = (curr) => {
        if(curr.val === val){
            ans = curr;
        } else {
            if(curr.val < val){
                curr.right && traversal(curr.right);
            } else {
                curr.left && traversal(curr.left);
            }
        }
    }
    traversal(root);
    return ans;
};