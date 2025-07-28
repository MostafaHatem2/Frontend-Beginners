/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

my.pop(), my.pop();

my.reverse();

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

my.pop(), my.shift();

console.log(my); // ["Elham", "Mazero"]

my.pop();
my.push("Elzero");

my.shift();
console.log(my); // "Elzero"

let str = my[zero].slice(counter);

str = str.split("");

str.shift();

let num = str.lastIndexOf("o");

str[num] = "O";
console.log(str.join("")); // "rO"
