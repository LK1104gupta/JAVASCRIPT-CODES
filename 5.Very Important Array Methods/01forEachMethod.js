// For Each method
// All methods are for array that's why we create array first

const numbers = [5,8,6,1,9]

// Now let's create a function that print the index and multiply each number with the index
const multiplyByIndex = (number, index) => {
     console.log(`Index : ${index},  Number: ${number*index}`);
}
// multiplyByIndex(4,numbers[4])


// For loop output
// for(let i =0; i<numbers.length; i++){
    // console.log(multiplyByIndex(numbers[i],i))
// }

// For Each Output
// numbers.forEach(multiplyByIndex)

// numbers.forEach((numbers,index) =>
// console.log(`Index : ${index}, multiplication : ${index*numbers}`)
// )
// This type of function called anonymous function

// Foreach function works
// It passes number and index as arguments to the callback function
// It works as loop

// Real life example
const users = [
    {FirstName : "Lalit", age : 25},
    {FirstName : "MOnu", age : 21},
    {FirstName : "Krishna", age : 17},
    {FirstName : "Ashu", age : 23},
    {FirstName : "Ashish", age : 19}
]
users.forEach((users) => console.log(users.FirstName))
// Now thing is that you can use for of loop for this but why we used forEach method beacuase for of loop is newer than
// the method and so many coders have used this method to do these types of tasks that's why learning this is important

for(let user of users){
    console.log(user.age)
}
