var maxProduct = function(arr) {
  if (!arr || arr.length === 0) return 0; // defensive
  let maxProdSoFar = arr[0];
  let minProdSoFar = arr[0];
  let totalMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    const prevMax = maxProdSoFar;

    maxProdSoFar = Math.max(current, prevMax * current, minProdSoFar * current);
    minProdSoFar = Math.min(current, prevMax * current, minProdSoFar * current);

    totalMax = Math.max(totalMax, maxProdSoFar);
  }

  return totalMax;
};

//Approach 2

var maxProduct = function(arr) {
    let n = arr.length; 
    let ltrProd = 1, rtlProd = 1;
    let finalMax = -Infinity;

    for (let i = 0; i < n; i++) {
        ltrProd = ltrProd * arr[i];
        rtlProd = rtlProd * arr[n - i - 1];

        finalMax = Math.max(finalMax, ltrProd, rtlProd);

        if (ltrProd === 0) ltrProd = 1;
        if (rtlProd === 0) rtlProd = 1;
    }

    return finalMax;
};