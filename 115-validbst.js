var isValidBST = function(curr, lo=null, hi=null) {
    if(!curr) return true;

    if((lo != null && curr.val <= lo) || 
        (hi != null && curr.val >= hi))
        return false;

    let isLeftBST = isValidBST(curr.left, lo, curr.val);
    let isRightBST = isValidBST(curr.right, curr.val, hi);

    return isLeftBST && isRightBST;

};