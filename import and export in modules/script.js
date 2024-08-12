// export function sum(a, b, c) {
//     return a + b + c;
//   }
  
import {name} from "./utility.js"
const hero = name("Abhishek Bhatta");
console.log(hero);


// for exporting all

export *  as hero from "./utility.js"

// for changing name of the module
export {hero as h } from "./utility.js"