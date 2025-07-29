let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let count = index;

while (index < friends.length) {
  if (typeof friends[index] == "string") {
    if (friends[index][count] != "A") {
      console.log(`${++counter} => ${friends[index]}`);
    }
  }
  index++;
}
