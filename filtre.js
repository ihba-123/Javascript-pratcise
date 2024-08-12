// In JavaScript, the filter method creates a new array with all elements that pass the test implemented by the provided function. It's used to filter out elements that don't meet certain criteria.

// The filtre function helps to written new array and all elements that pass the test define by the given function;

// element in filtre
/*
currentValue
index
array
*/

// const newArray = [3,5,7,12,14,15,6,17,98];
// const newArray2 = newArray.filter((value,index,array)=>{return `${value%2==0} ${index} and ${array}`});
// console.log(newArray2);






let obj = {
    name: "Abhishek Bhatta",
    roll: 12,
    age: 20
}

let name = Object.keys(obj).filter(key => key === 'name').map(key => obj[key])[0];
console.log(name);














// join('') is used to convert to string
// anonymous function means there is no name of the function {function(){}}here is no name