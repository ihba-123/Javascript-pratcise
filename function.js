// let validate = true;
// validate ? console.log("login"):console.log("logout");
// let day = "Saturday";
// switch(day){
//     case "Sunday":
//         console.log("This is sunday : ");
//         break;
//     case "Monday":
//         console.log("Today is Monday");
//         break;
//     case "Friday":
//         console.log("Today is Friday");
//         break;
//     case "Saturday":
//         console.log(`Today is ${day}`);
//         default:
//             console.log("The code runs successfully : ");
// }


//function in javascript;

// function name(a,b){
//     return a+b;
// }
// let names = name(2,5);
// console.log(names);

// We have use rest parameter in the function because it helps to insert the indefinite value using array
// function name(...myname){
//     return myname.reduce((total,num)=> num += total,0);
// }
// console.log(name(2,5,6,7,8,9,10,11));


// function parameter(name,role){
//     switch(role){
//         case "admin":
//         return `${name} is the admin whose role is to be a data analysis`;
//         break;//This is not necessary because there is return value so it is not necessary
//         case "User":
//         return `${name} is the user whose role is to use and test the software`
//         break;
//         case "Others":
//         return `${name} is the others whose role is to in the trial phase`
//         break;
//         default:
//             return `There is no ${name} or this person is not available in our database `
//     }
// }
// let roles = parameter("Ram");
// console.log(roles);


// use of parseInt

// use of context (the under code is not running because the window object or global object treat it as variable because we have make the variable below to run the function if we dont decleare the variable then the code run successfully

// addBill("10");    

// let addBill = function(a){
//     let amount  = parseInt(a);
//     console.log(amount + 5);
// }


// let name = "Abhishek Bhatta";
// console.log("The line no 68",name);

// function first(){
//     let name = "don";
//     console.log("My name is 72",name);
// }
// first();

// function firsts(){
//     console.log("My name is 76",name);
// }
// firsts();

// let arr = [12,13,15,151,52,4,5,6,7,78];
// for(let i =0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// function person(name,age){
//     this.name = name,
//     this.age = age;
// }
// person.prototype.greet = function(){
// console.log(`My name is ${this.name} and my age is ${this.age}`);
// }
// let abhishek = new person("Abhishek Bhatta",25);
// abhishek.greet();

// let Person = {
//     name: "Abhishek Bhatta",
//     age: 25,
//     details : function(){
//         return this.name + this.age;
//     }
// }

// function hero(para){
//     if(typeof Person[para] === "function"){
//         console.log(Person[para]());
//     }
//     else{
//         console.log(Person[para]);
//     }
// }
// hero("name");
// hero("age");
// hero("details");


// var name = new Array("","Don","mon","tue");
// console.log(Array.from("good"));

// function callback


