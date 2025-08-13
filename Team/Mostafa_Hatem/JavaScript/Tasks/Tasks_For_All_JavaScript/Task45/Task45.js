let rangeEnd = 10;
let myRange = [];

for (let i = 1; i <= rangeEnd; i++) {
  myRange.push(i);
}

console.log(myRange);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let rangeEnd2 = 10;
let myRange2 = Array.from({ length: rangeEnd2 }, (_, i) => i + 1);

console.log(myRange2);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let rangeEnd3 = 10;
let myRange3 = [...Array(rangeEnd3).keys()].map((i) => i + 1);

console.log(myRange3);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
