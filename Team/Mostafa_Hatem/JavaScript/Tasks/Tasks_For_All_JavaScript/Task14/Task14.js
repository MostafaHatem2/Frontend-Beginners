function repeatWithRules(word) {
  // Your Code Here
  let result = "";
  for (let i = 0; i < word.length; i++) {
    result += word[i].repeat(i + 1);
  }
  return result;
}

console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
console.log(repeatWithRules("Hello")); // Heelllllllooooo
