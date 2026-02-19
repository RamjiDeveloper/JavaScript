const user = {
    username: "Ramji",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sham"
// user.welcomeMessage()

// console.log(this);

// function chai (){
//     let username = "ramji"
//     console.log(this.username);
    
// }
// chai()


// const chai = function() {
//     let username = "ramji"
//     console.log(this.username);
// }
// chai()
const chai = () =>  {
    let username = "ramji"
    console.log(this);
}
// chai()


// const addTow = (num1, num2) => {                    // explicite
//     return num1 + num2
// }
// const addTow = (num1, num2) => num1 + num2              // implicite
    
const addTow = (num1, num2) => ({username: "ramji"})

console.log(addTow(3,4))