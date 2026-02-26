const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNum = number.map( (num) => {return num + 10 })
// console.log(newNum);

const newNumber = number
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num + 20;
  })
  .filter((num) => {
    return num >= 50;
  });

// Chaining
console.log(newNumber);
