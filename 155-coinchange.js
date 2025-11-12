//top down - recursive
var coinChange = function (coins, amount) {
  let n = coins.length;
  let dp = {};
  let fn = (remAmount) => {
    if (remAmount === 0) return 0;
    if (remAmount < 0) return -1;

    if (remAmount in dp) {
      return dp[remAmount];
    }

    let minCoins = Infinity;
    for (let i = 0; i < n; i++) {
      let res = fn(remAmount - coins[i]);
      if (res != -1) {
        minCoins = Math.min(minCoins, 1 + res);
      }
    }
    dp[remAmount] = minCoins === Infinity ? -1 : minCoins;
    return dp[remAmount];
  };
  return fn(amount);
};

//bottom up - iterative
var coinChange = function (coins, amount) {
  let n = coins.length;
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let rem = 1; rem <= amount; rem++) {
    for (let j = 0; j < n; j++) {
      let remainingAmount = rem - coins[j];
      if (remainingAmount >= 0) {
        dp[rem] = Math.min(dp[rem], 1 + dp[remainingAmount]);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
