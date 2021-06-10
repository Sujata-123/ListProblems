//list problems
// Write a function that returns the largest element in a list.
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

// Write function that reverses a list, preferably in place.

let num = prompt('Enter no of element');
let array1 = [];
for (let i = 0; i < num; i++) {
  array1[i] = parseInt(prompt(`Enter element ${i + 1}`));
}
const reverse1 = () => {
//document.write(parseInt(5/2));
document.write("Inside Function");
  for (let i = 0; i < parseInt(num/2); i++) {
  //document.write("Inside For inside Function");
   let temp = array1[i];
    array1[i] = array1[num-i-1];
    array1[num-i-1] = temp;
    //document.write(array1);
    }
  
  return array1;
  }
document.write(`Reverse of list ${reverse1(array1)}`);



//Write a function that checks whether an element occurs in a list.
let num = prompt('Enter no of element');

let array1 = [];
for (let i = 0; i < num; i++) 
{
  array1[i] = parseInt(prompt(`Enter element ${i + 1}`));
  
}
let SearchElem=prompt('Enter search element');
const elInList=()=>
{
//document.write('Inside function');
for (let i = 0; i < num; i++) {
//document.write('Inside for loop');
  if (SearchElem == array1[i]) {
    return true;
    
  }
}

return false;
};
document.write(elInList(array1,SearchElem));


//we can use array built in method for finding any values
// array.includes it will return either true of false. Based on condition.
// let array = [12, 5, 8, 3, 17];
// document.write(array.includes(5));
