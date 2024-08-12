
// function callback refers to the process of calling function by another function 

// function hero(name1,name2,superV){
//     return superV(name1,name2);
//    }
   
//    const hero2 = (n,r) => {
//    return `The name of my favourit hero is ${n} and mostly my dream hero is ${r}`
//    }
   
//    const name =hero("IronMan","Thor",hero2);
//    console.log(name); 


// function dog(a,b,newFuction){
//     return newFuction(a,b);
// }

// const hero = (r,s) => {
//     return r*s;
// }

// const newFun = dog(12,14,hero);
// console.log(newFun);


// for asynchronous function we use settime

// console.log("I want to be the best developer in the world :");
// console.log("I want to be the best developer in the world :");
// setTimeout((i = 13) => {console.log(`The name of the dog is hello and its age is ${i}`)},3000);
// console.log("Hero is me and i am only one");



function addition(a,b,newFunc){
    const hero = a/b;
    return newFunc(hero);
}

function another(hero){
    console.log(`The result must be accurate and will be ${hero}`);
}

addition(12,2,another);




// function name(num1,num2,func){
//   const names = num1 + num2;
//   return func(names);
// }

// const hero = (don) => {
//   console.log(`The sum of two number is ${don}`);
// }

// name(2,3,hero);

