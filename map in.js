// const arr = [12,14,15,16];
// const result = arr.map((x)=> x*2);
// console.log(result);    

// map helps to create a new array without chinging the original array in js

const name = [
    { first: 'John', last: 'Doe' },
    { first: 'Jane', last: 'Doe' },
    { first: 'god', last: 'war' },
];

const res = name.map(names => names.first);
console.log(res);