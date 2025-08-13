function concatenateWithoutLast(words) {
  // Your Code Here
  for (let i = 0; i < words.length; i++) {
    let result = words[i].split("");
    result.pop();
    console.log(result.join(""));
  }
}

console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School
