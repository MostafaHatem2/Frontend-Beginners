// Write Your Function Implementation Here
String.prototype.elzeroRepeat = function (num) {
  return this.repeat(num).trim();
};

console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero
