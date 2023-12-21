// for Loop in array

let faang =["Facebok","Apple","Amazon","Netflix","Google"]
console.log(faang.length) //lenght of array
console.log(faang[faang.length-1]) //value of last index

// Now For loop comes into the picture
for(let i=0; i<faang.length;i++){
    console.log(i)  //All the indexes of array
}
for(let j =0; j<faang.length;j++){
    console.log(faang[j]) //For printing the values
    // console.log(faang[j].toUpperCase()) For printing into upper case
}

let array =[]
for(let j =0; j<faang.length;j++){
    array.push(faang[j].toUpperCase()) //FOr collecting value into array
}
console.log(array)