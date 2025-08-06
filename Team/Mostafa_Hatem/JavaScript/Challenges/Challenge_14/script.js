/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let { title, age, available, skills } = myFriends[chosen - 1];

if (available === true) {
  available = "Available";
} else {
  available = "Not Available";
}

let [, two] = skills;

console.log(title);
console.log(age);
console.log(available);
console.log(two);
