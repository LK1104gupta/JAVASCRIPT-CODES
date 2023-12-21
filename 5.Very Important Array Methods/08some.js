// Some method
// Return true if one iteration of callback function return true

const usercart = [
    {ProductID : 1, ProductName : "Iphone", Price : 80000},
    {ProductID : 2, ProductName : "Imac", Price : 150000},
    {ProductID : 3, ProductName : "Ipad", Price : 50000},
    {ProductID : 4, ProductName : "Macbook", Price : 100000}
]

console.log(usercart.some(product => product.Price<60000));

