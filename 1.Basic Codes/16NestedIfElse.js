// Nested If else

// winning number 19
// 19 your number is right
// >19 too low
// <19 too high

let winnum = 19
let guess = +prompt("Guess a number")

if(guess === 19){
    console.log("You guessed it right")
}
else{
    if(guess<19){
        console.log("Too low")
    }
    else{
        console.log("Too high")
    }
}