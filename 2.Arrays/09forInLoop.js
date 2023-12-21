// For In Loop
// for in Loop gives indexes means keys

const pulse =["Arhar", "Moong", "Chana", "Rajma"]
const puls =[]
for(pulses in pulse){
    console.log(pulses)
    // console.log(pulse[pulses])  //For printing the values
    puls.unshift(pulses)
}
// console.log(puls) :- For Printing values in reverse order