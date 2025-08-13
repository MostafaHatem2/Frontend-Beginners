function reversing(str) {
  // Write Your Code Here
  return str.split(" ").map((word) => word.split("").reverse().join(""));
}

console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl
