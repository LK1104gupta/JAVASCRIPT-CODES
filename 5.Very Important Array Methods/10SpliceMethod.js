// Splice method
// It mutate the array
// splice(start, delete(specify the number to be deleted), insert)
// This method is mostly used for deleting and inserting value into array

const array  = ["item1", "item2", "item3"]
// delete {it returns the deleted value}
const deletedArray = array.splice(1,1)
console.log(array);
console.log(deletedArray);

// Inserting the value
array.splice(1,0,"inserted item")
console.log(array);

// Insert and delete together
array.splice(2,1,"item rapchik")
console.log(array);
