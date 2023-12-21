// Break
// It breaks the loop and rest of the value doesn't prints

for(let i=0; i<=10; i++){
    if(i===5){
        break;
    }
    console.log(i)
}
console.log("Now see continue")


// continue
// It beaks the position and continues the loop
for(let j=0; j<=10; j++){
    if(j===5){
        continue;
    }
    console.log(j)
}