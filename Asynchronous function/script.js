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
}

document.querySelector("#start").addEventListener("click",startChanging);
document.querySelector("#stop").addEventListener("click",stopChanging);