// class hero{
//     constructor(name,age){
//         this.name = name;
//         this.age = age
//     }

//     fhero(){
//         return `My name is${this.name} and my age is ${this.age}`;
//     }
//     shero(){
//         return `My name is${this.name} and my age is ${this.age}`;
//     }
// }
// let firsth = new hero("Tony",55);
// let secondh = new hero("Thor",45);
// console.log(firsth.fhero());
// console.log(secondh.shero());



// objects in javascript
const sym = Symbol("Keyy");
const name = {
    names : "Abhsiehk bhatta",
    age : 25,
   [ sym ]: "mykey", // symbol is a datatype and if we want to use symbole in the object then we have to decleare it inside the bracket[]
    "fullname":"hero", //we can't access this object using . so we use [" "] sign
    address : "Delhi",
    hobbies : ["reading","swimming","coding"],
    email : "bhattaabhishek62@gmail.com",
    newFamily : function(){
        console.log(`I have five members in my family and my name is ${this.email} :`)
    } 
        
}

console.log(name["names"]); //first method to get the value of the string and we make the key to string because it is a string to the comiler and see it as string
console.log(name.names); //second method to get the value of the string 
console.log(name[sym]); //looking the value of symbol


//if we want to change the value of object then

name.names = "Bhatta Sarkar";
console.log(name);
// Object.freeze(name); //This is use to make our object secure and it doesnot allowed to change the object
name.names = " Sarkar";
console.log(name.newFamily());







/*
why there occur error when i use arrow function tell me in short form

ChatGPT
In JavaScript, arrow functions do not have their own this context. They inherit this from the surrounding (lexical) context where they were defined. In your case, this inside the arrow function refers to the global object (or undefined in strict mode), not the name object. This is why this.email is undefined when you use an arrow function.

To access the correct this context, use a regular function instead of an arrow function.
*/





