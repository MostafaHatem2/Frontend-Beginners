let nums = [10, -20, 300, 50, 100, -50];

let maxNumber = Math.max(...nums);

console.log(maxNumber); // 300

let maxNumber2 = nums.reduce(
  (max, current) => (current > max ? current : max),
  nums[0]
);

console.log(maxNumber2);

let max3 = [...nums].sort((a, b) => b - a)[0];
console.log(max3);

let max4 = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max4) {
    max4 = numbers[i];
  }
}
console.log(max4);
