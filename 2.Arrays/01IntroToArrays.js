// Intro to arrays
// array is a referenced type 

// What is arrays
// collection of elements
// ordered collection of items(much better definations)

// how to create an array
let cricketers = ["Dhoni", "Virat", "Rohit", "Dhawan", "Jaddu"]
console.log(cricketers)
// This shows arrays are mutable or can be changed
cricketers[3] = "Gill"
console.log(cricketers)
// Arrays can store all primitive data types i.e string, number, null, undefined etc
let num = [7,18,45,25,30]
console.log(num)

// In other programming languages arrays are considered are homogenious collection of ordered elements.
// But in JS it is heterogeneous collection of ordered elements


console.log("<---------------2nd output-------------------->")
let mixed= [1,2,"String",null, undefined]
console.log(typeof mixed)
console.log(mixed)


// Some Important Points
// All referenced type are called object in Javascript
// Hence array is an object 
console.log(typeof num, typeof cricketers)
// But there are so many objects already present in Js so how will you find out that it's an array or not
// For that we use an fuction of array called isArray()
console.log(Array.isArray(mixed))
console.log(Array.isArray(cricketers))
// If result is true than it is a array or if it's false then it not an array2
