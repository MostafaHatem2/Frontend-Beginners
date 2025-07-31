let myString = "EElllzzzzzzzeroo";

let result = myString
  .split("")
  .filter((ele, index, arr) => ele !== arr[index + 1])
  .join("");

console.log(result);

// Elzero
