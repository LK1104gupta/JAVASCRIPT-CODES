// Array Destructuring
// It first came in ES6

//  const myArray = ["value1", "value2"]
// let var1 = myArray[0]
// let var2 = myArray[1]
// console.log(var1)
// console.log(var2)

// Better way of doing this
// let[var1, var2] = myArray
// console.log(var1)
// console.log(var2)
// Internally both does the same thing but second one is more preferable

// Q1. What if myArray have value3 also
// Ans. Nothing will happen
 const myArray = ["value1", "value2", "value3", "value4"]
// let var1 = myArray[0]
// let var2 = myArray[1]
// console.log(var1)
// console.log(var2)
//See Nothing happened

// Q2.What if I have to store value3 in vaar2
// Ans. For that you have to skip one index like shown below 
// let [var1,,var2] = myArray
// console.log(var1)
// console.log(var2)

// Q3. What if I have to store value1, value2 in var1, var2 and rest into an newArray
// Ans. You have to use spread operator for that
let [var1,var2,...mynewArray] = myArray
console.log(var1)
console.log(var2)
console.log(mynewArray)

// creating undefined constant in js using array destructruing
const n1 = NaN
console.log(typeof n1)

