function secondLargestNumber(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
    }
    return secondLargest;
}

let arr = [2, -6, 4, 8,10, 1, -9];
const result = secondLargestNumber(arr);
console.log(result);