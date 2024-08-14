// const arr = [12,14,15,16];
// const result = arr.map((x)=> x*2);
// console.log(result);    

// map helps to create a new array without chinging the original array in js

// const name = [
//     { first: 'John', last: 'Doe' },
//     { first: 'Jane', last: 'Doe' },
//     { first: 'god', last: 'war' },
// ];

// const res = name.map(names => names.first);
// console.log(res);



// Given an array of integers, write a function that returns a new array where each element is the square of the original element.



let numbers = [1, 2, 3, 4, 5];
// Expected output: [1, 4, 9, 16, 25]

const number = numbers.map((num)=>num*num);
console.log(number);