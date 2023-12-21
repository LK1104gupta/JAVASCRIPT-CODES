// Spread Operator
const array1 = [1,2,3]
const array2 = [4,5,6]
const num = 9827675

// const newArray = [...array1, ...array2,7,9,56]
// const newArray = [..."abcdefghijklmnopqrstuvwxyz"]
// const newArray = [...""+num]
const newArray = [..."1234567"]
// You cannot spread numbers
console.log(newArray)


// SPREAD OPERATORS IN OBJECTS
const obj1 = {
    key1 : "value1",
    key2 : "value2",
    key2 : "meeToo"
    // Overwriting example
};
const obj2 = {
    key1 : "Overwriting value",
    key3 : "value3",
    key4 : "value4"
}
// const newObj = {...obj1,...obj2}
// const newObj = {...obj1,...obj2, newKey : "Added new key value pair"}
// const newObj = {..."indexBecameKey_And_ElementBecamePair"}
const newObj = {...["item1","item2"]} //Works same as above line no.28
console.log(newObj)

// In object there should be only one key with that key name otherwise the newer one overwrite the
// the value of previous one

// The above concept also work when you are combining two objects in one 