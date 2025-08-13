function addEl(str) {
  // Your Code Here
  if (str.length === 0) {
    return str;
  } else if (str.split("")) {
    if (str[0] == "E" && str[1] == "l") {
      return str;
    } else {
      return "El" + str;
    }
  }
}

console.log(addEl("")); // ""
console.log(addEl("Elzero")); // Elzero
console.log(addEl("zero")); // Elzero
