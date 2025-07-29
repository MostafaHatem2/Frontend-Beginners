let start = 0;
let swappedName = "elZerO";
let result = "";

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    result += swappedName[i].toUpperCase();
  } else {
    result += swappedName[i].toLowerCase();
  }
}

console.log(result); // Output: "ELzERo"
