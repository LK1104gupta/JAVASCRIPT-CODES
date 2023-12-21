// Sets (It is a iterable)
// store data
// sets also have it's own methods
// No index based access
// Order is not guranteed
// Unique items only (no duplicates allowed)

const numbers = new Set([1,2,5,6,7,8])
numbers.add(3)
console.log(numbers);

console.log(numbers[2], "It shows undefined because no index based access");

// Adding value in empty set
const array = ["i" ,"am " ,"array"]

const num = new Set()
num.add(4)
num.add(5)
num.add(0)
num.add(9)
// We can store different data types in sets
num.add(array) //this will add
num.add(array) //This will not add because of duplication

num.add(["i","am","array"])
num.add(["i","am","array"])
// Both will get added because they will be located in different memory location in array
// When we create a new array a new memory is allocated it doesn't matter that their elements are same
console.log(num);



// Has method
// Used to find the element present or not if element founded it will return true
// For e.g :- Let's check whether 1 is present in num or not

console.log(num.has(1)); //Returns false as it is not present

const myArray = [2,3,3,4,4,5]
const uniqueElements = new Set(myArray)
console.log(uniqueElements);
console.log(myArray);

// Let's iterate the set
//  for(const element of uniqueElements){
    // console.log(element);
//  }

// Let use the lenght property on set
console.log(uniqueElements.length);
// Lenght property doesn't work on set

let i=0
for(const element of uniqueElements){
     i++
}
console.log(i);