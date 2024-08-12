// function name(){
//     console.log("This is an higher order function : ");
// }

// function anotherName(func){
//     console.log("This is hof");
//     func();
// }
// anotherName(name);

// function callbackFunction(){
//     console.log('I am  a callback function');
// }

// // higher order function
// function higherOrderFunction(func){
//     console.log('I am higher order function')
//     func()
// }

// higherOrderFunction(callbackFunction);







const feeling = (sad,happy)=>{
    console.log(`I am not feeling ${happy} but my heart is so much heavy and feeling ${sad}`);
}

function name(arg1,arg2,newfun){
    console.log("My first feelings is",arg1,"and second feelings is" ,arg2 );
    return newfun(arg1,arg2);
}
name( "😢"," 😉 ",feeling);