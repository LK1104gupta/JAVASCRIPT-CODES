// Map method
// mostly used in react 
// Argument :- element and index
// return :- a new array
// Map takes input as a call back function example :- arrayName.map(callback function)

const numbers = [2,5,8,7,3,6]
// const newArray = numbers.map((number,index) => number*index)
// console.log(newArray);

// but what will happen if you not return anything
// const newArray = numbers.map((numbr,index)=>
// console.log(numbr*index)
// )
// console.log(newArray)
// It will return an array with all elements as undefined
// That's why it is crucial to return


// Real life example 
// Let's store username in new array
const users = [
    {firstname : "Jim" , age : 13},
    {firstname : "Kim" , age : 14},
    {firstname : "Tim" , age : 15},
    {firstname : "Lim" , age : 16},
    {firstname : "Him" , age : 17},
]
const name = users.map(user =>user.firstname)
console.log(name)