// How to clone arrays
// How to concatenate two array


// Laymen method to clone array
let array1 = ["Daud", "Ibrahim", "Osama"]
// let array2 = ["Daud", "Ibrahim", "Osama", "Kejriwal"]
// Never use this method

// Slice method to clone array
// let array2 = array1.slice(0)
// let array2 = array1.slice(0).concat(["Kejriwal"])

// cloing using concatenating array
// let array2 = [].concat(array1)
// let array2 = [].concat(array1, ["Kejriwal", "Imran"])

// New way of cloning array i.e by spread operator
// let array2 = [...array1]
let array3 = ["Babar", "Humayion"]
// let array2 = [...array1, "Akbar"]
let array2 = [...array1,...array3]


// Above all slice method is the fastest whereas spread operator is most used

// Output
console.log(array1===array2)
console.log(array1)
console.log(array2)