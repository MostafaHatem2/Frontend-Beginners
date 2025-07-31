/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let Names = function () {
  // Parameter ?
  return `${typeof arguments[0]} [${[...arguments].join("] , [")}] => Done !`;
};

console.log(Names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// ###################################################

let names = (...args) => `${typeof args[0]} [${args.join("] , [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// /* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];
let calc = function (one, two, ...nums) {
  return one + two + nums.shift();
};

console.log(calc(10, myNumbers.shift(), myNumbers.shift())); // 80

// ###################################################

let myNumber = [20, 50, 10, 60];
let calcl = (one, two, ...nums) => one + two + nums.shift();

console.log(calcl(10, myNumber.shift(), myNumber.shift())); // 80
