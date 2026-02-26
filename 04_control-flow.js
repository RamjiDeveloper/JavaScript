//if


// const isUserLoggedIn = true;

// const tempature  = 10;
// if(isUserLoggedIn ){
//     console.log('You are logged in');
// }
// if(tempature > 35){
//     console.log('It is hot outside');
// } else if (tempature < 20){
//     console.log('temprature is less');
    
// }

// const score = 200 
// if (score > 100) {
//     const power = "fly";                 //dont use var becaouse var is completely global scope   in block scope always use let and const for safe your code and avoid bugs
//     console.log(`User Power: ${power}`);
    
// }
// // console.log(`User Power: ${power}`);





const balance = 3000;
// if(balance > 500) console.log('test');     //implicite scope


// if(balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 500");
// }else if(balance < 900){
//     console.log("less than 900");
// }else(balance > 1000);{
//     console.log("grater than 1000");
// }



const userLoggedIn = true;
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
    
}

