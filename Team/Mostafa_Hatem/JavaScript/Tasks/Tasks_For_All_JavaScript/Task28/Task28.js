// Write Your Function Here

function customMerge() {
  let result = [];
  let index = 0;

  for (let i = 0; i < arguments.length; i++) {
    let currentArray = arguments[i];
    for (let j = 0; j < currentArray.length; j++) {
      result[index] = Number(currentArray[j]);
      index++;
    }
  }

  return result;
}
console.log(
  customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10])
);

// [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]
