// Array problems using array built in method

// Write function that reverses a list, preferably in place.
const array1 = [1, 2, 3, 4];
const reversed = array1.reverse();
document.write('reversed:', reversed);

// Write a function that returns the elements on odd positions in a list.
let num = [1, 2, 3, 4, 75, 9, 1];
let odd = num.filter((temp, i) => i % 2 != 0);
document.write(odd);

// Write a function that checks whether an element occurs in a list.
//let arr=[1,2,3,4,5,6]
//document.write(arr.includes(5))
//let arr=[1,2,3,4,5,6]
//document.write(arr.indexOf(5))
let arr = [1, 2, 3, 4, 5, 6];
document.write(arr.filter(ele => ele === 5));

// Write a function that concatenates two lists.
let arr1 = [1, 2, 3, 4];
let arr2 = [101, 2, 1, 10];
let arr1_arr2 = arr1.concat(arr2);
document.write(arr1_arr2);



// Write a function that returns the largest element in a list.
a = [5, 7, 2, 11, 4, 3];
max = Math.max(...a);
document.write(max);

// Write a function that combines two lists by alternatingly taking elements
const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];
const newList = () => {
  var list = [];
  for (let i = 0; i < arr1.length; ++i) {
    list.push(arr1[i]);
    list.push(arr2[i]);
  }
  return list;
};
document.write(newList(arr1, arr2));

// Write a function that tests whether a string is a palindrome.
const Palindrome = () => {
  // convert string to an array
  const arrayValues = string.split('');

  // reverse the array values
  const reversed = arrayValues.reverse();

  // convert array to string
  const reverseString = reversed.join('');

  if (string == reverseString) {
    document.write('It is a palindrome');
  } else {
    document.write('It is not a palindrome');
  }
};

//take input
const string = prompt('Enter a string: ');

Palindrome(string);
// Write a function that merges two sorted lists into a new sorted list.
const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];
//in this solution why I am writing a-b , because I am arranging this merged list in asscending order
//if I am writing it b-a that means I am arranging it in descending order.
document.write(arr1.concat(arr2).sort((a, b) => a - b));

// Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2]

const num = prompt('Enter no');
let res = num.split('');
let result = res.map(a => parseInt(a));
document.write(result);

//Write a function that computes the list of the first 100 Fibonacci numbers. The first two Fibonacci numbers are 1 and 1. The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number.
let Fibonac = (fib)=> 
{
  if (fib===1) 
  {
    return [0, 1];
  } 
  else 
  {
    let res = Fibonac(fib - 1);
    res.push(res[res.length - 1] + res[res.length - 2]);
    return res;
  }
};

 document.write(Fibonac(100));

 //Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the list. How many swap or move operations do you need?
 // Rotate array by k steps from begining
let arr = [1,2,3,4,5,6]
let k = arr.length - 2 // Rotating by two positions from left

for(let i=0;i<k;i++)
{
   arr.unshift(arr.pop())
}
document.write(arr)

// Second method using array.shift() method
let arr = [1,2,3,4,5,6]
let k =  2 // Rotating by two positions from left

for(let i=0;i<k;i++)
{
   arr.push(arr.shift())
}
document.write(arr)