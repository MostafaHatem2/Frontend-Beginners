let myArray = [100, 200, 300, 400];

// Method 1
let clonedArray = [...myArray];

console.log(clonedArray); // [100, 200, 300, 400]

// Method 2
let clonedArray2 = myArray.slice();

console.log(clonedArray2); // [100, 200, 300, 400]

// Method 3
let clonedArray3 = myArray.concat();

console.log(clonedArray3); // [100, 200, 300, 400]

// Method 4
let clonedArray4 = JSON.parse(JSON.stringify(myArray));

console.log(clonedArray4); // [100, 200, 300, 400]

// Method 5
let clonedArray5 = Array.from(myArray);

console.log(clonedArray5); // [100, 200, 300, 400]

// Method 6
let clonedArray6 = myArray.map((item) => item);

console.log(clonedArray6); // [100, 200, 300, 400]

// Method 7
let clonedArray7 = myArray.filter((item) => item);

console.log(clonedArray7); // [100, 200, 300, 400]

// Method 8
let clonedArray8 = myArray.reduce((acc, item) => [...acc, item], []);

console.log(clonedArray8); // [100, 200, 300, 400]

// Method 9
let clonedArray9 = myArray.reduceRight((acc, item) => [...acc, item], []);

console.log(clonedArray9); // [100, 200, 300, 400]
