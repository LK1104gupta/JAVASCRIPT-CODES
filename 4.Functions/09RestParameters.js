// Rest Parameters

// function myfunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log("c is ",c);
// }
// myfunc(3,5,8,9,7,6)

function addAll(...numbers){
    total =0
    for(let number of numbers){
        total = total+number
    }
    console.log(total);
}
addAll(1,2,5,7,8,4)