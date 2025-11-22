var change = function(amount, coins) {
    let n = coins.length;
    let dp = Array.from({length: amount + 1}, () => Array(n).fill(-1));

    let fn = (remS, start) => {
        if(remS === 0) return 1;
        if(remS < 0) return 0;
        
        if(dp[remS][start] != -1) return dp[remS][start];

        let combinations = 0;
        for(let i=start; i < n; i++){
            combinations += fn(remS - coins[i], i);
        }
        return dp[remS][start] = combinations;
    }
    return fn(amount, 0);
};