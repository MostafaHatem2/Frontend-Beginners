

let numberOne = 10 , numberTwo = 20;

console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof(numberOne + "" + numberTwo)); // Normal Concatenate => String

console.log(`${numberOne}${numberTwo}`); // Template Literal Way => 1020
console.log(typeof(`${numberOne}${numberTwo}`)); // Template Literal Way => String

console.log(numberTwo + "\n" + numberOne); // Normal Concatenate

console.log(`${numberTwo}
${numberOne}`); // Template Literals Way