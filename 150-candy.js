var candy = function(arr) {
    let n = arr.length;
    let ltr = Array(n).fill(1);

    // Left to right pass
    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) {
            ltr[i] = ltr[i - 1] + 1;
        }
    }

    // Right to left pass
    let rtl = Array(n).fill(1);
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1]) {
            rtl[i] = rtl[i + 1] + 1;
        }
    }

    // Calculate total candies
    let ans = 0; 
    for (let i = 0; i < n; i++) {
        ans += Math.max(rtl[i], ltr[i]);
    }

    return ans;
};
