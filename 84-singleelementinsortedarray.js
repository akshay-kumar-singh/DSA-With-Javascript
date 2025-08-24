var singleNonDuplicate = function(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);

        //pair exist on left
        if (arr[m] === arr[m - 1]) {
            let leftCount = m - 1 - l;
            if (leftCount % 2 === 1) {
                r = m - 2;
            } else {
                l = m + 1;
            }
        }
        //pair exist on right 
        else if (arr[m] === arr[m + 1]) {
            let leftCount = m - l;
            if (leftCount % 2 === 1) {
                r = m - 1;
            } else {
                l = m + 2;
            }
        } 
        //single element
        else {
            return arr[m];
        }
    }
    return arr[l];
};