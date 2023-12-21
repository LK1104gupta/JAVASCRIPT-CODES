// Default Parameters

// Before ES6
// function sum(a,b){
    //    if(typeof b === undefined){
    //       b=0
    //    }
    //   retuen a+b
// }


// After ES6
const sum = function(a,b=0){
    return a+b
}
console.log(sum(5,5));
console.log(sum(5));   
