function replaceFirstWithLast(word) {
  return word.replace(word[0], word[word.length - 1]);
}

console.log(replaceFirstWithLast("olzerE")); // Elzero
console.log(replaceFirstWithLast("Hello")); // oelloH
