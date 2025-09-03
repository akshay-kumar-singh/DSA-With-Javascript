var trap = function(arr) {
    let n = arr.length;
    let maxL = [];
    maxL[0] = arr[0];

    for(let i = 1; i < arr.length; i++){
        maxL[i] = Math.max(maxL[i-1], arr[i]);
    }

    let maxR = [];
    maxR[arr.length - 1] = arr[arr.length - 1];
    for(let i = n -2; i >= 0; i--){
        maxR[i] = Math.max(maxR[i+1], arr[i]);
    }

    let ans = 0;
    for(let i = 0; i < arr.length; i++){
        let waterTrapped = Math.min(maxL[i],maxR[i]) - arr[i];
        ans = ans + Math.max(waterTrapped,0); //avoid negative values
    }

    return ans;
};