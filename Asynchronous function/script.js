// const randomNumber = function(){ 
//     const hexNumber = "0123456789ABCDEF";
//     let color = "#";
//     for(let i=0; i<6; i++){
//         color += hexNumber[Math.floor(Math.random()*16)];
//     }
//     return color;
// }
// console.log(randomNumber());


// let neww;
// function clickme(){
//          neww = setInterval(newsInterval, 1000);
//         function newsInterval(){   //Rndomly change the color at time of 1s;
//             document.body.style.backgroundColor = randomNumber();
//         }
//     }

// function stopMe(){
//  clearInterval(neww);
// }

//  document.getElementById('start').addEventListener('click',clickme);
//  document.getElementById('stop').addEventListener('click',stopMe);

function changColor(){
    const hexColor = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0 ; i<6; i++){
      color +=  hexColor[Math.floor(Math.random()*16)];
    }
    return color;
}
console.log(changColor());

let setint ; // global decleration
function startChanging(){
    setint = setInterval(change,1000);
    function change(){
    document.body.style.backgroundColor = changColor();
}
}

function stopChanging(){
    clearInterval(setint);
    setint = null;
}

document.querySelector("#start").addEventListener("click",startChanging);
document.querySelector("#stop").addEventListener("click",stopChanging);



// XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.
 
/*
Value	State	                             Description
0	    UNSENT	                             Client has been created. open() not called yet.
1	    OPENED	                             open() has been called.
2	    HEADERS_RECEIVED	                 send() has been called, and headers and status are available.
3	    LOADING	                             Downloading; responseText holds partial data.
4	    DONE	                             The operation is complete.
*/