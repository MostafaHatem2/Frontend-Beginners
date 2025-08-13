let last = 30;

let sum = 0;
for (let i = last - 1; i > 0; i -= 4) {
  console.log(i);
  sum = sum + i;
}

console.log(sum);

// First Request Output Needed
// 29;
// 25;
// 21;
// 17;
// 13;
// 9;
// 5;
// 1;

// Second Request Output Needed
// 120;
