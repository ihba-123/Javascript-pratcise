// Spread Operator (...)

// The spread operator expands an array or object into its individual elements. It is commonly used to create copies of arrays or objects, merge arrays, or pass array elements as function arguments.

// const newArray = [12,141,15,16,17];
// const newArray1 = [...newArray];
// console.log(newArray1);


// Spreading Elements as Function Arguments:

// function name(a,b,c){
//     return a+b+c;
// }
// const number = [1,2,3];
// console.log(name(...number)); // Output: 6 we have assign spread operator in name using ... in number





// const hero1 = ["Thor","Iron Man"];
// const hero2 = ["hulk","IronMan"];
// const hero4 = [...hero1,...hero2];
// console.log(hero4);







/* 
Rest Operator (...)

The rest operator collects multiple elements and condenses them into a single array or object. It is used in function parameter lists and destructuring assignments.The rest operator is used to collect all remaining elements into an array or to gather function arguments into an array. It's often used in function parameters to handle an indefinite number of arguments.


*/


// using callbackfunction
function name(callback , ...arg){ // rest operator must be in always last position in the parameter
    return callback(...arg);
}

function anotherFun (...arg){
     names = arg.reduce((acc,curr) => acc+curr,0);  //reduce method helps to make an array into a single elements   
    return names;
}
console.log(name(anotherFun, 12,14,14));




// array destructuring using rest operator

// const namesss = [1,2,4,5,4,3,6]
// const[f,r,s,...argi] = namesss
// console.log(f); 
// console.log(r);
// console.log(s);
// console.log(argi);



const arr = [12,14,15,16,17,18];
console.log(...arr);



