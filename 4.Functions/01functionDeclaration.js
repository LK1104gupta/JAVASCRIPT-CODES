// While programming we came in a situation where we have to repeate same block of code again and again,and don't you think writing the same code can be tidious task and increase the lenght of program.
// In programming there is a principle DRY:- Don't Repeat Yourself
// And Function helps us to acheive this principle

// So in this type of situation what you need a saviour(function) who have these fratures:-
// 1.Obedient (always response)
// 2.Availablensess(always available)
// 3.Acceptance(Arguments or values we pass to the function)
// 4.Feedback (means return something)
// 5.Have acceptance but at a certain level(basically we are talking about parameters)
// 6.Not a reluctant (basically a function call another function)
// 7.offcourse it has a name

// Now it's time to make our hero but before that we have to create a work or situation i.e given below
// situation is : you pass a name to a function where it have to print that name saying happy birthday name.
// For eg if you pass danny to name it prints happy birthday danny

function happyBirthday(name){
    console.log(`happy birthday ${name}`)
}
happyBirthday("Munna")
// In above code function is a like marvels tag there then happyBirthday which is name of our function and in() parameters comes
// In our function we need only thing which is name or string which we use to acheive final goal
// In line 21 we are calling our function and in braces passing arguments

// From line 18-20 these type of creating function is known as function declaration(creating function with function keyword)

function isEven(num){
    return num % 2 ===0
}
console.log(isEven(8));

function firstChar(name){
    return name[0]
}
console.log(firstChar("Iyyer"))

function find(source, target){
    for(let sources of source){
       if(sources === target){
        return "found"
       }    
  }
  return "notFound"
}
let myArray = ["monu", "sonu", "beenu", "meenu"]
console.log(find(myArray, "beenu"))