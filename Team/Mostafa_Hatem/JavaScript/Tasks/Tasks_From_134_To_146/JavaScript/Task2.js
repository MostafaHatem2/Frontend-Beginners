let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let re = /\b[A-Z]{2}\d*[A-Z]\b\s/gi;

console.log(specialNames.match(re));

// Output
// ['Os10O', 'OsO', 'Os100O']
