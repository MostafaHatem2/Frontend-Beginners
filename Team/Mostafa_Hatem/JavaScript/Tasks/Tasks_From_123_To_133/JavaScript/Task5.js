let theName = "Elzero";

console.log([...theName]);
console.log(theName.split(""));
console.log([...new Set(theName)]);
console.log(Array.from(theName));
console.log(Array.from(theName, (c) => c));

// Needed Output
// ["E", "l", "z", "e", "r", "o"];
