let smallLetters1 = "";
for (let i = 97; i <= 122; i++) {
  // 'a' = 97, 'z' = 122
  smallLetters1 += String.fromCharCode(i);
}
console.log(smallLetters1); // abcdefghijklmnopqrstuvwxyz

let smallLetters2 = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
).join("");
console.log(smallLetters2); // abcdefghijklmnopqrstuvwxyz

let smallLetters3 = [...Array(26)].reduce(
  (acc, _, i) => acc + String.fromCharCode(97 + i),
  ""
);
console.log(smallLetters3); // abcdefghijklmnopqrstuvwxyz
