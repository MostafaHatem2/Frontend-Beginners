let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let result = myArray
//   .filter((ele) => ele !== Array.isArray(ele))
//   .join(",")
//   .split(",")
//   .join("");

let result = myArray
  .reduce((acc, curr) => acc + curr)
  .split(",")
  .join("");

console.log(result);

// Elzero
