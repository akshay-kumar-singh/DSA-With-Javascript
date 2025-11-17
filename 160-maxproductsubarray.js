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