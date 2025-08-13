function swapEveryTwoChars(word) {
  let chars = word.split("");

  for (let i = 0; i < chars.length; i++) {
    if (i % 2 === 0) {
      chars[i] =
        chars[i] === chars[i].toUpperCase()
          ? chars[i].toLowerCase()
          : chars[i].toUpperCase();
    }
  }

  return chars.join("");
}

console.log(swapEveryTwoChars("elZeRo")); // Elzero
console.log(swapEveryTwoChars("heLlO")); // Hello
