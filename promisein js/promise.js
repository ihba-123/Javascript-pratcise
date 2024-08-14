/*
A Promise in JavaScript is like a promise in real life—it’s something that is expected to happen in the future. In programming, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

The .then() method in a JavaScript Promise is used to specify what should happen when the Promise is fulfilled (i.e., when the asynchronous operation is completed successfully).


async and await in JavaScript are tools that help you write easier and clearer code when dealing with tasks that take time, like fetching data from the internet. 




How Do async and await Work?

async Function:

When you add async before a function, it tells JavaScript that the function will be doing something that takes time, and it will return a Promise.
await Keyword:

Inside an async function, you use await before a task that returns a Promise (like fetching data). await makes the function pause until the task is done, then it moves to the next line.



*/


// promise 1

// let promise = new Promise((resolve,reject)=>{
//     let a1 = true;
//     if(a1){
//         resolve("Code is successuful");
//     }
//     else{
//         reject("Code is not successuful");
//     }
// });
// console.log(promise);


// promise2

// let promise = new Promise((resolve,reject)=>{
//     const person = true;
//     if(person == true){
//         console.log("Yes i am a person1");
//     }
//     else{
//         console.log("I am not that person");
//     }
//     resolve();
// });

// promise.then(()=>{
//     console.log("Yes i am a person2");
// })

// promise 3
// we are not using variable like above. We are using then directly

// new Promise((resolve,reject)=>{
//     const person = true;
//     if(person == true){
//         console.log("Yes i am a person1");
//     }
//     else{
//         console.log("I am not that person");
//     }
//     resolve();
// }).then(()=>{
//     console.log("Yes i am a person2");
// })



// promise three

// const detail = new Promise((resolve,reject)=>{
//     let obj = true;
//     if(obj){
//         console.log("Hello its me abhihsek");
//     }
//     else{
//         console.log("I am not that person");
//     }
//     resolve({name : "Abhishek Bhatta"});
// });

// detail.then((data)=>{
//     console.log(data);
// });




// promise fourth(chaining means if we want to access only the one object from the resolve);

/*
const anotherPart = new Promise((resolve,reject)=>{
setTimeout(()=>{
    let error = false;
    if(!error){
        resolve({name:"Abhishek",age:12});
    }
    else{
        reject("Error : There occur some error while fetching data from server");
    }
},1000);
});

anotherPart.then((user)=>{//from here start chaning which is more used in database
    console.log(user);
    return user.name;
}).then((username)=>console.log(username))
.catch((error)=>{console.log(error)}) 
.finally(()=>{console.log("Hello finally i am running")})
*/




// promise five using asyn await
// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let newError = false;
//         if(!newError){
//             resolve({userName:"Abhishek Bhatta"});
//         }
//         else{
//             reject("Error : 202 error !");
//         }
//     },1000);
// })

//      async function newFunct(){
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// newFunct();

// main problem of asyn and await is that it cannot handle the error directly





// another function
//It is in try catch format 
/*
async function newPromises (){
    try{
        const anotherPromises = await fetch('https://jsonplaceholder.typicode.com/users');
        const newname = await anotherPromises.json();
        console.log(newname);
    }
    catch(error){
        console.log(error);
    }
}
newPromises();
*/


// we are using then and catch which is easy than asyn and await method

fetch('https://jsonplaceholder.typicode.com/users')
.then((data)=> {return data.json()})
.then((newData) =>{
    console.log(newData);
})
.catch((error)=>{
    console.log(error);
})