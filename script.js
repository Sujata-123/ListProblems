//list problems
// Write a function that returns the largest element in a list.
let array1 = [5, 12, 8, 130, 500];
let max = array1[0]; //assuming as max is at index zero

for (let i = 1; i < array1.length; i++) {
  if (max < array1[i]) {
    max = array1[i];
  }
}
document.write(`Max element is ${max}`);

// Write function that reverses a list, preferably in place.

let no = 543289;
let rem;
let rev = 0;
while (no != 0) {
  rem = parseInt(no % 10);
  rev = parseInt(rev * 10 + rem);
  no = parseInt(no / 10);
}
document.write(rev);
//Write a function that checks whether an element occurs in a list.
let array = [12, 5, 8, 3, 17];

let search = 8; //Element to be searched
let flag = 0;

for (var i = 0; i < array.length; i++) {
  if (search == array[i]) flag = 1;
}
//flag == 1 means searched value found
if (flag == 1) document.write('searched element found');
//searched value not found
else document.write('searched element not found');
