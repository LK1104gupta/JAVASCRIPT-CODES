// Function Inside Function

function app(){
    const myFunc = () =>{
        console.log("Hello from myFunc");
    }
    const add = (num1, num2) => {
        console.log(num1+num2)
    }
    const mul = (x,y) => {
        console.log(x*y);
    }
    myFunc()
    add(3,3)
    mul(3,3)
}
app()
 