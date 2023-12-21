// undefined
let number;
console.log(number) 
number = 15
console.log(typeof number , number)

// Null
let name = null;
console.log(name)
// The typeof null is object which is an error or bug.
console.log(typeof name)
name = "Sagar"
console.log(typeof name, name)

// BigInt
console.log(Number.MAX_SAFE_INTEGER)
// 9007199254740991 is max limi for integer(we can know this through above method).If we write bigger
// number than this we have to use BigInt also bigINt can hold lesser value than this
let num = BigInt(50)
let num2 = 12n
console.log(num+num2)
console.log(typeof num, typeof num2)