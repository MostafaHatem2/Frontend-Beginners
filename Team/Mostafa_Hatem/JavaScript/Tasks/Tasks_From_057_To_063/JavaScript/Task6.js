function multiply(...args) {
  let result = 1;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "number") {
      let num = Number.isInteger(args[i]) ? args[i] : parseInt(args[i]);
      result *= num;
    }
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
