// Reduce method :- It is a very useful method
// Take input as callback function
// It also takes default value for accumulator

const num = [2,5,6,9,8]
// Aim:- add all values of num array
const sum = num.reduce((accumlator, currentvalue) => accumlator+currentvalue)
console.log(sum);
// accumator    currentvalue     return
// 2               5               7
// 7               6               13
// 13              9               22
// 22              8               30

// Real life example

const usercart =[
    {productID : 1, productName : "Mobile", price : 12000},
    {productID : 2, productName : "Tablet", price : 22000},
    {productID : 3, productName : "Laptop", price : 32000},
]
const totalvalue = usercart.reduce((total,product) => {
     return total+product.price
},0)
console.log(totalvalue);
// Total      Product        Price
// 0          12000          12000
// 12000      22000          34000
// 34000      22000          66000 
