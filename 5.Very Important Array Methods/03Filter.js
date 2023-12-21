// Filter method
// Same as map method but onky return the true statement, let's see what it is

// Suppose we have an array with some numbers and we have to create a new array with its ecen numbers from the
// array, sounds like filtering the even numbers from array

const numbers = [1,2,3,4,5,6,8,9,7]

function isEven(number){
    return number%2===0
}
function isOdd(number){
    return number%2!==0
}
const even = numbers.filter(isEven)
const odd = numbers.filter(isOdd)

console.log(even);
console.log(odd);

