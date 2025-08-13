let nums = [20, 100, 50, 10, 15, -20, 30];

let max = Math.max(...nums);

let result = nums.filter((num) => num !== max);

let maxResult = Math.max(...result);

console.log([max, maxResult]);

// Needed Output
// [100, 50];
