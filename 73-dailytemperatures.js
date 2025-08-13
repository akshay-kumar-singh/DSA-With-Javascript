/**
 * Daily Temperatures Problem
 * Given: an array of daily temperatures.
 * Output: For each day, how many days until a warmer temperature.
 * If no warmer day exists, put 0.
 * 
 * Example:
 * Input:  [73, 74, 75, 71, 69, 72, 76, 73]
 * Output: [1, 1, 4, 2, 1, 1, 0, 0]
 */

var dailyTemperatures = function(arr) {
    let stack = []; // Will store indices of temperatures in decreasing order
    let n = arr.length;
    let ans = Array(n).fill(0); // Result array filled with 0s initially

    // Push the index of the last element (since no days after it)
    stack.push(n - 1);

    // Loop backwards from second-last element to the first
    for (let i = n - 2; i >= 0; i--) {

        // While stack is not empty and current temp is greater/equal
        // to temp at stack's top index -> pop (no warmer future day there)
        while (stack.length) {
            let top = stack[stack.length - 1]; // index of top element in stack

            if (arr[i] >= arr[top]) {
                // Current day's temp >= future day's temp
                // That future day can't be the "next warmer" for today
                stack.pop();
            } else {
                // Found a warmer day in the future
                ans[i] = top - i; // difference in days
                break;
            }
        }

        // Push current day's index to stack for future comparisons
        stack.push(i);
    }

    return ans;
};


// Example run
let temps = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temps));
// Output: [1, 1, 4, 2, 1, 1, 0, 0]
