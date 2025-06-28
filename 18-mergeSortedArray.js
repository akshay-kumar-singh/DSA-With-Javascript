function mergeSortedArray(nums1, m, nums2, n) {
    let p1 = m - 1;          // pointer at end of valid part in nums1
    let p2 = n - 1;          // pointer at end of nums2

    // Start from end of nums1 (m + n - 1)
    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) break;   // if nums2 is exhausted, stop
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1--]; // move larger value to end
        } else {
            nums1[i] = nums2[p2--]; // copy from nums2
        }
    }
}

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;

mergeSortedArray(nums1, m, nums2, n); 
console.log(nums1); // [1, 2, 2, 3, 5, 6]
