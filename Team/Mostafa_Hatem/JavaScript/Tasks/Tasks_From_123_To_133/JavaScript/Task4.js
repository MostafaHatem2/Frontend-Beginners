let theNumber = 100020003000;

console.log(...new Set([+theNumber.toString().split("0").join("")]));

// Needed Output
// 123;
