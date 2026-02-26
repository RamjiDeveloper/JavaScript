const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// const newNum = myNum.filter( (num) => num > 4 )
// console.log(newNum);
// const newNu = myNum.filter( (num) => {
//     return num > 4
// } )
// console.log(newNu);


// const newNum = []
// myNum.forEach( (num) => {
//     if(num > 4){
//         newNum.push(num)
//     }
// })
// console.log(newNum);



const books = [
    {title: 'Book one', genre: 'History', publish: 1990, edition: 2010},
    {title: 'Book two', genre: 'Non-Fiction', publish: 1965, edition: 2010},
    {title: 'Book three', genre: 'Science', publish: 1970, edition: 2010},
    {title: 'Book four', genre: 'Fiction', publish: 1980, edition: 2010},
    {title: 'Book five', genre: 'Science', publish: 1926, edition: 2010},
    {title: 'Book six', genre: 'Non-Fiction', publish: 1690, edition: 2010},
];


let userBook = books.filter( (bk) => (bk.genre === 'Fiction')) 

userBook = books.filter( (bk) => {
    return bk.publish >= '1970'
})

console.log(userBook);
