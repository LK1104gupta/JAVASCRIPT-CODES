// While loop Example

// Print sum of first 10 natural numbers i.e
// 1+2+3+4+5+6+7+8+9+10

let i=1;
let total=0;
while(i<=10){
    total = total+i
    i++
}
console.log(`The sum of first 10 natural no. is ${total}`)

// Faster way of solving
let num = 10
let sum = (num*(num+1))/2
console.log(sum)
