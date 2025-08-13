function formatName(theName) {
  // Your Code Here
  return theName
    .split(" ")
    .map((word, index) =>
      index === 0 ? word[0].toUpperCase() : word[0].toLowerCase()
    )
    .join(".");
}

console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s
