let nums = [10, 80, 85, 25, 30, 88, 15];
let goal = 100;

// Your Code Here
let closest = nums.reduce((prev, curr) =>
  Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev
);

console.log(`Closest Number Is ${closest}`);

// Closest Number Is 88
