// Sort
// Mutate the array
// Sorts in ascending order but according to the ascii value

// It converts numbers into string and then sort according to the ascii value of the first character of the string
// It sorts the string in alphabetical order and capital letters comes first, because ASCII code of capital are starting from 65 and for small it starts from 97

// Sorting of string  down below
const username = ["lalit", "MOnu", "Krishna", "ashu"]
username.sort()
console.log(username);

// Sorting of numbers down below
// const number = [1500,400,6,84,73, 2]
// number.sort()
// Expected output = [2,6,73,84,400,1500]
// console.log(number);
// Real output = [1500,2,400,6,73,84] (reason for this on line 5)

// Now it is a time to resolve the issue
const number = [1500,400,6,84,73, 2]
console.log(number.sort((a,b)=>a-b));

// Let's see how the above code works
// Taking example of 1500 and 400
// a-b ----> 1100
// a-b ----> positive(greater than 0) ----> b,a
// 400,1500

// a-b(6,84) ----> -78
// a-b ----> Negative(less than 0) ----> a,b
// 6,84


// Some real life example
const product =[
    {productID : 1, productName : "P1", price : 200},
    {productID : 2, productName : "P2", price : 1000},
    {productID : 3, productName : "P3", price : 45},
    {productID : 4, productName : "P4", price : 1600},
    {productID : 5, productName : "P5", price : 369}
]
// Now we don't want to mutate the array so let's clone it

const priceLowToHigh =  product.slice(0).sort((a,b)=>a.price-b.price)
console.log(priceLowToHigh);

const priceHighToLow =  product.slice(0).sort((a,b)=>b.price-a.price)
console.log(priceHighToLow);
