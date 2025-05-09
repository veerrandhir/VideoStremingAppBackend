// hello this is your time to take risk
console.log("Social media ");
const name = ["Veer randhir"];
console.log(name);

let arr = [
  10, 21, 546, 89, 948, 4564, 56, 46565, 46, 4654, 8489, 464, 6123165, 412646,
];

// let arr = [10, 5, 1, 8, 13, 7];
let n = arr.length;
// let key = arr[1];
// console.log(key);

function sortArr() {
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    // console.log(key, "Value of i"); // to check the value is getting parse or

    let j = i - 1;
    // console.log("Vlue of j ", arr[j]);

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  console.log(arr);
}
// sortArr();

// Recurtion

function call() {
  let name = "veer in call fn";
  console.log("hello I am calling enjoy()");
  enjoy();
  console.log("call 2");
  console.log(name);
}

function enjoy() {
  console.log("Hello I am enjoy and now calling happy()");
  happy();
  console.log("enjoy 2");
}

function happy() {
  console.log("Hellow i am happy singh and calling joy()");
  joy();
  console.log("happy 2");
}

function joy() {
  console.log("hey I am joy and undersand recurtion ");
  console.log("joy 2");
}
// joy(); // this will only call jooy function
// lets call recurtion and you will see the magic
// we will call only call() and it will log every fn
// call();

// main recursion operation
function recur(n) {
  if (n == 0) return;
  console.log(n);
  recur(--n); // here if we use post decreament operator it will first use the value then decrease it's value but before that the fn pass and has been called itself so it will result in ininite loop .
  // so we use eithe --n ; n-1 ; (pre increament or decreament operator)
}
// recur(5);// called fn
