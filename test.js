// recursion
// function printN(n) {
//   if (n == 555) {
//     console.log(n);
//     return;
//   } else {
//     console.log(n);
//     printN(n + 1);
//   }
// }
// printN(1);

// problem write n! factorial
function fact(n) {
  if (n < 1) {
    // console.log(n);
    return 1;
  } else {
    // console.log(n);
    fact(n - 1) * n;
  }
}
fact(5);
