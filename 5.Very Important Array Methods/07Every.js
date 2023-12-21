// Every method
// Input :- callback function which returns boolean
// return :- Boolean

// Now as the name suggests every means that this function will only return true if every iteration of callback function return true

// Let's check that below array numbers have all the eve numbers or not

// const numbers =[2,4,6,8,12]  //Have all even numbers
const numbers =[2,4,6,9,8,12]  //Have one odd numbers
const ans = numbers.every(number=> number%2===0);
console.log(ans);


// Some real stuff
// TASK :- Check that product orice is less than 30000
const usercart = [
    {produtId : 1, productName : "Mobile", productPrice : 12000 },
    {produtId : 2, productName : "Laptop", productPrice : 28000 },
    {produtId : 3, productName : "Tablet", productPrice : 20000 },
]
const ans2 = usercart.every((cart=>cart.productPrice <30000))
console.log(ans2)
// It will return true as every product price is less than 30000