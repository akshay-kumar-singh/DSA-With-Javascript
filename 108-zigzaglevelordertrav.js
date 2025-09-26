var zigzagLevelOrder = function(root) {
    if(!root) return [];

    let ans = [];
    let q = [root];
    let level = 0;

    while(q.length){
        let levelArr = [];
        let levelSize = q.length;

        for(let i = 0; i < levelSize; i++){
            let curr = q.shift();
            if(level % 2 === 0){
                levelArr.push(curr.val);
            } else {
                levelArr.unshift(curr.val);
            }
            if(curr.left) q.push(curr.left);
            if(curr.right) q.push(curr.right);
        }
        ans.push(levelArr);
        level++;
    }
    return ans;
    
};

//Recursive Approach
var zigzagLevelOrder = function(root) {
    let ans = [];

    function dfs(node, level) {
        if (!node) return;

        if (!ans[level]) ans[level] = [];

        if (level % 2 === 0) {
            // even level → left to right
            ans[level].push(node.val);
        } else {
            // odd level → right to left
            ans[level].unshift(node.val);
        }

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    dfs(root, 0);
    return ans;
};
