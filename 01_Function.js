function sayMyName(){
    console.log("R");
    console.log("a");
    console.log("m");
    console.log("J");
    console.log("i");
    
}
// sayMyName()

// function addTwoNumber(num1, num2){
//     console.log(num1 + num2);
//     console.log(num1 - num2);
//     console.log(num1 * num2);
// }

function addTwoNumber(num1, num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
}
const result = addTwoNumber (2, 4)
// console.log("Result:", result);


function loginUserMessage (username = 'Sam') {       //if user not mention anything then return undefined so this issue solved you return here sam if user undefind then print sam if user mentioned something then these valuse are override then these value sam are not printed
    if(username === undefined){            // if(!ussername){console.log('Please Enter a user name'); return}
        console.log('Please Enter a user name');
        return
    }
    if(username === ''){
        console.log("Please write somting");
        return 
    }
    return `${username} Just Logged in`
}

//console.log(loginUserMessage('RAmji'))
//console.log(loginUserMessage(''))      // empty
//console.log(loginUserMessage())      //undefined


function calculateCartPrice(val1, val2, ...num1){         //  called rest operator ...num1 also called spred operator but in depen on use case
    return num1
}
console.log(calculateCartPrice(2, 34, 200, 300, 500, 800))


const user = {
    username: "Ramji",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: 'Sam',
    price: 299
})


const myNewArr = [20, 400, 500, 600]
function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([20, 400, 500, 600]));
