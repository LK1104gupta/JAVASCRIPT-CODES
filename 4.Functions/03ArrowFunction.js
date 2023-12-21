// Function declaration
// function isEven(num){
//     return num%2===0
// }
// console.log(isEven(6))

// Function expression
// const sum = function(num1, num2){
//      return num1+num2
// }
// console.log(sum(5,8));

// Now comes ARROW FUNCTION
// const mul = (num1,num2) => num1*num2
// console.log(mul(5,3))

// When there is only one parameter we can remove brackets and you can also return keyword if there is only 1 line to return
const isOdd = num => num%2!==0
// return num%2!==0?true : false
console.log(isOdd(5))

const firstChar =cahr => cahr[0]
console.log(firstChar("Lalit"));