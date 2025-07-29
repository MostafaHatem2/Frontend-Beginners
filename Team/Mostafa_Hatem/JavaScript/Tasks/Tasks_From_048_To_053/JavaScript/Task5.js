let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = letter.length;

for (let i = letter.length - letter.length; i < friends.length; i++) {
  if (friends[i][letter.length - letter.length].toLowerCase() !== letter) {
    console.log(counter++ + " => " + friends[i]);
  }
}
