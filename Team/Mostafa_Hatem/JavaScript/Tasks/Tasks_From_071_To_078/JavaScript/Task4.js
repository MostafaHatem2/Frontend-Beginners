let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result = numsAndStrings
  .filter((ele) => (typeof ele === "string" ? "" : -ele))
  .map((ele) => (typeof ele === "number" ? -ele : ""));

console.log(result);

// [-1, -10, 10, 20, -5, -3]
