


// const array = [0, 1, 2, 3, 4, 5]

// console.log(array.filter);
// console.log(typeof array);

// array.push(10)
// array.pop()
// array.unshift(0)
// array.shift()

// console.log(array.includes(3));
// console.log(array.indexOf(3));

// const newArray = array.join()

// console.log(array);
// console.log( typeof newArray);


// slice splice

// console.log("a", array);

// const sli = array.slice(1, 3)      //slice give the value given parameter range left end value
// console.log(sli);
// console.log("b", array);

// const spli = array.splice(1, 3)     // splice complete the array it gives the out of given range value like it left the value given range and print the value all out side value
// console.log("c", array);
// console.log(spli);






// const marvel_heros = ["Ironman", "Thor", "Spiderman"]
// const dc = ["Superman", "Flash", "Aquaman"]

// marvel_heros.push(dc)
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][2]);

// const both = marvel_heros.concat(dc)
// console.log(both);


// const all_new_heros = [...marvel_heros, ...dc]    //Spred array
// console.log(all_new_heros);



// const another_array = [1,2,3, [3,2,4,5], 3,2,5,6, [3,5, [4,2,5,6]]]

// const solve_another_array = another_array.flat(Infinity)
// console.log(solve_another_array);


// console.log(Array.isArray("Ramji"))
// console.log(Array.from("Ramji"))
// console.log(Array.from({name: "Ramji"}))     //interesting

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3));



// object



//singlton when declear a constructor

//and second object literals

// const mySys = Symbol('key1')

// const obj1 = {
//     name: 'RAmji',
//     [mySys]: 'myKey1',
//     email: 'ramji@gmail.com',
//     isLogedIn: 'false',
//     IsActive: 'true',
// }

// console.log(obj1.email);
// obj1.email = 'raj@gmail.com'


// Object.freeze(obj1)
// obj1.email = 'ramji54@gmail.com'


// console.log(obj1['email']);
// console.log(obj1[mySys]);

// console.log(obj1);


// obj1.greeting = function() {
//     console.log('Hello Users');
// }
// obj1.greeting2 = function() {
//     console.log(`Hello Users, ${this.name}`);
// }
// console.log(obj1.greeting());
// console.log(obj1.greeting2());



//singlton when declear a constructor


// const tinderUser = new Object()     ///Singleton Object
const tinderUser = {}                 // Non Singleton Object



tinderUser.id = '1234abc'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Ramji",
            lastName: 'Yadav'
        }
    }
}

// console.log(regularUser.fullName.userFullName);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}


// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const user = [
    {
        id: 1,
        email: 'ram@gmail.com'
    },
    {
        id: 1,
        email: 'ram@gmail.com'
    },
    {
        id: 1,
        email: 'ram@gmail.com'
    },
]

// user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));     
// console.log(tinderUser.hasOwnProperty('isLogged'));



const course = {
    courseName: 'Js In Hindi',
    price: '999',
    courseInstructor: "Hitesh"
}
// course.courseInstructor

const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);


// {
//     'courseName': 'Js In Hindi',
//     'price': '999',
//     'courseInstructor': "Hitesh"
// }

[
    {},
    {},
    {}
]

