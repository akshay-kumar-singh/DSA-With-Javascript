function printDescending(n) {
  if (n === 0) return;

  console.log(n);
  printDescending(n - 1);
}

printDescending(5);
