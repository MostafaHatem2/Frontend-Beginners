// Needed Output

let dataNow = new Date("2006-01-18");

let diff = Date.now() - dataNow.getTime();

console.log(diff / 1000 + " Seconds");
console.log(diff / 1000 / 60 + " Minutes");
console.log(diff / 1000 / 60 / 60 + " Hours");
console.log(diff / 1000 / 60 / 60 / 24 + " Days");
console.log(diff / 1000 / 60 / 60 / 24 / 30 + " Months");
console.log(diff / 1000 / 60 / 60 / 24 / 365 + " Years ");

// "1247939400 Seconds";
// "20798990 Minutes";
// "346650 Hours";
// "14444 Days";
// "481 Months";
// "40 Years";
