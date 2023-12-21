// Computed Properties
const key1 = "objkey1"
const key2 = "objkey2"

const value1 = "myvalue1"
const value2 = "myvalue2"

// Task
// const obe = {
//   objkey1 : myvalue1,
//   objkey2 : myvalue2
// }

// Normal method
// const obj = {}
// obj[key1] = value1
// obj[key2] = value2

// By using computed values
const obj ={
    [key1] : value1,
    [key2] : value2
}
console.log(obj)

// By using for in loop
for(let key in obj){
    console.log(key, ":",obj[key])
}