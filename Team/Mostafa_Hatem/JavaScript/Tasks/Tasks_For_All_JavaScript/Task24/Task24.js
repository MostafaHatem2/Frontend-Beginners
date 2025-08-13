function dashBetweenOdd(num) {
  let str = num.toString();
  let result = str[0];

  for (let i = 1; i < str.length; i++) {
    let prev = parseInt(str[i - 1]);
    let current = parseInt(str[i]);

    if (prev % 2 !== 0 && current % 2 !== 0) {
      result += "-" + current;
    } else {
      result += current;
    }
  }

  return result;
}

console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922
