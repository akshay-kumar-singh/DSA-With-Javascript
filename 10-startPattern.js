// Pattern 1 – Print n x n Star Square

let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "*";
  }
  console.log(row);
}

// Output

// ****
// ****
// ****
// ****

// Pattern 2 - Right-Angled Star Triangle Pattern

let o = 4;
for (let i = 0; i < o; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}

// Output

// *
// **
// ***
// ****

// Pattern 3 - Print a Right-Angled Number Triangle

let p = 4;
for (let i = 0; i < p; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

// Output

// 1
// 12
// 123
// 1234

// Pattern 4 - Print a Right-Angled Triangle of Repeated Numbers

let q = 4;
for (let i = 0; i < q; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}

//  Output

// 1
// 22
// 333
// 4444

//Pattern 5 - Print a Reverse Right-Angled Triangle of Increasing Numbers

let r = 4;
for (let i = 0; i < r; i++) {
  let row = "";
  for (let j = 0; j < r - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

// Output

// 1234
// 123
// 12
// 1

//Pattern 6 - Print a Right-Aligned Right-Angled Triangle of Stars

let s = 4;
for (let i = 0; i < s; i++) {
  let row = "";
  for (let j = 0; j < s - (i + 1); j++) {
    row = row + "_";
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}

// Output

//    *
//   **
//  ***
// ****

//Pattern 7 - Print a Right-Angled Triangle of Alternating 1s and 0s

let t = 4;
for (let i = 0; i < t; i++) {
  let row = "";
  let toggle = 1;
  for (j = 0; j < i + 1; j++) {
    row = row + toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}

// Output

// 1
// 10
// 101
// 1010

//Pattern 8 - Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)

let u = 4;
let toggle = 1;

for (let i = 0; i < u; i++) {
  let row = "";
  for (j = 0; j < i + 1; j++) {
    row = row + toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}

// Output 

// 1
// 01
// 010
// 1010