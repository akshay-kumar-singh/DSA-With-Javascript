function numDecodings(s) {
  const dp = {};
  
  const fn = (remS) => {
    if (remS === "") return 1;
    if (remS in dp) return dp[remS];

    const n = remS.length;

    const oneDigit = remS[n - 1];
    const twoDigit = remS.slice(n - 2);

    let ans = 0;

    // check one digit (can't be 0)
    if (oneDigit !== "0") {
      ans += fn(remS.slice(0, n - 1));
    }

    // check two digits (must be 10-26 AND must not start with 0)
    if (n >= 2) {
      const num = Number(twoDigit);
      if (num >= 10 && num <= 26) {
        ans += fn(remS.slice(0, n - 2));
      }
    }

    dp[remS] = ans;
    return ans;
  };

  return fn(s);
}
