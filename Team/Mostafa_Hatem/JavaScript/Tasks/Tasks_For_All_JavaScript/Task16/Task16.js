function getCharacters(word, nums) {
  // Your Code Here
  let frist = word.slice(0, nums);
  let last = word.slice(word.length - nums);
  return frist + last;
}

console.log(getCharacters("Elzero School", 2)); // Elol
console.log(getCharacters("Elzero School", 3)); // Elzool
