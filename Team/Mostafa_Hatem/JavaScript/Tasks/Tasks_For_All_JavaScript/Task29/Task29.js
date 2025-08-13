// Write Your Function Here

function customCalc() {
  let result = 0;
  let frist = arguments[0];
  let last = arguments[arguments.length - 1];
  for (let i = 0; i < arguments.length; i++) {
    arguments[i] = +arguments[i];
    if (!isNaN(arguments[i])) {
      result += arguments[i];
    }
  }
  return result * frist * last;
}

console.log(customCalc("10", 20, "A", "40", 15));
// 12750 <= (10 + 20 + 40 + 15) * 10 * 15

console.log(customCalc(5, "15", 10, 5, 10));
// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

console.log(customCalc(30, 5, "C", 10));
// 13500 <= (30 + 5 + 10) * 30 * 10
