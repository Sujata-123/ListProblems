//list problems
// 1. Write a function that returns the largest element in a list.
let num = prompt('Enter no of element');
let array1 = [];
for (let i = 0; i < num; i++) {
  array1[i] = parseInt(prompt(`Enter element ${i + 1}`));
}
const largestElem = () => {
  let max = array1[0]; //assuming as max is at index zero

  for (let i = 1; i < array1.length; i++) {
    if (max < array1[i]) {
      max = array1[i];
    }
  }
  return max;
};
document.write(`Max element is ${largestElem(array1)}`);

//2. Write function that reverses a list, preferably in place.

let num = prompt('Enter no of element');
let array1 = [];
for (let i = 0; i < num; i++) {
  array1[i] = parseInt(prompt(`Enter element ${i + 1}`));
}
const reverse1 = () => {
  //document.write(parseInt(5/2));
  document.write('Inside Function');
  for (let i = 0; i < parseInt(num / 2); i++) {
    //document.write("Inside For inside Function");
    let temp = array1[i];
    array1[i] = array1[num - i - 1];
    array1[num - i - 1] = temp;
    //document.write(array1);
  }

  return array1;
};
document.write(`Reverse of list ${reverse1(array1)}`);

//3 Write a function that checks whether an element occurs in a list.
let num = prompt('Enter no of element');

let array1 = [];
for (let i = 0; i < num; i++) {
  array1[i] = parseInt(prompt(`Enter element ${i + 1}`));
}
let SearchElem = prompt('Enter search element');
const elInList = () => {
  //document.write('Inside function');
  for (let i = 0; i < num; i++) {
    //document.write('Inside for loop');
    if (SearchElem == array1[i]) {
      return true;
    }
  }

  return false;
};
document.write(elInList(array1, SearchElem));

//we can use array built in method for finding any values
// array.includes it will return either true of false. Based on condition.
// let array = [12, 5, 8, 3, 17];
// document.write(array.includes(5));

//4. Write a function that returns the elements on odd positions in a list.
let num = prompt('Enter no of element');
let lst1 = [];
for (let i = 0; i < num; i++) {
  lst1[i] = parseInt(prompt(`Enter element ${i + 1}`));
}
const elementsOnOddPosition = () => {
  let temp = [];
  for (let i = 0; i < num; i++) {
    if (i % 2 != 0) {
      temp.push(lst1[i]);
    }
  }
  return temp;
};
document.write(elementsOnOddPosition(lst1));
//5.Write a function that tests whether a string is a palindrome.

const value = prompt('Enter a string or number: ');
const PalindromFind = () => {
  const len = value.length;
  for (let i = 0; i < len / 2; i++) {
    if (value[i] !== value[len - 1 - i]) {
      document.write('It is not a palindrome');
      return;
    }
  }
  document.write('It is a palindrome');
};
PalindromFind(value);

//Write a function that computes the running total of a list.
const sum = arr => {
  var s = 0;
  for (let i = 0; i < arr.length; i++) {
    s = s + arr[i];
  }
  return s;
};
var returnedVal = sum([1, 2, 3, 4, 5]);
document.write(returnedVal);

//9. Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]
let num = prompt('Enter number of elements in first list');
let array1 = [];
for (let i = 0; i < num; i++) {
  array1[i] = parseInt(prompt(`Enter element ${i + 1}`));
}
let num1 = prompt('Enter number of elements in second list');
let array2 = [];
for (let j = 0; j < num; j++) {
  array2[j] = parseInt(prompt(`Enter element ${j + 1}`));
}

const Concatenates = () => {
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
  return array1;
};
document.write(Concatenates(array1, array2));
