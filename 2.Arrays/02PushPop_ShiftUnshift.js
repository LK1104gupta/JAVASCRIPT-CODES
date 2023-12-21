// Array Push Pop
// Push and pop are used to remove and add the elements in array from last

// Push
let fruits = ["Apple", "Mango", "Banana"]
console.log(fruits)
fruits.push("Orange")  //Added Orange to last index
console.log(fruits)  

//Pop
fruits.pop() //Removed orange from last index
console.log(fruits)
// Pop not only removes the element but it also return the element
let removedfruit = fruits.pop() // Storing removed banana from into removedfruit
console.log(fruits)
console.log(removedfruit)



// Array Shift Unshift
// Unshift and shift are used to remove and add the elements in array from starting

// Unshift
fruits.unshift("Watermelon","Papaya") //Added two elements in starting
console.log(fruits)

// Shift
fruits.shift() //Removed watermelon from start
console.log(fruits)
// Shift not only removes the element but also returns it
let remove = fruits.shift() //storing removed papaya from into removed
console.log(fruits)
console.log(remove)