//list problems
// Write a function that returns the largest element in a list.
// let array1 = [5, 12, 8, 130, 500];
// let max = array1[0]; assuming as max is at index zero

// for (let i = 1; i < array1.length; i++) {
//   if (max < array1[i]) {
//     max = array1[i];
//   }
// }
// document.write(`Max element is ${max}`);

// Write function that reverses a list, preferably in place.
let no = 543289;
let rem;
let rev = 0;
while (no != 0) {
  rem = no % 10;
  rev = rev * 10 + rem;
  no = no / 10;
}
document.write(rev);