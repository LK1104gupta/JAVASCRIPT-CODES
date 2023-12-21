// Lexical scope
// Lexical environment
// Lexical environment chaining
const myvar = "global one"
function main(){
    const myvar = "value1"
    const func1 = function(){
        const myvar = "changed"
        console.log("Inside func1", myvar);
    }
    const func2 = () =>{
        console.log("Inside func2", myvar);
    }
    func1()
    func2()
}
main()
console.log(myvar)

// Every function first check its scope and then it lexical environment and chain continues... like that