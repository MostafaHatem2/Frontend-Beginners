let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";

let result = myString.split("@", 3).slice(0, 2).join("@");
console.log(result);

// Output Needed
// ("Hello Elzero Web School @ We Love Programming");
